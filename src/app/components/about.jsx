"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const path = pathRef.current;

    const panels = track.querySelectorAll(".panel");
    const totalWidth = panels.length * window.innerWidth;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      track,
      {
        x: -(totalWidth - window.innerWidth),
        ease: "none",
      },
      0,
    );

    tl.to(
      path,
      {
        strokeDashoffset: 0,
        ease: "none",
      },
      0,
    );

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="relative flex h-full"
        style={{ width: "400vw" }}
      >
        {/* ORTHOGONAL TIMELINE */}
        <svg
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2"
          width="400vw"
          height="320"
          viewBox="0 0 4000 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="
              M0 160
              H700
              V80
              H1400
              V240
              H2100
              V100
              H2800
              V200
              H4000
            "
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* PANELS */}
        <Panel position="top" title="What we are doing">
          We are developing reversible cryopreservation systems for human organs
          to remove time as a limiting factor.
        </Panel>

        <Panel position="bottom" title="Why it matters now">
          Nearly one million people die each year due to organ failure.
          Logistics, not donation, is the bottleneck.
        </Panel>

        <Panel position="top" title="The problem today">
          Hearts and lungs last only hours on ice. Transport decisions dictate
          survival.
        </Panel>

        <Panel position="bottom" title="Our approach">
          Cryopreservation turns time from a constraint into a tool.
        </Panel>
      </div>
    </section>
  );
}

/* ===================== PANEL ===================== */

function Panel({ title, children, position }) {
  return (
    <div className="panel relative w-screen h-full flex items-center">
      <div
        className={`max-w-xl ml-16 ${
          position === "top" ? "-translate-y-24" : "translate-y-24"
        }`}
      >
        <h2 className="text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
