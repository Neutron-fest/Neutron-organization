"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Cpu,
  Globe,
  Trophy,
  Zap,
  ArrowRight
} from "lucide-react";

const OFFERINGS = [
  {
    title: "Hackathons",
    icon: Code2,
    desc: "Intense 48-hour marathons where logic meets raw creativity to build the tools of tomorrow."
  },
  {
    title: "Masterclasses",
    icon: Terminal,
    desc: "Guided deep-dives into advanced architectures, led by industry architects and pioneers."
  },
  {
    title: "Competitive",
    icon: Trophy,
    desc: "The ultimate proving ground for algorithmic mastery and elite-level problem solving."
  },
  {
    title: "Innovation",
    icon: Zap,
    desc: "A launchpad for disruptive prototypes, turning garage-ideas into industrial-grade reality."
  }
];

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-white selection:text-black">

      {/* BACKGROUND DECOR (Subtle & Static) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none" />

      {/* 1. THE MANIFESTO (Simple Vertical Reveal) */}
      <div className="max-w-7xl mx-auto mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-10 bg-white/40" />
          <span className="text-[10px] uppercase tracking-[1em] font-black text-white/40">Our Mission</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,12rem)] font-['Greater_Theory'] leading-[0.85] uppercase tracking-tighter mb-16"
        >
          Architecting <br />
          <span className="text-zinc-500 italic block mt-2">The Future</span>
          Of Technology
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-['Telegraf'] font-light leading-tight text-zinc-300"
          >
            Neutron is a catalyst. We bridge the gap between academic theory and industrial impact through <span className="text-white font-bold italic underline decoration-white/20 underline-offset-8">intense engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-end h-full"
          >
            <p className="text-lg text-zinc-500 font-['Telegraf'] max-w-md mb-8">
              We foster an environment where elite developers and technical architects converge to deconstruct and rebuild the global digital infrastructure.
            </p>
            <div className="w-12 h-[1px] bg-white/10" />
          </motion.div>
        </div>
      </div>

      {/* 2. CORE OFFERINGS (Clean Bento Grid) */}
      <div className="max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERINGS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-['Greater_Theory'] uppercase mb-4 tracking-tight group-hover:tracking-widest transition-all duration-700">
                {item.title}
              </h3>
              <p className="text-zinc-500 font-['Telegraf'] leading-relaxed group-hover:text-white transition-colors">
                {item.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-black tracking-widest text-white/0 group-hover:text-white/40 transition-all duration-500">
                <span>PROTOCOL_READY</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. FINAL VISION STATEMENT (Simple & Cinematic) */}
      <div className="max-w-5xl mx-auto text-center py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black tracking-[0.5em] text-white/60">
            INFINITY_VISION_PROTOCOL
          </div>
          <h3 className="text-5xl md:text-8xl font-['Greater_Theory'] leading-none uppercase tracking-tighter">
            Where logic meets <br />
            <span className="text-zinc-500">Human Intuition</span>
          </h3>
          <p className="text-xl md:text-3xl text-zinc-400 font-['Telegraf'] font-light max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation to architect the global technology landscape through discipline and disrupton.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-white/20 mx-auto mt-20"
          />
        </motion.div>
      </div>

    </section>
  );
}
