import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const CREDENTIALS_FILE = path.join(process.cwd(), "storage", "admin-credentials.json");

export interface AdminCredentials {
  email: string;
  passwordHash: string;
  tokenVersion: number;
  updatedAt: string;
}

// In-memory rate limiter for login brute-force protection
interface RateLimitEntry {
  attempts: number;
  lockedUntil?: number;
  firstAttemptAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes lockout
const WINDOW_DURATION_MS = 15 * 60 * 1000;

export function checkLoginRateLimit(key: string): {
  allowed: boolean;
  remainingAttempts: number;
  retryAfterSec?: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry) {
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS };
  }

  // Check if locked out
  if (entry.lockedUntil && entry.lockedUntil > now) {
    const retryAfterSec = Math.ceil((entry.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSec };
  }

  // Check if window expired, reset
  if (now - entry.firstAttemptAt > WINDOW_DURATION_MS) {
    rateLimitMap.delete(key);
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS };
  }

  const remaining = Math.max(0, MAX_FAILED_ATTEMPTS - entry.attempts);
  return { allowed: remaining > 0, remainingAttempts: remaining };
}

export function recordFailedLogin(key: string): {
  locked: boolean;
  remainingAttempts: number;
  retryAfterSec?: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(key) || { attempts: 0, firstAttemptAt: now };

  entry.attempts += 1;

  if (entry.attempts >= MAX_FAILED_ATTEMPTS) {
    entry.lockedUntil = now + LOCKOUT_DURATION_MS;
    rateLimitMap.set(key, entry);
    return {
      locked: true,
      remainingAttempts: 0,
      retryAfterSec: Math.ceil(LOCKOUT_DURATION_MS / 1000),
    };
  }

  rateLimitMap.set(key, entry);
  return {
    locked: false,
    remainingAttempts: MAX_FAILED_ATTEMPTS - entry.attempts,
  };
}

export function resetLoginRateLimit(key: string): void {
  rateLimitMap.delete(key);
}

// Ensure credentials file exists and is strictly hashed
export function getAdminCredentials(): AdminCredentials {
  const defaultEmail = process.env.ADMIN_EMAIL || "admin@smartedgebangladesh.com";

  try {
    const storageDir = path.join(process.cwd(), "storage");
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    if (fs.existsSync(CREDENTIALS_FILE)) {
      const content = fs.readFileSync(CREDENTIALS_FILE, "utf8");
      const data = JSON.parse(content);

      // Automatic Migration: If file contains plain text 'password', migrate to bcrypt hash immediately
      if (data.password && !data.passwordHash) {
        const hash = bcrypt.hashSync(data.password, 12);
        const migrated: AdminCredentials = {
          email: data.email || defaultEmail,
          passwordHash: hash,
          tokenVersion: data.tokenVersion || 1,
          updatedAt: data.updatedAt || new Date().toISOString(),
        };
        fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(migrated, null, 2), "utf8");
        return migrated;
      }

      if (data.passwordHash) {
        return {
          email: data.email || defaultEmail,
          passwordHash: data.passwordHash,
          tokenVersion: data.tokenVersion || 1,
          updatedAt: data.updatedAt || new Date().toISOString(),
        };
      }
    }
  } catch (e) {
    console.error("[Auth] Error reading admin credentials:", e);
  }

  // If no credentials file exists yet, generate initial bcrypt hash from env or secure default
  const initialPassword = process.env.ADMIN_INITIAL_PASSWORD || "SmartEdge@2026!";
  const initialHash = bcrypt.hashSync(initialPassword, 12);
  const initialCreds: AdminCredentials = {
    email: defaultEmail,
    passwordHash: initialHash,
    tokenVersion: 1,
    updatedAt: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(initialCreds, null, 2), "utf8");
  } catch (e) {
    console.error("[Auth] Failed writing initial credentials:", e);
  }

  return initialCreds;
}

export function verifyAdminPassword(passwordAttempt: string): boolean {
  if (!passwordAttempt || typeof passwordAttempt !== "string") return false;
  const creds = getAdminCredentials();
  return bcrypt.compareSync(passwordAttempt, creds.passwordHash);
}

export function saveAdminPassword(newPassword: string): boolean {
  try {
    if (!newPassword || newPassword.length < 8) return false;

    const storageDir = path.join(process.cwd(), "storage");
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    const currentCreds = getAdminCredentials();
    const newHash = bcrypt.hashSync(newPassword, 12);

    const updatedCreds: AdminCredentials = {
      email: currentCreds.email,
      passwordHash: newHash,
      tokenVersion: (currentCreds.tokenVersion || 1) + 1, // Invalidate all prior sessions
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(updatedCreds, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("[Auth] Failed writing credentials:", e);
    return false;
  }
}

export function getAdminTokenVersion(): number {
  const creds = getAdminCredentials();
  return creds.tokenVersion || 1;
}
