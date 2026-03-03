"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

const OFFERINGS = [
  {
    id: "01",
    title: "Hackathons",
    desc: "Intense 48-hour marathons where logic meets raw creativity to build the tools of tomorrow."
  },
  {
    id: "02",
    title: "Masterclasses",
    desc: "Guided deep-dives into advanced architectures, led by industry architects and pioneers."
  },
  {
    id: "03",
    title: "Competitive",
    desc: "The ultimate proving ground for algorithmic mastery and elite-level problem solving."
  },
  {
    id: "04",
    title: "Innovation",
    desc: "A launchpad for disruptive prototypes, turning garage-ideas into industrial-grade reality."
  }
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(1);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.6, 0.1]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative bg-[#050505] text-white pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden selection:bg-white selection:text-black"
    >
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" 
        }} 
      />
      
      <motion.div 
        style={{ y: yBg1 }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-zinc-300/5 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/3 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 mx-auto mb-24 max-w-7xl px-6 md:mb-40 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-12 bg-white/50" />
          <span className="text-[11px] uppercase tracking-[0.8em] font-black text-white/50">Our Mission</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mb-12 text-5xl md:text-9xl leading-[0.85] tracking-tighter uppercase font-['Greater_Theory'] md:mb-16"
        >
          Architecting <br />
          <span className="text-zinc-600 block mt-2 relative overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block italic"
            >
              The Future
            </motion.span>
          </span>
          Of Technology
        </motion.h2>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl leading-tight text-zinc-300 font-['Telegraf'] md:text-5xl"
          >
            Neutron is a catalyst. We bridge the gap between academic theory and industrial impact through <span className="text-white font-bold italic border-b border-zinc-500/30 hover:border-zinc-300 transition-colors duration-500">intense engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex h-full flex-col justify-end"
          >
            <p className="mb-8 max-w-md text-lg leading-relaxed text-zinc-500 font-['Telegraf'] md:text-xl">
              We foster an environment where elite developers and technical architects converge to deconstruct and rebuild the global digital infrastructure.
            </p>
            <motion.div 
              whileHover={{ width: "100px" }}
              className="w-16 h-px bg-white/20 transition-all duration-500" 
            />
          </motion.div>
        </div>
      </div>

      <div className="relative isolate my-20 w-full overflow-hidden border-y border-white/8 bg-zinc-950/50 py-28 backdrop-blur-sm md:my-40 md:py-40">
        
        <motion.div 
          style={{ opacity: opacityText, scale: scaleText }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none mix-blend-overlay z-0"
        >
          <h1 className="text-[38vw] leading-[0.75] whitespace-nowrap text-white/40 uppercase font-['Greater_Theory'] md:text-[30vw]">CORE</h1>
          <h1 className="ml-0 text-[38vw] leading-[0.75] whitespace-nowrap text-white/40 uppercase font-['Greater_Theory'] md:ml-32 md:text-[30vw]">OFFE</h1>
          <h1 className="ml-0 text-[38vw] leading-[0.75] whitespace-nowrap text-white/40 uppercase font-['Greater_Theory'] md:-ml-32 md:text-[30vw]">RINGS</h1>
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col overflow-hidden px-6 md:px-12 lg:px-24 xl:flex-row">
          
          <div className="z-20 mb-12 flex flex-1 flex-col justify-center xl:mb-0 xl:justify-end xl:pb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-4xl leading-[0.9] tracking-tighter text-white uppercase drop-shadow-2xl font-['Greater_Theory'] md:mb-8 md:text-7xl"
            >
              Multiple Types <br />
              <span className="text-zinc-500">Of Offerings</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-sm text-base leading-relaxed text-zinc-400 font-['Telegraf'] md:text-2xl"
            >
              Speed up your innovation <br />
              with these tools for elite generation.
            </motion.p>
          </div>

          <div className="relative mt-6 flex w-full min-w-0 min-h-[400px] flex-row items-center justify-center md:mt-10 md:min-h-[500px] xl:mt-0 xl:ml-10">
            {OFFERINGS.map((item, idx) => {
              const isActive = activeIdx === idx;
              const distance = Math.abs(idx - activeIdx);
              const isLeft = idx < activeIdx;
              
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  layout
                  initial={false}
                  animate={{
                    width: isActive
                      ? (isMobile ? "72vw" : "min(90vw, 420px)")
                      : (isMobile ? "16vw" : "min(32vw, 200px)"),
                    height: isActive ? (isMobile ? 360 : 460) : (isMobile ? 220 : 300),
                    zIndex: isActive ? 50 : 40 - distance,
                    x: isActive ? 0 : isLeft ? distance * (isMobile ? 5 : 20) : distance * (isMobile ? -5 : -20),
                    y: isActive ? (isMobile ? -10 : -20) : 0,
                    opacity: isActive ? 1 : 0.85 - (distance * 0.15)
                  }}
                  whileHover={{
                    y: isActive ? (isMobile ? -5 : -20) : -5,
                    opacity: 1
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                  className={`group relative cursor-pointer shrink-0 transition-all duration-500 overflow-hidden
                    ${isActive 
                      ? 'bg-[#121214] border border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.8)]' 
                      : 'bg-[#1a1a1c]/80 border border-white/15 backdrop-blur-xl hover:bg-[#222225]/90'
                    }`}
                  style={{
                    marginLeft: idx === 0 ? 0 : isMobile ? (isActive ? -12 : -20) : (isActive ? -70 : -120),
                    borderRadius: isMobile ? "24px" : "32px"
                  }}
                >
                  <div className="p-12 md:p-10 h-full w-full flex flex-col justify-between relative z-10">
                    
                    <div className="flex justify-between items-start w-full relative z-20">
                      <motion.span 
                        layout="position"
                        className={`text-sm md:text-base font-['Telegraf'] tracking-[0.3em] ${isActive ? 'text-zinc-200 font-bold' : 'text-zinc-400 group-hover:text-zinc-300'}`}
                      >
                        / {item.id}
                      </motion.span>
                    </div>

                    <div className="flex flex-col gap-5 relative z-20">
                      <motion.h3 
                        layout="position"
                        className={`text-xl md:text-3xl font-['Greater_Theory'] leading-[0.9] uppercase ${isActive ? 'text-zinc-200 tracking-widest' : 'text-zinc-400 tracking-normal group-hover:text-zinc-200'}`}
                      >
                        {item.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </motion.h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: 15 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 15 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="overflow-hidden mt-2"
                          >
                            <p className="text-xs md:text-sm font-['Telegraf'] text-zinc-300 leading-relaxed pr-2 md:pr-10">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className={`absolute inset-0 bg-linear-to-t pointer-events-none transition-opacity duration-700 ${isActive ? 'from-zinc-900/40 via-black/40 to-transparent opacity-100' : 'from-black/80 via-transparent to-transparent opacity-50'}`} />
                  </div>

                  {isActive && (
                    <motion.div 
                      layoutId="activeTopBorder"
                      className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-zinc-300 to-transparent opacity-80"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-[clamp(3rem,8vw,7rem)] font-['Greater_Theory'] leading-[0.9] uppercase tracking-tighter flex flex-col items-center justify-center">
              <span className="overflow-hidden block w-full px-2">
                <motion.span 
                  className="block w-full"
                  initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Where logic meets
                </motion.span>
              </span>
              <span className="overflow-hidden block mt-1 md:mt-2 w-full px-2">
                <motion.span 
                  className="block w-full pb-4"
                  initial={{ y: "100%", opacity: 0, rotateX: -20, filter: "blur(10px)" }}
                  whileInView={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "top center", willChange: "transform, opacity" }}
                >
                  <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-zinc-500 via-zinc-200 to-zinc-500 py-1">
                    Human Intuition
                  </span>
                </motion.span>
              </span>
            </h3>
            <p className="text-xl md:text-3xl text-zinc-400 font-['Telegraf'] font-light max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation to architect the global technology landscape through discipline and disruption.
            </p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "300px", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mx-auto mt-24"
            />
          </motion.div>
      </div>

    </section>
  );
}
