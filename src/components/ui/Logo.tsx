"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  useImageEmblem?: boolean;
  className?: string;
}

export function SmartEdgeGlyph({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background Rounded Gradient Container */}
      <rect width="100" height="100" rx="22" fill="url(#seBgGrad)" />
      
      {/* Top Left Yellow Circle Dot */}
      <circle cx="28" cy="26" r="10.5" fill="#FFE600" />

      {/* Top Horizontal Bar with Rounded Right Edge */}
      <path
        d="M26 40 H80 C84.4 40 88 36.4 88 32 V26 C88 20.5 83.5 16 78 16 H44 C39.5 16 36 19.5 36 24 V34 C36 37.3 33.3 40 30 40 Z"
        fill="white"
      />

      {/* Middle White Connector & Middle Horizontal Bar */}
      <path
        d="M20 45 C20 42.8 21.8 41 24 41 H34 C37.3 41 40 43.7 40 47 V53 C40 55.2 41.8 57 44 57 H70 C73.3 57 76 54.3 76 51 V47 C76 43.7 73.3 41 70 41 H48 C45.8 41 44 39.2 44 37 V33 C44 30.8 45.8 29 48 29 H72 C79.7 29 86 35.3 86 43 V49 C86 56.7 79.7 63 72 63 H42 C38.7 63 36 60.3 36 57 V49 C36 46.8 34.2 45 32 45 H24 C21.8 45 20 46.8 20 49 V57 C20 59.2 21.8 61 24 61 H32"
        fill="white"
      />

      {/* Bottom Horizontal Bar with Rounded Right Edge */}
      <path
        d="M40 73 H80 C84.4 73 88 76.6 88 81 V82 C88 86.4 84.4 90 80 90 H44 C38.5 90 34 85.5 34 80 V75 C34 73.9 34.9 73 36 73 Z"
        fill="white"
      />

      {/* Bottom Left Yellow Square */}
      <rect x="18" y="73" width="19" height="19" rx="4.5" fill="#FFE600" />

      {/* Definition of gradients */}
      <defs>
        <linearGradient id="seBgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0047FF" />
          <stop offset="0.6" stopColor="#0035C8" />
          <stop offset="1" stopColor="#020B2E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({
  variant = "light",
  size = "md",
  showText = true,
  useImageEmblem = true,
  className = "",
}: LogoProps) {
  const isDark = variant === "dark";

  // Sizing definitions
  const sizeMap = {
    sm: {
      icon: "w-8 h-8",
      title: "text-base",
      subtitle: "text-[9px] tracking-[0.2em]",
    },
    md: {
      icon: "w-10 h-10",
      title: "text-xl",
      subtitle: "text-[10px] tracking-[0.24em]",
    },
    lg: {
      icon: "w-12 h-12",
      title: "text-2xl",
      subtitle: "text-xs tracking-[0.25em]",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label="SmartEdge Bangladesh Home"
    >
      {/* Emblem / Monogram */}
      <div
        className={`${currentSize.icon} relative flex-shrink-0 rounded-xl overflow-hidden shadow-md shadow-primary-500/20 group-hover:shadow-primary-500/35 transition-shadow duration-200`}
      >
        {useImageEmblem ? (
          <Image
            src="/images/smartedge-symbol.jpg"
            alt="SmartEdge Symbol"
            width={64}
            height={64}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <SmartEdgeGlyph className="w-full h-full" />
        )}
      </div>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span
              className={`font-black tracking-tight ${currentSize.title} ${
                isDark
                  ? "text-white group-hover:text-white"
                  : "text-slate-950 group-hover:text-primary-600"
              } transition-colors`}
            >
              SmartEdge
            </span>
          </div>
          <span
            className={`font-extrabold uppercase mt-1 ${currentSize.subtitle} ${
              isDark
                ? "text-brand-yellow font-black"
                : "text-primary-600 font-extrabold"
            } transition-colors`}
          >
            Bangladesh
          </span>
        </div>
      )}
    </Link>
  );
}
