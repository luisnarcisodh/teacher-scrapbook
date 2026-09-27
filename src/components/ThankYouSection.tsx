import { motion } from "motion/react";
import { GlassCard, PolaroidFrame, MaskingTape, FadeIn } from "./shared";

const COLLAGE_PHOTOS = [
  {
    id: 1,
    src: "/src/assets/four.jpg",
    alt: "University lecture",
    caption: "",
    rotation: -4,
    width: 180,
    imageHeight: 140,
  },
  {
    id: 2,
    src: "/src/assets/five.jpg",
    alt: "Graduation ceremony",
    caption: "",
    rotation: 3,
    width: 200,
    imageHeight: 155,
  },
  {
    id: 3,
    src: "/src/assets/six.jpg",
    alt: "Students group photo",
    caption: "",
    rotation: -2,
    width: 190,
    imageHeight: 148,
  },
  {
    id: 4,
    src: "/src/assets/ten.jpg",
    alt: "Campus life",
    caption: "",
    rotation: 4,
    width: 175,
    imageHeight: 135,
  },
];

// Inayos natin ang () sa itaas para mawala ang TS6133 error
export function ThankYouSection({}: { schoolName?: string }) {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #E8F2FA 0%, #F8F5EF 50%, #EDE8DC 100%)",
        padding: "140px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "60%",
          background:
            "radial-gradient(ellipse, rgba(168, 200, 228, 0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
      >
        {/* Main heading */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <motion.h2
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(56px, 8vw, 108px)",
                fontWeight: 700,
                color: "#0E1E32",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                marginBottom: "32px",
                marginTop: 0,
              }}
            >
              Thank You,<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2A5F8F 0%, #4A90C0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ma'am Diana.
              </span>
            </motion.h2>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                fontSize: "18px",
                color: "#4A6070",
                lineHeight: 1.8,
                maxWidth: "600px",
                margin: "0 auto 48px",
              }}
            >
              For every lesson, every reminder, every challenge, and every
              moment you chose to guide us — thank you. You have shaped not
              just our minds, but who we are.
            </p>

            {/* Handwritten signature */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "24px",
                color: "#4A80A5",
                marginBottom: "64px",
              }}
            >
              — with love, BSIS 3 ♡
            </div>
          </div>
        </FadeIn>

        {/* Photo collage */}
        <FadeIn delay={0.15}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "80px",
              minHeight: "300px",
            }}
          >
            {/* Background scrapbook paper */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                height: "calc(100% + 40px)",
                background: "#EDE8DC",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                zIndex: 0,
              }}
            />

            {/* Paper clips */}
            <svg
              width="22"
              height="56"
              viewBox="0 0 22 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: "-20px", left: "20%", zIndex: 5 }}
            >
              <path
                d="M11 3 C5.5 3, 2 6.5, 2 12 L2 42 C2 48, 6 52, 11 52 C16 52, 20 48, 20 42 L20 16 C20 10.5, 16.5 7, 11 7 C5.5 7, 4 10.5, 4 16 L4 40 C4 44, 7 47, 11 47 C15 47, 17 44, 17 40 L17 18"
                stroke="#B8C8D8"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <svg
              width="22"
              height="56"
              viewBox="0 0 22 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: "-20px", right: "18%", zIndex: 5 }}
            >
              <path
                d="M11 3 C5.5 3, 2 6.5, 2 12 L2 42 C2 48, 6 52, 11 52 C16 52, 20 48, 20 42 L20 16 C20 10.5, 16.5 7, 11 7 C5.5 7, 4 10.5, 4 16 L4 40 C4 44, 7 47, 11 47 C15 47, 17 44, 17 40 L17 18"
                stroke="#C8B8A0"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Polaroid photos in collage */}
            {COLLAGE_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.85, rotate: photo.rotation }}
                whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                style={{
                  position: "relative",
                  zIndex: 1 + index,
                  flexShrink: 0,
                }}
              >
                <div style={{ position: "relative", paddingTop: "20px" }}>
                  <MaskingTape
                    color={index % 2 === 0 ? "rgba(196, 176, 120, 0.5)" : "rgba(168, 200, 228, 0.5)"}
                    width={58}
                    height={20}
                    style={{
                      top: "0",
                      left: "50%",
                      transform: `translateX(-50%) rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                    }}
                  />
                  <PolaroidFrame
                    src={photo.src}
                    alt={photo.alt}
                    caption={photo.caption}
                    rotation={0}
                    width={photo.width}
                    imageHeight={photo.imageHeight}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Final glass card */}
        <FadeIn delay={0.3}>
          <GlassCard
            style={{
              padding: "40px 48px",
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "20px",
                color: "#4A80A5",
                marginBottom: "16px",
              }}
            >
              ✦
            </div>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 500,
                color: "#1A3A5C",
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                margin: "0 0 20px",
              }}
            >
              "A good teacher can inspire hope, ignite the imagination, and
              instill a love of learning."
            </p>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                fontSize: "13px",
                color: "#8AA0B5",
                margin: 0,
              }}
            >
              — Brad Henry
            </p>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

export function FooterSection({
  schoolName = "BSIS 3",
}: {
  schoolName?: string;
}) {
  return (
    <footer
      style={{
        background: "#0E1E32",
        padding: "56px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(42, 95, 143, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        {/* Decorative line */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(168, 200, 228, 0.3)",
            margin: "0 auto 28px",
          }}
        />

        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "18px",
            color: "rgba(168, 200, 228, 0.7)",
            marginBottom: "12px",
          }}
        >
          Teacher's Day 2026
        </p>

        <p
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
            fontSize: "13px",
            color: "rgba(168, 200, 228, 0.4)",
            letterSpacing: "0.05em",
            marginBottom: "28px",
          }}
        >
          Made with appreciation by {schoolName}
        </p>

        {/* Bottom line */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(168, 200, 228, 0.2)",
            margin: "0 auto 20px",
          }}
        />

        <p
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
            fontSize: "11px",
            color: "rgba(168, 200, 228, 0.25)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Digital Scrapbook · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}