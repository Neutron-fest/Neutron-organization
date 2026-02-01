"use client";
import { useRef, useEffect } from "react";
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
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
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
      <div
        ref={trackRef}
        className="relative flex h-full"
        style={{ width: "400vw" }}
      >
        {/* TIMELINE */}
        <svg
          className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"
          width="400vw"
          height="400"
          viewBox="0 0 4000 400"
          fill="none"
        >
          <path
            ref={pathRef}
            d="
              M -50 100
              L 500 100
              C 600 100 650 120 700 160
              C 750 200 780 260 750 300
              C 720 340 650 350 600 320
              C 550 290 530 240 560 200
              C 590 160 650 150 700 180
              L 750 220
              L 850 300
              L 1000 320
              L 2000 320
              L 3000 320
              L 4100 320
            "
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* PANELS */}
        <Panel title="What we are doing">
          Developing reversible cryopreservation systems to eliminate donor
          organ time constraints.
        </Panel>

        <Panel title="Why it matters now">
          Nearly one million people die annually due to organ shortages.
          Logistics — not science — is the bottleneck.
        </Panel>

        <Panel title="The problem today">
          Hearts and lungs survive only hours. Every delay costs lives.
        </Panel>

        <Panel title="Our approach">
          Cryopreservation turns time from a constraint into a tool.
        </Panel>
      </div>
    </section>
  );
}

function Panel({ title, children }) {
  return (
    <div className="panel relative w-screen h-full flex items-center">
      <div className="ml-32 max-w-xl">
        <h2 className="text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
