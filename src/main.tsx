import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { TeachersSection } from "./components/TeachersSection";
import { GallerySection } from "./components/GallerySection";
import { LessonsSection } from "./components/LessonsSection";
import { MessagesSection } from "./components/MessagesSection";
import { ThankYouSection, FooterSection } from "./components/ThankYouSection";

type ImageProp = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
};

function TeachersDayScrapbook({
  teacherName = "Ms. Diana Tejada",
  teacherSubject = "Christian Teachings",
  teacherPhoto = {
    src: "/src/assets/one.jpg",
  },
  schoolName = "BSIS 3",
}: {
  teacherName?: string;
  teacherSubject?: string;
  teacherPhoto?: ImageProp;
  schoolName?: string;
}) {
  // Inject Google Fonts (Caveat for handwritten feel)
  useEffect(() => {
    const existingLink = document.getElementById("teachers-day-fonts");
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = "teachers-day-fonts";
      link.href =
        "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Helvetica, Arial, sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        background: "#F8F5EF",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* 1 — Hero */}
      <HeroSection heroTeacherName={teacherName} />

      {/* 2 — Introduction */}
      <IntroSection />

      {/* 3 — Teacher Profile (single teacher spotlight) */}
      <TeachersSection
        teacherName={teacherName}
        teacherSubject={teacherSubject}
        teacherPhoto={teacherPhoto}
      />

      {/* 4 — Memory Gallery */}
      <GallerySection />

      {/* 5 — Lessons Beyond the Classroom */}
      <LessonsSection />

      {/* 6 — Student Messages */}
      <MessagesSection />



      {/* 8 — Thank You */}
      <ThankYouSection schoolName="{schoolName}"/>

      {/* 9 — Footer */}
      <FooterSection schoolName={schoolName} />
    </div>
  );
}

// Ito ang magpapakita ng buong app sa browser
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TeachersDayScrapbook />
  </React.StrictMode>
);