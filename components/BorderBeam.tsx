"use client";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  duration = 8,
  delay = 0,
  colorFrom = "rgba(198,232,242,0.7)",
  colorTo = "rgba(198,232,242,0.15)",
  borderWidth = 1,
}: BorderBeamProps) {
  return (
    <div
      className="border-beam"
      style={{
        "--beam-duration": `${duration}s`,
        "--beam-delay": `${delay}s`,
        "--beam-color-from": colorFrom,
        "--beam-color-to": colorTo,
        "--beam-border-width": `${borderWidth}px`,
      } as React.CSSProperties}
    />
  );
}
