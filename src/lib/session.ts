// Edge and Node compatible session token implementation using Web Crypto API

export interface SessionPayload {
  email: string;
  role: "super_admin";
  tokenVersion: number;
  iat: number;
  exp: number; // Unix timestamp in ms
}

const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  "smartedge-bangladesh-super-secure-production-hmac-salt-2026-xyz";

function base64UrlEncode(str: string): string {
  if (typeof btoa === "function") {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  return Buffer.from(str, "utf8").toString("base64url");
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  if (typeof atob === "function") {
    return atob(base64);
  }
  return Buffer.from(base64, "base64").toString("utf8");
}

async function getHmacKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(
  email: string,
  tokenVersion: number = 1,
  durationHours: number = 24
): Promise<string> {
  const now = Date.now();
  const payload: SessionPayload = {
    email,
    role: "super_admin",
    tokenVersion,
    iat: now,
    exp: now + durationHours * 60 * 60 * 1000,
  };

  const payloadString = JSON.stringify(payload);
  const payloadB64 = base64UrlEncode(payloadString);

  const key = await getHmacKey();
  const enc = new TextEncoder();
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    enc.encode(payloadB64)
  );

  const signatureArray = Array.from(new Uint8Array(signatureBuffer));
  const signatureBinary = String.fromCharCode(...signatureArray);
  const signatureB64 = base64UrlEncode(signatureBinary);

  return `${payloadB64}.${signatureB64}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<SessionPayload | null> {
  if (!token || typeof token !== "string") return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, signatureB64] = parts;

  try {
    const key = await getHmacKey();
    const enc = new TextEncoder();

    // Decode signature
    const signatureBinary = base64UrlDecode(signatureB64);
    const signatureBytes = new Uint8Array(signatureBinary.length);
    for (let i = 0; i < signatureBinary.length; i++) {
      signatureBytes[i] = signatureBinary.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes,
      enc.encode(payloadB64)
    );

    if (!isValid) return null;

    const payloadJson = base64UrlDecode(payloadB64);
    const payload: SessionPayload = JSON.parse(payloadJson);

    // Verify expiration
    if (!payload.exp || Date.now() > payload.exp) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
