import { motion } from "motion/react";
import { ImageWithFallback, GlassCard, FadeIn, SectionLabel, MaskingTape, PaperClip, useIsMobile } from "./shared";

const QUALITIES = [
  { icon: "✦", label: "Patient", desc: "Always took the time to make sure we truly understood." },
  { icon: "◇", label: "Inspiring", desc: "Made every topic feel worth knowing, worth caring about." },
  { icon: "○", label: "Dedicated", desc: "Stayed after class, answered every question, never gave up on us." },
];

interface TeacherProfileProps {
  teacherName: string;
  teacherSubject: string;
  teacherPhoto: { src: string; alt?: string } | string;
  teacherBio?: string;
  teacherQuote?: string;
}

export function TeachersSection({
  teacherName = "Ms. Diana Tejada",
  teacherSubject = "Christian Teachings",
  teacherPhoto = "/assets/one.jpg",
  teacherBio = "For years, this extraordinary teacher has shaped the way we think, question, and grow. With patience, passion, and an unwavering belief in each student, every single lesson became something far greater than a lecture.",
  teacherQuote = "Ask better questions, and the world will reveal better answers.",
}: TeacherProfileProps & { teacherBio?: string; teacherQuote?: string }) {
  const isMobile = useIsMobile();

  const photoSrc = typeof teacherPhoto === "string"
    ? teacherPhoto
    : teacherPhoto?.src ?? "/assets/three.jpg";

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #EBF2F8 0%, #F8F5EF 100%)",
        padding: "120px 0 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-250px",
          right: "-200px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 200, 228, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}
      >
        {/* Section header */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <SectionLabel>Teacher Spotlight</SectionLabel>
            <h2
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 700,
                color: "#0E1E32",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginTop: "4px",
                marginBottom: 0,
              }}
            >
              The One Who<br />
              <span style={{ color: "#2A5F8F" }}>Made a Difference.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Main profile — two column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "48px" : "72px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          {/* Left — Photo with scrapbook layers */}
          <FadeIn delay={0.1} direction="left">
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              {/* Paper layers behind */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "8%",
                  width: "80%",
                  height: "90%",
                  background: "#EDE8DC",
                  transform: "rotate(4deg)",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "5%",
                  width: "76%",
                  height: "87%",
                  background: "#D8EAF8",
                  transform: "rotate(-2.5deg)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  borderRadius: "2px",
                }}
              />

              {/* Polaroid main photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "14px 14px 64px 14px",
                    boxShadow: "0 16px 60px rgba(0,0,0,0.15), 0 4px 14px rgba(0,0,0,0.08)",
                  }}
                >
                  <ImageWithFallback
                    src={photoSrc}
                    alt={teacherName}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                  {/* Polaroid caption */}
                  <div
                    style={{
                      textAlign: "center",
                      paddingTop: "14px",
                      fontFamily: "'Caveat', cursive",
                      fontSize: "17px",
                      color: "#5A5A5A",
                    }}
                  >
                    {teacherName}
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      fontFamily: "'Caveat', cursive",
                      fontSize: "14px",
                      color: "#9A9A9A",
                      marginTop: "2px",
                    }}
                  >
                    {teacherSubject}
                  </div>
                </div>

                {/* Top masking tape */}
                <MaskingTape
                  color="rgba(196, 176, 120, 0.52)"
                  width={74}
                  height={26}
                  style={{
                    top: "-13px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-1.5deg)",
                  }}
                />

                {/* Paper clip */}
                <PaperClip style={{ top: "-16px", right: "28px", zIndex: 6 }} />

                {/* Handwritten annotation */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    right: "-20px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "14px",
                    color: "#5A7FA0",
                    transform: "rotate(8deg)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ← our favorite teacher ♡
                </div>

                {/* Side annotation */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-38px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "13px",
                    color: "#8AA5C0",
                    transform: "rotate(-90deg) translateX(-50%)",
                    whiteSpace: "nowrap",
                  }}
                >
                  sept 2026
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right — Bio & info */}
          <FadeIn delay={0.2} direction="right">
            <div>
              {/* Name + subject */}
              <div style={{ marginBottom: "28px" }}>
                <h3
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 700,
                    color: "#0E1E32",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    margin: "0 0 8px",
                  }}
                >
                  {teacherName}
                </h3>
                <span
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "15px",
                    color: "#4A80A5",
                    background: "rgba(74, 128, 165, 0.1)",
                    padding: "5px 14px",
                    borderRadius: "100px",
                    border: "1px solid rgba(74, 128, 165, 0.2)",
                    display: "inline-block",
                  }}
                >
                  {teacherSubject}
                </span>
              </div>

              {/* Bio */}
              <p
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                  fontSize: "17px",
                  color: "#4A5C6E",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                  maxWidth: "480px",
                }}
              >
                {teacherBio}
              </p>

              {/* Star rating */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "32px" }}>
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4, type: "spring" }}
                    style={{ color: "#C8A85A", fontSize: "18px" }}
                  >
                    ★
                  </motion.span>
                ))}
                <span
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontSize: "13px",
                    color: "#9AA8B5",
                    alignSelf: "center",
                    marginLeft: "8px",
                  }}
                >
                  Our favorite teacher, always.
                </span>
              </div>

              {/* Teacher quote glass card */}
              <GlassCard style={{ padding: "24px 28px", borderRadius: "16px", maxWidth: "460px" }}>
                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "13px",
                    color: "#7AA0C0",
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  ✦ &nbsp; words to live by
                </div>
                <p
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1A3A5C",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                    margin: "0 0 12px",
                  }}
                >
                  "{teacherQuote}"
                </p>
                <span
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontSize: "12px",
                    color: "#8AA0B5",
                  }}
                >
                  — {teacherName}
                </span>
              </GlassCard>
            </div>
          </FadeIn>
        </div>

        {/* Qualities row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {QUALITIES.map((q, i) => (
            <FadeIn key={q.label} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 24px rgba(26,58,92,0.07)",
                  borderRadius: "18px",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "22px",
                    color: "#4A80A5",
                    marginBottom: "10px",
                  }}
                >
                  {q.icon}
                </div>
                <div
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#0E1E32",
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {q.label}
                </div>
                <div
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "14px",
                    color: "#6A7E90",
                    lineHeight: 1.65,
                  }}
                >
                  {q.desc}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
