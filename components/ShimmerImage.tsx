"use client";

import React, { useState, useCallback } from "react";
import Image, { type ImageProps } from "next/image";

// ---------------------------------------------------------------------------
// Shimmer SVG generator – creates an animated gradient that sweeps left-to-right
// The SVG is inlined as a base64 data-URI so there is zero network cost.
// ---------------------------------------------------------------------------

const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2a2a2a" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a1a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

// ---------------------------------------------------------------------------
// ShimmerImage component
//
// Drop-in replacement for next/image that shows an animated shimmer placeholder
// while loading, then cross-fades smoothly into the real image.
//
// Usage:
//   <ShimmerImage
//     src="/images/hero.jpg"
//     alt="Hero"
//     width={1200}
//     height={675}
//   />
//
// All standard next/image props are forwarded.
// ---------------------------------------------------------------------------

type ShimmerImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  /** Duration of the blur-to-sharp transition in ms (default: 500) */
  transitionDuration?: number;
  /** Shimmer base colour – a dark neutral works best (default: "#1a1a1a") */
  shimmerColor?: string;
};

const ShimmerImage: React.FC<ShimmerImageProps> = ({
  transitionDuration = 500,
  shimmerColor: _shimmerColor,
  style,
  onLoad,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      // Forward the original onLoad if provided
      if (onLoad) {
        (onLoad as (e: React.SyntheticEvent<HTMLImageElement>) => void)(e);
      }
    },
    [onLoad]
  );

  // Determine shimmer dimensions – use explicit width/height when available,
  // fall back to reasonable defaults so the SVG scales correctly.
  const w = typeof rest.width === "number" ? rest.width : 700;
  const h = typeof rest.height === "number" ? rest.height : 475;

  const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

  return (
    <Image
      {...rest}
      placeholder={dataUrl as `data:image/${string}`}
      onLoad={handleLoad}
      style={{
        ...style,
        filter: loaded ? "blur(0px)" : "blur(12px)",
        transform: loaded ? "scale(1)" : "scale(1.02)",
        transition: `filter ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
      }}
    />
  );
};

export default React.memo(ShimmerImage);
