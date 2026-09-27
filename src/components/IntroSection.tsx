import { FadeIn, PolaroidFrame, MaskingTape, SectionLabel, useIsMobile } from "./shared";


export function IntroSection() {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        background: "#F8F5EF",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle paper grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "48px" : "80px",
            alignItems: "center",
          }}
          className="flex flex-col-reverse md:grid"
        >
          {/* Left — Polaroid */}
          <FadeIn delay={0.1} direction="left">
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "40px",
              }}
            >
              {/* Background paper */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  left: "12px",
                  width: "76%",
                  height: "90%",
                  background: "#EDE8DC",
                  transform: "rotate(-3deg)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <PolaroidFrame
                  src="/src/assets/thirteen.jpg"
                  alt="Professor mentoring a student"
                  caption="beyond the classroom"
                  date="Class of 2026"
                  rotation={-2.5}
                  width={260}
                  imageHeight={220}
                />
                <MaskingTape
                  color="rgba(180, 210, 230, 0.55)"
                  width={70}
                  height={24}
                  style={{
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(1deg)",
                  }}
                />

                {/* Handwritten note card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "-20px",
                    background: "#FFFDE8",
                    padding: "10px 14px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                    transform: "rotate(4deg)",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "13px",
                    color: "#5A5A5A",
                    zIndex: 10,
                    width: "130px",
                    lineHeight: 1.4,
                  }}
                >
                  "You changed the way I see the world"
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Text */}
          <FadeIn delay={0.2} direction="right">
            <div>
              <SectionLabel>Our Scrapbook</SectionLabel>

              <h2
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                  fontSize: "clamp(36px, 4.5vw, 58px)",
                  fontWeight: 700,
                  color: "#0E1E32",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                  marginTop: 0,
                }}
              >
                More Than<br />
                <span style={{ color: "#2A5F8F" }}>Just Lessons.</span>
              </h2>

              <p
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                  fontSize: "17px",
                  color: "#4A5C6E",
                  lineHeight: 1.8,
                  maxWidth: "440px",
                  marginBottom: "28px",
                }}
              >
                Every lesson, reminder, challenge, and encouragement from one
                great teacher becomes part of the memories we carry with us —
                far beyond the classroom walls.
              </p>

              <p
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                  fontSize: "15px",
                  color: "#7A8E9E",
                  lineHeight: 1.8,
                  maxWidth: "400px",
                  marginBottom: 0,
                }}
              >
                This digital scrapbook is our way of saying thank you — a
                curated collection of memories, messages, and moments
                dedicated to the teacher who shaped us.
              </p>

              {/* Decorative divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "36px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C8D8E8",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "15px",
                    color: "#7AA0C0",
                  }}
                >
                  with love & gratitude ♡
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}