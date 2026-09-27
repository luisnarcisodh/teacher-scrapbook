import { motion } from "motion/react";
import { ImageWithFallback, PolaroidFrame, MaskingTape, FadeIn, SectionLabel } from "./shared";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/src/assets/seventeen.jpg",
    alt: "",
    caption: "",
    rotation: -3,
    width: 260,
    imageHeight: 200,
  },
  {
    id: 2,
    src: "/src/assets/fifteen.jpg",
    alt: "",
    caption: "",
    rotation: 2.5,
    width: 220,
    imageHeight: 170,
  },
  {
    id: 3,
    src: "/src/assets/eight.jpg",
    alt: "",
    caption: "",
    rotation: -1.5,
    width: 300,
    imageHeight: 230,
  },
  {
    id: 4,
    src: "/src/assets/eighteen.jpg",
    alt: "",
    caption: "",
    rotation: 3,
    width: 230,
    imageHeight: 175,
  },
  {
    id: 5,
    src: "/src/assets/sixteen.jpg",
    alt: "",
    caption: "",
    rotation: -2,
    width: 240,
    imageHeight: 190,
  },
];

// Large editorial photo (non-polaroid)
const LARGE_PHOTO = {
  src: "/src/assets/nine.jpg",
  alt: "University seminar discussion group",
};

export function GallerySection() {
  return (
    <section
      style={{
        background: "#F0EBE0",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full px-6 md:px-12 lg:px-20"
        style={{ maxWidth: "1320px", margin: "0 auto", position: "relative" }}
      >
        {/* Section header */}
        <FadeIn>
          <div style={{ marginBottom: "72px" }}>
            <SectionLabel>Memory Gallery</SectionLabel>
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
                marginBottom: 0,
              }}
            >
              Moments<br />
              <span style={{ color: "#2A5F8F" }}>in Time</span>
            </h2>
          </div>
        </FadeIn>

        {/* Collage layout — Row 1 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          {/* Item 1 */}
          <FadeIn delay={0.05} direction="up">
            <div style={{ position: "relative", paddingTop: "20px" }}>
              <MaskingTape
                color="rgba(196, 176, 120, 0.5)"
                width={64}
                height={22}
                style={{ top: "0px", left: "50%", transform: "translateX(-50%) rotate(-2deg)" }}
              />
              <motion.div whileHover={{ scale: 1.03, rotate: -1 }} transition={{ duration: 0.3 }}>
                <PolaroidFrame
                  src={GALLERY_ITEMS[0].src}
                  alt={GALLERY_ITEMS[0].alt}
                  caption={GALLERY_ITEMS[0].caption}
                  rotation={GALLERY_ITEMS[0].rotation}
                  width={GALLERY_ITEMS[0].width}
                  imageHeight={GALLERY_ITEMS[0].imageHeight}
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Item 2 — Large editorial photo */}
          <FadeIn delay={0.1} direction="up">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                padding: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.14)",
                transform: "rotate(1deg)",
              }}
            >
              <ImageWithFallback
                src={LARGE_PHOTO.src}
                alt={LARGE_PHOTO.alt}
                style={{
                  width: "340px",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <MaskingTape
                color="rgba(180, 210, 230, 0.52)"
                width={68}
                height={22}
                style={{ top: "-11px", left: "50%", transform: "translateX(-50%) rotate(1deg)" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-22px",
                  left: "10px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "13px",
                  color: "#7A9AB5",
                  transform: "rotate(-2deg)",
                }}
              >
              </div>
            </motion.div>
          </FadeIn>

          {/* Item 3 */}
          <FadeIn delay={0.15} direction="up">
            <div style={{ position: "relative", paddingTop: "16px" }}>
              <MaskingTape
                color="rgba(196, 176, 120, 0.48)"
                width={60}
                height={22}
                style={{ top: "0px", left: "50%", transform: "translateX(-50%) rotate(2deg)" }}
              />
              <motion.div whileHover={{ scale: 1.03, rotate: 1 }} transition={{ duration: 0.3 }}>
                <PolaroidFrame
                  src={GALLERY_ITEMS[1].src}
                  alt={GALLERY_ITEMS[1].alt}
                  caption={GALLERY_ITEMS[1].caption}
                  rotation={GALLERY_ITEMS[1].rotation}
                  width={GALLERY_ITEMS[1].width}
                  imageHeight={GALLERY_ITEMS[1].imageHeight}
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "flex-start",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* Large graduation polaroid */}
          <FadeIn delay={0.1} direction="up">
            <div style={{ position: "relative", paddingTop: "20px" }}>
              <MaskingTape
                color="rgba(196, 176, 120, 0.5)"
                width={72}
                height={24}
                style={{ top: "0px", left: "50%", transform: "translateX(-50%) rotate(-1deg)" }}
              />
              <motion.div whileHover={{ scale: 1.02, rotate: -0.5 }} transition={{ duration: 0.35 }}>
                <PolaroidFrame
                  src={GALLERY_ITEMS[2].src}
                  alt={GALLERY_ITEMS[2].alt}
                  caption={GALLERY_ITEMS[2].caption}
                  rotation={GALLERY_ITEMS[2].rotation}
                  width={GALLERY_ITEMS[2].width}
                  imageHeight={GALLERY_ITEMS[2].imageHeight}
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Stacked small polaroids */}
          <FadeIn delay={0.18} direction="up">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              <div style={{ position: "relative", paddingTop: "16px" }}>
                <MaskingTape
                  color="rgba(180, 210, 230, 0.5)"
                  width={60}
                  height={20}
                  style={{ top: "0px", left: "50%", transform: "translateX(-50%) rotate(3deg)" }}
                />
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                  <PolaroidFrame
                    src={GALLERY_ITEMS[3].src}
                    alt={GALLERY_ITEMS[3].alt}
                    caption={GALLERY_ITEMS[3].caption}
                    rotation={GALLERY_ITEMS[3].rotation}
                    width={GALLERY_ITEMS[3].width}
                    imageHeight={GALLERY_ITEMS[3].imageHeight}
                  />
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.24} direction="up">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative", paddingTop: "16px" }}>
                <MaskingTape
                  color="rgba(196, 176, 120, 0.45)"
                  width={58}
                  height={20}
                  style={{ top: "0px", left: "50%", transform: "translateX(-50%) rotate(-2deg)" }}
                />
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                  <PolaroidFrame
                    src={GALLERY_ITEMS[4].src}
                    alt={GALLERY_ITEMS[4].alt}
                    caption={GALLERY_ITEMS[4].caption}
                    rotation={GALLERY_ITEMS[4].rotation}
                    width={GALLERY_ITEMS[4].width}
                    imageHeight={GALLERY_ITEMS[4].imageHeight}
                  />
                </motion.div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Decorative handwritten label */}
        <FadeIn delay={0.2}>
          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              fontFamily: "'Caveat', cursive",
              fontSize: "22px",
              color: "#A0B5C5",
              letterSpacing: "0.02em",
            }}
          >
            ✦ &nbsp; every photo a memory, every memory a treasure &nbsp; ✦
          </div>
        </FadeIn>
      </div>
    </section>
  );
}