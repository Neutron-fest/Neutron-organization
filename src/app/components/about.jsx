"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
      className="relative bg-[#050505] text-white py-32 md:py-40 overflow-hidden selection:bg-white selection:text-black"
    >
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" 
        }} 
      />
      
      <motion.div 
        style={{ y: yBg1 }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/4 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/3 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto mb-40 px-6 md:px-12 lg:px-24 relative z-10">
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
          className="text-[clamp(3.5rem,10vw,12rem)] font-['Greater_Theory'] leading-[0.85] uppercase tracking-tighter mb-16 relative"
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
          <br />Of Technology
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-['Telegraf'] font-light leading-tight text-zinc-300"
          >
            Neutron is a catalyst. We bridge the gap between academic theory and industrial impact through <span className="text-white font-bold italic border-b border-indigo-500/30 hover:border-indigo-500 transition-colors duration-500">intense engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end h-full"
          >
            <p className="text-xl text-zinc-500 font-['Telegraf'] max-w-md mb-8 leading-relaxed">
              We foster an environment where elite developers and technical architects converge to deconstruct and rebuild the global digital infrastructure.
            </p>
            <motion.div 
              whileHover={{ width: "100px" }}
              className="w-16 h-px bg-white/20 transition-all duration-500" 
            />
          </motion.div>
        </div>
      </div>

      <div className="relative w-full py-40 border-y border-white/8 bg-zinc-950/50 overflow-hidden isolate my-20 md:my-40 backdrop-blur-sm">
        
        <motion.div 
          style={{ opacity: opacityText, scale: scaleText }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none mix-blend-overlay z-0"
        >
          <h1 className="text-[38vw] md:text-[30vw] leading-[0.75] font-['Greater_Theory'] uppercase text-white/40 whitespace-nowrap">CORE</h1>
          <h1 className="text-[38vw] md:text-[30vw] leading-[0.75] font-['Greater_Theory'] uppercase text-white/40 whitespace-nowrap ml-32">OFFE</h1>
          <h1 className="text-[38vw] md:text-[30vw] leading-[0.75] font-['Greater_Theory'] uppercase text-white/40 whitespace-nowrap -ml-32">RINGS</h1>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row relative z-10 px-6 md:px-12 lg:px-24">
          
          <div className="flex-1 flex flex-col justify-center xl:justify-end xl:pb-24 mb-16 xl:mb-0 z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-['Greater_Theory'] uppercase leading-[0.9] text-white mb-8 tracking-tighter drop-shadow-2xl"
            >
              Multiple Types <br />
              <span className="text-zinc-500">Of Offerings</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-zinc-400 font-['Telegraf'] max-w-sm leading-relaxed"
            >
              Speed up your innovation <br />
              with these tools for elite generation.
            </motion.p>
          </div>

          <div className="flex-2 flex flex-row items-center justify-start lg:justify-center min-w-[600px] min-h-[500px] relative mt-10 xl:mt-0 xl:ml-10">
            {OFFERINGS.map((item, idx) => {
              const isActive = activeIdx === idx;
              const distance = Math.abs(idx - activeIdx);
              const isLeft = idx < activeIdx;
              const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
              
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  layout
                  initial={false}
                  animate={{
                    width: isActive ? "min(90vw, 420px)" : "min(40vw, 240px)",
                    height: isActive ? 460 : 320,
                    zIndex: isActive ? 50 : 40 - distance,
                    x: isActive ? 0 : isLeft ? distance * 20 : distance * -20,
                    y: isActive ? -20 : 0,
                    opacity: isActive ? 1 : 0.85 - (distance * 0.15)
                  }}
                  whileHover={{
                    y: isActive ? -20 : -10,
                    opacity: 1
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                  className={`group relative cursor-pointer shrink-0 transition-all duration-500 overflow-hidden
                    ${isActive 
                      ? 'bg-[#121214] border border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.8)]' 
                      : 'bg-[#1a1a1c]/80 border border-white/15 backdrop-blur-xl hover:bg-[#222225]/90'
                    }`}
                  style={{
                    marginLeft: idx === 0 ? 0 : isMobile ? (isActive ? -30 : -50) : (isActive ? -70 : -120),
                    borderRadius: "32px"
                  }}
                >
                  <div className="p-8 md:p-10 h-full flex flex-col justify-between relative z-10">
                    
                    <div className="flex justify-between items-start w-full relative z-20">
                      <motion.span 
                        layout="position"
                        className={`text-sm md:text-base font-['Telegraf'] tracking-[0.3em] ${isActive ? 'text-indigo-300 font-bold' : 'text-zinc-400 group-hover:text-zinc-300'}`}
                      >
                        / {item.id}
                      </motion.span>
                    </div>

                    <div className="flex flex-col gap-5 relative z-20">
                      <motion.h3 
                        layout="position"
                        className={`text-2xl md:text-3xl font-['Greater_Theory'] leading-[0.9] uppercase ${isActive ? 'text-indigo-300 tracking-widest' : 'text-zinc-400 tracking-normal group-hover:text-zinc-200'}`}
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
                            <p className="text-sm md:text-sm font-['Telegraf'] text-zinc-300 leading-relaxed pr-2 md:pr-10">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className={`absolute inset-0 bg-linear-to-t pointer-events-none transition-opacity duration-700 ${isActive ? 'from-grey-900/20 via-black/40 to-transparent opacity-100' : 'from-black/80 via-transparent to-transparent opacity-50'}`} />
                  </div>

                  {isActive && (
                    <motion.div 
                      layoutId="activeTopBorder"
                      className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-80"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center py-32 px-6 mt-10 md:mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-black tracking-[0.5em] text-white/80 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Infinity Vision Protocol
          </div>
          <h3 className="text-[clamp(3rem,8vw,7rem)] font-['Greater_Theory'] leading-[0.9] uppercase tracking-tighter">
            Where logic meets <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-400">Human Intuition</span>
          </h3>
          <p className="text-xl md:text-4xl text-zinc-400 font-['Telegraf'] font-light max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation to architect the global technology landscape through discipline and disrupton.
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


