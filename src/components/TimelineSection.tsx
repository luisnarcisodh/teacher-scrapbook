import { motion } from "motion/react";
import { ImageWithFallback, GlassCard, PolaroidFrame, MaskingTape, FadeIn, SectionLabel, useIsMobile } from "./shared";

const TIMELINE_ITEMS = [
  {
    id: 1,
    year: "2022 – 2023",
    label: "First Year",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    caption: "The beginning",
    title: "Where It All Began",
    description: "Nervous first days, new faces, and the teachers who made us feel at home from the very first lecture.",
    note: "never forget orientation day!",
    side: "left",
  },
  {
    id: 2,
    year: "2023 – 2024",
    label: "Second Year",
    photo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    caption: "long study nights",
    title: "The Deep Dive",
    description: "Late nights in the library, complex problems, and professors who stayed late just to help us understand.",
    note: "so many coffee cups ☕",
    side: "right",
  },
  {
    id: 3,
    year: "2024 – 2025",
    label: "Third Year",
    photo: "https://images.unsplash.com/photo-1663162550938-60f70fab5d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    caption: "campus walks",
    title: "Finding Our Way",
    description: "Research projects, field trips, and teachers who encouraged us to question everything and think deeper.",
    note: "growth mode activated",
    side: "left",
  },
  {
    id: 4,
    year: "2025 – 2026",
    label: "Final Year",
    photo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    caption: "we made it! 🎓",
    title: "The Grand Finale",
    description: "Thesis defenses, capstone projects, and the bittersweet joy of crossing that stage — guided all the way by our teachers.",
    note: "thank you for everything",
    side: "right",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: typeof TIMELINE_ITEMS[0];
  index: number;
}) {
  const isLeft = item.side === "left";
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <FadeIn delay={index * 0.1} direction="up">
        <div style={{ marginBottom: "48px", paddingLeft: "24px", borderLeft: "2px solid rgba(42, 95, 143, 0.2)" }}>
          {/* Year badge */}
          <span style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
            fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#4A80A5", background: "rgba(74, 128, 165, 0.1)", padding: "3px 10px",
            borderRadius: "100px", border: "1px solid rgba(74, 128, 165, 0.18)",
            display: "inline-block", marginBottom: "16px",
          }}>
            {item.year}
          </span>

          {/* Polaroid */}
          <div style={{ position: "relative", marginBottom: "16px", paddingTop: "16px" }}>
            <MaskingTape color="rgba(196, 176, 120, 0.5)" width={60} height={20}
              style={{ top: "0", left: "50%", transform: "translateX(-50%) rotate(-1deg)" }} />
            <PolaroidFrame src={item.photo} alt={item.title} caption={item.caption} date={item.year}
              rotation={-1.5} width="100%" imageHeight={200} />
          </div>

          <GlassCard style={{ padding: "20px 24px" }}>
            <h3 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
              fontSize: "18px", fontWeight: 600, color: "#0E1E32", letterSpacing: "-0.02em",
              lineHeight: 1.2, margin: "0 0 8px",
            }}>{item.title}</h3>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
              fontSize: "14px", color: "#5A7080", lineHeight: 1.7, margin: "0 0 12px",
            }}>{item.description}</p>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: "14px", color: "#7AA0C0" }}>
              ✍ {item.note}
            </div>
          </GlassCard>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.1} direction={isLeft ? "left" : "right"}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 60px 1fr",
          gap: "0",
          alignItems: "center",
          marginBottom: "80px",
          position: "relative",
        }}
      >
        {/* Left side */}
        <div
          style={{
            display: "flex",
            justifyContent: isLeft ? "flex-end" : "flex-start",
            paddingRight: isLeft ? "40px" : "0",
            paddingLeft: isLeft ? "0" : "40px",
          }}
          className={isLeft ? "" : "hidden md:flex"}
        >
          {isLeft && (
            <div style={{ position: "relative" }}>
              <GlassCard style={{ padding: "24px 28px", maxWidth: "320px" }}>
                {/* Year badge */}
                <span
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#4A80A5",
                    background: "rgba(74, 128, 165, 0.1)",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    border: "1px solid rgba(74, 128, 165, 0.18)",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {item.year}
                </span>

                <h3
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#0E1E32",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "14px",
                    color: "#5A7080",
                    lineHeight: 1.7,
                    margin: "0 0 14px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "14px",
                    color: "#7AA0C0",
                  }}
                >
                  ✍ {item.note}
                </div>
              </GlassCard>
            </div>
          )}

          {!isLeft && (
            <div style={{ position: "relative" }}>
              <MaskingTape
                color="rgba(196, 176, 120, 0.5)"
                width={64}
                height={22}
                style={{
                  top: "-11px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-1.5deg)",
                }}
              />
              <PolaroidFrame
                src={item.photo}
                alt={item.title}
                caption={item.caption}
                date={item.year}
                rotation={isLeft ? -2 : 2}
                width={240}
                imageHeight={190}
              />
            </div>
          )}
        </div>

        {/* Center — Timeline line & dot */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
          className="hidden md:flex"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4, type: "spring" }}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2A5F8F, #4A90C0)",
              border: "3px solid #FFFFFF",
              boxShadow: "0 0 0 3px rgba(42, 95, 143, 0.2)",
              position: "relative",
              zIndex: 2,
            }}
          />
          <div
            style={{
              width: "1px",
              flexGrow: 1,
              background: "linear-gradient(to bottom, rgba(42, 95, 143, 0.3), rgba(42, 95, 143, 0.1))",
              marginTop: "8px",
            }}
          />
        </div>

        {/* Right side */}
        <div
          style={{
            display: "flex",
            justifyContent: isLeft ? "flex-start" : "flex-end",
            paddingLeft: isLeft ? "40px" : "0",
            paddingRight: isLeft ? "0" : "40px",
          }}
          className={!isLeft ? "" : "hidden md:flex"}
        >
          {isLeft && (
            <div style={{ position: "relative" }}>
              <MaskingTape
                color="rgba(180, 210, 230, 0.52)"
                width={64}
                height={22}
                style={{
                  top: "-11px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(2deg)",
                }}
              />
              <PolaroidFrame
                src={item.photo}
                alt={item.title}
                caption={item.caption}
                date={item.year}
                rotation={-2}
                width={240}
                imageHeight={190}
              />
            </div>
          )}

          {!isLeft && (
            <div style={{ position: "relative" }}>
              <GlassCard style={{ padding: "24px 28px", maxWidth: "320px" }}>
                <span
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#4A80A5",
                    background: "rgba(74, 128, 165, 0.1)",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    border: "1px solid rgba(74, 128, 165, 0.18)",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {item.year}
                </span>

                <h3
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#0E1E32",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                    fontSize: "14px",
                    color: "#5A7080",
                    lineHeight: 1.7,
                    margin: "0 0 14px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "14px",
                    color: "#7AA0C0",
                  }}
                >
                  ✍ {item.note}
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export function TimelineSection() {
  return (
    <section
      style={{
        background: "#F8F5EF",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Vertical timeline line (desktop) */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          bottom: "80px",
          background:
            "linear-gradient(to bottom, transparent, rgba(42, 95, 143, 0.2) 10%, rgba(42, 95, 143, 0.2) 90%, transparent)",
          pointerEvents: "none",
        }}
        className="hidden md:block"
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
      </div>
    </section>
  );
}