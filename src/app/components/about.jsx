"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(trackWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${trackWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#1c1f17] text-white"
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
