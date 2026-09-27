import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard, FadeIn, SectionLabel } from "./shared";

const MESSAGES = [
  {
    id: 1,
    name: "Anne Stephanne Buenaflor",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for always guiding our spiritual growth.",
    color: "rgba(168, 200, 228, 0.15)",
    rotation: -1.5,
  },
  {
    id: 2,
    name: "Luis Narciso Huevos",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for the inspiring stories and lessons in class every day!",
    color: "rgba(200, 220, 200, 0.15)",
    rotation: 1,
  },
  {
    id: 3,
    name: "Denmark Bartolome",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for using your profession to bring us closer to God. Happy Teacher's Day!",
    color: "rgba(220, 200, 190, 0.15)",
    rotation: -0.5,
  },
  {
    id: 4,
    name: "Leander Dylan Bronola",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for being such a huge blessing to our class. We appreciate you!",
    color: "rgba(190, 200, 220, 0.15)",
    rotation: 2,
  },
  {
    id: 5,
    name: "Jaden Calimlim",
    year: "3rd Year, BS Information Systems",
    message:
      "Happy Teacher's Day! May God continue to bless your life and your teaching ministry.",
    color: "rgba(210, 195, 220, 0.15)",
    rotation: -1,
  },
  {
    id: 6,
    name: "Karl Ashton Mahusay",
    year: "3rd Year, BS Information Systems",
    message:
      "We learn so much from you, not just in our minds, but in our hearts. Thank you!",
    color: "rgba(195, 215, 225, 0.15)",
    rotation: 1.5,
  },
  {
    id: 7,
    name: "Samuel Binos",
    year: "3rd Year, BS Information Systems",
    message:
      "Happy Teacher's Day! We highly appreciate your wisdom, kindness, and patience.",
    color: "rgba(225, 210, 195, 0.15)",
    rotation: -2,
  },
  {
    id: 8,
    name: "Rancel Joy Cuervo",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for always teaching with a kind heart. Praying for your good health always!",
    color: "rgba(200, 210, 200, 0.15)",
    rotation: 0.5,
  },
  {
    id: 9,
    name: "Shanne Bumanlag",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for your endless reminders to do good. Happy Teacher's Day!",
    color: "rgba(215, 205, 225, 0.15)",
    rotation: -1.5,
  },
  {
    id: 9,
    name: "Ydrey Ann Ramirez",
    year: "3rd Year, BS Information Systems",
    message:
      "You are an amazing instrument of God’s word for us students. Happy Teacher's Day!",
    color: "rgba(215, 205, 225, 0.15)",
    rotation: -1.5,
  },
  {
    id: 11,
    name: "Maynard Villar",
    year: "3rd Year, BS Information Systems",
    message:
      "Thank you for sharing God's light and love with our class. Wishing you a truly blessed Teacher's Day!",
    color: "rgba(215, 205, 225, 0.15)",
    rotation: -1.5,
  },
];

function MessageCard({ msg, index }: { msg: typeof MESSAGES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        onClick={() => setExpanded(!expanded)}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `rgba(255, 255, 255, 0.65)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.85)",
          boxShadow:
            "0 4px 24px rgba(26, 58, 92, 0.07), 0 1px 6px rgba(26, 58, 92, 0.04)",
          borderRadius: "16px",
          padding: "22px",
          cursor: "pointer",
          transform: `rotate(${msg.rotation}deg)`,
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Sticky note top accent */}
        <div
          style={{
            width: "28px",
            height: "3px",
            background: "rgba(100, 150, 200, 0.4)",
            borderRadius: "100px",
            marginBottom: "14px",
          }}
        />

        {/* Message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={expanded ? "full" : "short"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "15px",
              color: "#3A5572",
              lineHeight: 1.6,
              margin: "0 0 14px",
            }}
          >
            "{expanded ? msg.message : msg.message.slice(0, 80) + (msg.message.length > 80 ? "..." : "")}"
          </motion.p>
        </AnimatePresence>

        {msg.message.length > 80 && (
          <span
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
              fontSize: "11px",
              color: "#8AA0B5",
              display: "block",
              marginBottom: "12px",
            }}
          >
            {expanded ? "↑ Show less" : "Read more →"}
          </span>
        )}

        {/* Attribution */}
        <div
          style={{
            borderTop: "1px solid rgba(168, 190, 210, 0.25)",
            paddingTop: "12px",
          }}
        >
          <div
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
              fontSize: "13px",
              fontWeight: 600,
              color: "#2A4A62",
              marginBottom: "2px",
            }}
          >
            {msg.name}
          </div>
          <div
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
              fontSize: "11px",
              color: "#8AA0B5",
            }}
          >
            {msg.year}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export function MessagesSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #EBF2F8 0%, #F8F5EF 100%)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168, 200, 228, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Section header */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <SectionLabel>Student Voices</SectionLabel>
            <h2
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif',
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 700,
                color: "#0E1E32",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginTop: "4px",
                marginBottom: "16px",
              }}
            >
              Words From the<br />
              <span style={{ color: "#2A5F8F" }}>Heart.</span>
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif',
                fontSize: "15px",
                color: "#6A7E90",
                maxWidth: "440px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Click any card to read the full message.
            </p>
          </div>
        </FadeIn>

        {/* Message wall grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {MESSAGES.map((msg, index) => (
            <MessageCard key={msg.id} msg={msg} index={index} />
          ))}
        </div>

        {/* Add your message CTA */}
        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <GlassCard
              style={{
                display: "inline-block",
                padding: "24px 40px",
                borderRadius: "100px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "17px",
                  color: "#2A5F8F",
                }}
              >
                ✦ &nbsp; Add your message to the appreciation wall &nbsp; ✦
              </span>
            </GlassCard>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
