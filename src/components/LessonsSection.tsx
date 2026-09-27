import { motion } from "motion/react";
import { ImageWithFallback,  FadeIn,  useIsMobile } from "./shared";


const QUOTES = [
  {
    id: 1,
    quote: "Lessons we will carry beyond the classroom.",
    icon: "✦",
  },
  {
    id: 2,
    quote: "Your guidance became part of our journey.",
    icon: "◇",
  },
  {
    id: 3,
    quote: "Thank you for believing in us.",
    icon: "○",
  },
];

export function LessonsSection() {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #0E1E32 0%, #1A3A5C 40%, #2A5F8F 100%)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse, rgba(100, 160, 210, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "40%",
          height: "50%",
          background:
            "radial-gradient(ellipse, rgba(60, 110, 170, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}
      >
        {/* Top label */}
        <FadeIn>
          <div style={{ marginBottom: "80px" }}>
            <span
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(168, 200, 228, 0.8)",
                display: "inline-block",
                marginBottom: "20px",
                background: "rgba(168, 200, 228, 0.1)",
                padding: "5px 14px",
                borderRadius: "100px",
                border: "1px solid rgba(168, 200, 228, 0.2)",
              }}
            >
              Lessons Beyond the Classroom
            </span>

            <h2
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                marginTop: 0,
                marginBottom: 0,
                maxWidth: "700px",
              }}
            >
              What You Taught Us<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #A8C8E8, #C8DFF0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Will Stay Forever.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "48px" : "60px",
            alignItems: "center",
          }}
        >
          {/* Left — Quotes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {QUOTES.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.12} direction="left">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(168, 200, 228, 0.2)",
                    borderRadius: "16px",
                    padding: "28px 32px",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "13px",
                      color: "rgba(168, 200, 228, 0.7)",
                      marginBottom: "10px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.icon} &nbsp; lesson {String(item.id).padStart(2, "0")}
                  </div>
                  <p
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                      fontSize: "clamp(20px, 2.2vw, 26px)",
                      fontWeight: 500,
                      color: "#E8F2FA",
                      lineHeight: 1.35,
                      margin: 0,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    "{item.quote}"
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Right — Photo with glass card */}
          <FadeIn delay={0.2} direction="right">
            <div style={{ position: "relative" }}>
              {/* Photo */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
                }}
              >
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                  <ImageWithFallback
                    src="/assets/seven.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "440px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              </div>

              {/* Floating glass card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                style={{
                  position: "absolute",
                  bottom: "-28px",
                  left: "-28px",
                  right: "20%",
                  background: "rgba(14, 30, 50, 0.75)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(168, 200, 228, 0.2)",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "16px",
                    color: "rgba(200, 224, 245, 0.9)",
                    margin: "0 0 8px",
                    lineHeight: 1.5,
                  }}
                >
                  "The relationship between a great teacher and student is one
                  of the most profound human connections."
                </p>
                <span
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontSize: "12px",
                    color: "rgba(168, 200, 228, 0.6)",
                  }}
                >
                  — A Student's Note
                </span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}