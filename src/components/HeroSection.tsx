import { motion } from "motion/react";
import { ImageWithFallback, GlassCard, MaskingTape, useIsMobile } from "./shared";

const HERO_IMG =
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200";

export function HeroSection({
  heroTeacherName = "Our Beloved Teachers",
}: {
  heroTeacherName?: string;
}) {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(145deg, #D8EAF8 0%, #EBF2F8 22%, #F9F6F0 55%, #EDE8DC 100%)",
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 15% 25%, rgba(168, 200, 228, 0.3) 0%, transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(200, 220, 240, 0.22) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "64px",
            alignItems: "center",
          }}
          className="flex flex-col md:grid"
        >
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "18px",
                  color: "#4A80A5",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                ✦ September 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(52px, 7vw, 88px)",
                fontWeight: 700,
                color: "#0E1E32",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                marginBottom: "28px",
              }}
            >
              Happy<br />
              Teacher's<br />
              <span style={{ color: "#2A5F8F" }}>Day.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                fontSize: "18px",
                color: "#4A5C6E",
                lineHeight: 1.75,
                maxWidth: "400px",
                marginBottom: "40px",
              }}
            >
              To the teacher who inspires, guides, and makes every lesson
              meaningful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GlassCard
                style={{
                  padding: "20px 24px",
                  display: "inline-block",
                  borderRadius: "16px",
                  maxWidth: "380px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "16px",
                    color: "#3A6A90",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  "The best teachers show you where to look, but don't tell you
                  what to see."
                </p>
                <p
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontSize: "12px",
                    color: "#8AA0B5",
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  — {heroTeacherName}
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Right — Polaroid Photo */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {/* Background paper layers */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "5%",
                width: "80%",
                height: "88%",
                background: "#EDE8DC",
                transform: "rotate(3.5deg)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "3%",
                width: "78%",
                height: "85%",
                background: "#D8EAF8",
                transform: "rotate(-2deg)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            />

            {/* Main Polaroid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "460px" }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "14px 14px 60px 14px",
                  boxShadow:
                    "0 16px 60px rgba(0,0,0,0.16), 0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <ImageWithFallback
                  src= "/src/assets/three.jpg"
                  alt="University lecture hall with teacher"
                  style={{
                    width: "100%",
                    height: "360px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "14px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "17px",
                    color: "#5A5A5A",
                  }}
                >
                  {heroTeacherName} — Teacher's Day 2026
                </div>
              </div>

              {/* Top masking tape */}
              <MaskingTape
                color="rgba(196, 176, 120, 0.52)"
                width={72}
                height={26}
                style={{
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-2deg)",
                }}
              />

              {/* Handwritten annotation */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-18px",
                  right: "-24px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "14px",
                  color: "#5A7FA0",
                  transform: "rotate(8deg)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                ← making memories ♡
              </div>

              {/* Small corner annotation */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "-38px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "13px",
                  color: "#8AA5C0",
                  transform: "rotate(-90deg)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                sept 2026
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "#8AA0B5",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #8AA0B5, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}