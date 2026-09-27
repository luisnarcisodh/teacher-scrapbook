import { useState, useEffect } from "react";
import { motion } from "motion/react";

// ─── ImageWithFallback ────────────────────────────────────────────────────────
export function ImageWithFallback(props: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

// ─── GlassCard ────────────────────────────────────────────────────────────────
export function GlassCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(255, 255, 255, 0.68)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.85)",
        boxShadow:
          "0 8px 40px rgba(26, 58, 92, 0.08), 0 2px 8px rgba(26, 58, 92, 0.04)",
        borderRadius: "20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── PolaroidFrame ────────────────────────────────────────────────────────────
export function PolaroidFrame({
  src,
  alt,
  caption,
  date,
  rotation = 0,
  width = 220,
  imageHeight = 180,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  rotation?: number;
  width?: number | string;
  imageHeight?: number | string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        transform: `rotate(${rotation}deg)`,
        background: "#FFFFFF",
        padding: "12px 12px 48px 12px",
        boxShadow:
          "0 8px 28px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
        width: typeof width === "number" ? `${width}px` : width,
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        flexShrink: 0,
      }}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          height:
            typeof imageHeight === "number"
              ? `${imageHeight}px`
              : imageHeight,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          paddingTop: "10px",
          textAlign: "center",
          fontFamily: "'Caveat', cursive",
          fontSize: "15px",
          color: "#4A4A4A",
          lineHeight: 1.3,
        }}
      >
        {caption}
        {date && (
          <div style={{ fontSize: "12px", color: "#999", marginTop: "3px" }}>
            {date}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MaskingTape ──────────────────────────────────────────────────────────────
export function MaskingTape({
  color = "rgba(196, 176, 130, 0.48)",
  rotation = 0,
  width = 80,
  height = 26,
  style = {},
}: {
  color?: string;
  rotation?: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        height: `${height}px`,
        width: `${width}px`,
        background: color,
        transform: `rotate(${rotation}deg)`,
        borderRadius: "3px",
        boxShadow:
          "inset 0 1px 2px rgba(255,255,255,0.55), 0 1px 4px rgba(0,0,0,0.1)",
        zIndex: 10,
        ...style,
      }}
    />
  );
}

// ─── FadeIn ───────────────────────────────────────────────────────────────────
export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const yMap = { up: 36, down: -36, left: 0, right: 0, none: 0 };
  const xMap = { up: 0, down: 0, left: 36, right: -36, none: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, y: yMap[direction], x: xMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#4A7FA5",
        display: "inline-block",
        marginBottom: "16px",
        background: "rgba(74, 127, 165, 0.1)",
        padding: "5px 14px",
        borderRadius: "100px",
        border: "1px solid rgba(74, 127, 165, 0.2)",
      }}
    >
      {children}
    </span>
  );
}

// ─── PaperClip ────────────────────────────────────────────────────────────────
export function PaperClip({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="22"
      height="56"
      viewBox="0 0 22 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", ...style }}
    >
      <path
        d="M11 3 C5.5 3, 2 6.5, 2 12 L2 42 C2 48, 6 52, 11 52 C16 52, 20 48, 20 42 L20 16 C20 10.5, 16.5 7, 11 7 C5.5 7, 4 10.5, 4 16 L4 40 C4 44, 7 47, 11 47 C15 47, 17 44, 17 40 L17 18"
        stroke="#B8C8D8"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── useIsMobile ──────────────────────────────────────────────────────────────
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}