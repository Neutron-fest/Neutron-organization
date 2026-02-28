"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const BLADE_COUNT = 12;

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001
  });

  // 1. BRAND TEXT ANIMATIONS
  const brandOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  const brandScale = useTransform(smoothProgress, [0.4, 0.9], [0.85, 1.05]);
  const brandLetterSpacing = useTransform(smoothProgress, [0.4, 0.9], ["2.5em", "0.2em"]);
  const brandBlur = useTransform(smoothProgress, [0.4, 0.7], [20, 0]);

  // 2. HUD & OVERLAY ANIMATIONS
  const hudOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const grainOpacity = useTransform(smoothProgress, [0, 0.8], [0.04, 0.02]);

  // 3. GENERATE BLADES
  const blades = useMemo(() => {
    return Array.from({ length: BLADE_COUNT }).map((_, i) => ({
      id: i,
      // Alternating direction: odd blades go UP, even blades go DOWN
      direction: i % 2 === 0 ? -1 : 1,
      // Staggered delay based on index
      delay: Math.abs(i - (BLADE_COUNT - 1) / 2) * 0.04
    }));
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black selection:bg-white selection:text-black">

      {/* PROFESSIONAL GRAIN OVERLAY */}
      <div
        style={{ opacity: grainOpacity }}
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      />

      {/* SUBTLE SCANLINE OVERLAY */}
      <div className="fixed inset-0 z-45 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />

      {/* 4. INDUSTRIAL HUD (Classy/Professional) */}
      <motion.div
        style={{ opacity: hudOpacity }}
        className="fixed inset-0 z-40 pointer-events-none p-12 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 shadow-[0_0_10px_white]" />
              <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase">Status_Link // Established</span>
            </div>
            <div className="text-[8px] text-white/10 tracking-[0.2em] font-light">NEUTRON_CORE_v4.0.52 // B_&_W_PROTOCOL</div>
          </div>
          <div className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase text-right leading-relaxed">
            The Architectural <br /> Technical Festival
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-px h-16 bg-gradient-to-t from-white/30 to-transparent" />
            <div className="text-[8px] font-mono text-white/20 tracking-[0.6em] uppercase">Scroll to Deconstruct</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 5. STICKY STAGE */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* BRAND REVEAL (Behind the blades) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-6">
          <motion.div
            style={{
              opacity: brandOpacity,
              scale: brandScale,
              letterSpacing: brandLetterSpacing,
              filter: `blur(${brandBlur}px)`
            }}
            className="text-center"
          >
            <h1 className="text-white text-[clamp(2.5rem,16vw,14vw)] font-black tracking-tighter font-['Oswald'] uppercase leading-none">
              NEUTRON
            </h1>
            <motion.p
              style={{ opacity: useTransform(smoothProgress, [0.7, 1], [0, 0.4]) }}
              className="text-[10px] font-mono text-white/60 tracking-[1.5em] uppercase mt-12 pl-[1.5em]"
            >
              Architecting Innovation
            </motion.p>
          </motion.div>
        </div>

        {/* CINEMATIC APERTURE BLADES */}
        <div className="absolute inset-0 z-20 w-full h-full flex overflow-hidden">
          {blades.map((blade) => (
            <Blade
              key={blade.id}
              blade={blade}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* AMBIENT DEPTH LAYER */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.4, 0.8], [0, 0.6]) }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
      `}</style>
    </section>
  );
}

function Blade({ blade, progress }) {
  // Start the blade slide at 15% scroll
  const start = 0.15;
  const end = 0.85;

  // Each blade slides in its specific direction (Up or Down)
  const yTranslate = useTransform(
    progress,
    [start + blade.delay, end],
    ["0%", `${blade.direction * 110}%`]
  );

  const opacity = useTransform(progress, [start + blade.delay + 0.3, end], [1, 0]);
  const scale = useTransform(progress, [start + blade.delay, end], [1.02, 1.1]); // Slight overlap logic

  return (
    <motion.div
      style={{
        y: yTranslate,
        opacity,
        scaleY: scale,
        width: `${100 / BLADE_COUNT}%`,
      }}
      className="relative h-full overflow-hidden will-change-transform"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 h-full object-cover max-w-none origin-top"
        style={{
          width: "100vw",
          left: `-${(blade.id / BLADE_COUNT) * 100}vw`
        }}
      >
        <source
          src="https://rishihoodmarketingimg.s3.ap-south-1.amazonaws.com/Neutron+ORG/Neutron.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle blade highlight for industrial feel */}
      <div className="absolute inset-0 border-r border-white/5 bg-gradient-to-tr from-black/20 via-transparent to-black/20 pointer-events-none" />
    </motion.div>
  );
}
