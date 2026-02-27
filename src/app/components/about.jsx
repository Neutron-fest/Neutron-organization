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
    <section id="about">
      {/* Mobile Version */}
      <section className="md:hidden relative w-full bg-black text-white overflow-hidden" id="about">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-white/5 px-5 pt-6 pb-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">Our Events</p>
          <div className="flex gap-3">
            {["Qatar 2024", "Miami GP 2024"].map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveSection(i)}
                className={`relative flex-1 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden ${
                  activeSection === i ? "text-black" : "text-zinc-500 bg-zinc-900/60 border border-zinc-800"
                }`}
              >
                {activeSection === i && (
                  <span
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #a3e635 0%, #4ade80 100%)" }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative px-5 pt-10 pb-16">
          {activeSection === 0 ? (
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
                <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400/70 font-medium">Qatar · 2024</span>
              </div>

              <div className="relative">
                <span className="absolute -top-6 -left-2 text-[120px] leading-none font-black select-none pointer-events-none" style={{ color: "rgba(163,230,53,0.06)" }}>"</span>
                <h2 className="relative text-[2rem] leading-[1.15] font-black tracking-tight text-white">
                  It doesn&apos;t matter where you{" "}
                  <span style={{ background: "linear-gradient(135deg,#a3e635,#4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>start.</span>{" "}
                  It&apos;s how you{" "}
                  <span className="italic" style={{ background: "linear-gradient(135deg,#ffffff,#a1a1aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>progress.</span>
                </h2>
              </div>

              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(163,230,53,0.25)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#1a2e05 0%,#14532d 40%,#052e16 100%)" }} />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.3) 2px,rgba(0,0,0,0.3) 4px)" }} />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-lime-400/80">Live event</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
                  <p className="text-white font-black tracking-tight text-xl">DOHA</p>
                  <p className="text-lime-400/60 text-[10px] uppercase tracking-widest">Qatar · Nov 2024</p>
                </div>
              </div>

              <div className="overflow-hidden -mx-5">
                <div className="flex gap-4 w-max" style={{ animation: "about-scroll-x 18s linear infinite" }}>
                  {["Innovation","Leadership","Networking","Growth","Technology","Community","Innovation","Leadership","Networking","Growth"].map((t, i) => (
                    <span key={i} className="shrink-0 text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #a3e635, transparent)" }} />
                <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400/70 font-medium">Miami GP · 2024</span>
              </div>

              <div className="relative">
                <span className="absolute -top-6 -left-2 text-[120px] leading-none font-black select-none pointer-events-none" style={{ color: "rgba(163,230,53,0.06)" }}>"</span>
                <h2 className="relative text-[2rem] leading-[1.15] font-black tracking-tight text-white">
                  Relentless{" "}
                  <span className="italic" style={{ background: "linear-gradient(135deg,#a3e635,#4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>iteration</span>{" "}
                  beats{" "}
                  <span style={{ background: "linear-gradient(135deg,#ffffff,#a1a1aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>raw talent.</span>
                </h2>
              </div>

              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(163,230,53,0.25)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#0c1a05 0%,#052e16 50%,#1a0a2e 100%)" }} />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.3) 2px,rgba(0,0,0,0.3) 4px)" }} />
                <div className="absolute inset-0 opacity-25" style={{ background: "repeating-linear-gradient(45deg,transparent,transparent 12px,rgba(163,230,53,0.04) 12px,rgba(163,230,53,0.04) 24px)" }} />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-lime-400/80">Live event</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
                  <p className="text-white font-black tracking-tight text-xl">MIAMI</p>
                  <p className="text-lime-400/60 text-[10px] uppercase tracking-widest">Florida · GP 2024</p>
                </div>
              </div>

              <div className="overflow-hidden -mx-5">
                <div className="flex gap-4 w-max" style={{ animation: "about-scroll-x 18s linear infinite reverse" }}>
                  {["Speed","Precision","Engineering","Vision","Racing","Innovation","Speed","Precision","Engineering","Vision"].map((t, i) => (
                    <span key={i} className="shrink-0 text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <style>{`@keyframes about-scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
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
      </section>]
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
