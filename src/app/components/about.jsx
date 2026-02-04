"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const track = trackRef.current;
          const section = sectionRef.current;

          if (!track || !section) return;

          const tween = gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${track.scrollWidth}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });

          ScrollTrigger.refresh();

          return () => {
            tween.kill();
          };
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile Version */}
      <section className="md:hidden relative min-h-screen w-full bg-black text-white py-12 px-6">
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveSection(0)}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              activeSection === 0
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            Qatar 2024
          </button>
          <button
            onClick={() => setActiveSection(1)}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              activeSection === 1
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            Miami GP 2024
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeSection === 0 ? (
            <>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-4">
                  QATAR, 2024
                </p>
                <h2 className="text-2xl leading-snug font-serif text-gray-100">
                  It doesn't matter where you start. It's how you progress.
                </h2>
              </div>
              <div className="w-full h-75 rounded-2xl bg-linear-to-br from-lime-400/80 to-emerald-600/80" />
            </>
          ) : (
            <>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-4">
                  MIAMI GP, 2024
                </p>
                <h2 className="text-2xl leading-snug font-serif text-gray-100">
                  Relentless iteration beats raw talent.
                </h2>
              </div>
              <div className="w-full h-75 rounded-2xl bg-linear-to-br from-lime-400/80 to-emerald-600/80" />
            </>
          )}
        </div>
      </section>

      {/* Desktop Version */}
      <section
        ref={sectionRef}
        className="hidden md:block relative h-screen w-full overflow-hidden bg-black text-white"
      >
        <div
          ref={trackRef}
          className="relative h-full flex"
          style={{ width: "100vw" }}
        >
          {/* ================= SECTION 1 ================= */}
          <div className="relative h-full w-screen">
            <TextBlock
              left="32vw"
              top="25vh"
              title="QATAR, 2024"
              text="It doesn't matter where you start. It’s how you progress."
            />

            <ImageBlock left="8vw" top="15vh" size="wideSm" />
            <ImageBlock left="20vw" top="65vh" size="wideSm" />
            <ImageBlock left="50vw" top="55vh" size="wideSm" />

            <ImageBlock left="75vw" top="14vh" size="mdTall" />
          </div>

          {/* ================= SECTION 2 ================= */}
          <div className="relative h-full w-screen">
            <TextBlock
              left="65vw"
              top="60vh"
              title="MIAMI GP, 2024"
              text="Relentless iteration beats raw talent."
            />

            <ImageBlock left="65vw" top="12vh" size="wideSm" />
            <ImageBlock left="90vw" top="35vh" size="md" />
            <ImageBlock left="118vw" top="16vh" size="wideSmTall" />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- BLOCKS ---------------- */

function TextBlock({ title, text, left, top }) {
  return (
    <div className="absolute max-w-md" style={{ left, top }}>
      <p className="text-xs tracking-widest text-gray-400 mb-4">{title}</p>
      <h2 className="text-3xl leading-snug font-serif text-gray-100">{text}</h2>
    </div>
  );
}

function ImageBlock({ left, top, size = "md" }) {
  const sizes = {
    wideSm: "w-[260px] h-[200px]",
    mdTall: "w-[300px] h-[520px]",
    md: "w-[320px] h-[420px]",
    lg: "w-[420px] h-[520px]",
    wideSmTall: "w-[400px] h-[300px]",
  };

  return (
    <div
      className={`absolute ${sizes[size]} rounded-2xl bg-linear-to-br from-lime-400/80 to-emerald-600/80`}
      style={{ left, top }}
    />
  );
}
