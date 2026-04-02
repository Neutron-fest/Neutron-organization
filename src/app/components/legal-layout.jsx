"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "./footer-new";

export default function LegalLayout({ children, title, lastUpdated }) {
  return (
    <div className="min-h-screen bg-black text-white font-['Telegraf',sans-serif] selection:bg-white/20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-800/10 blur-[100px] rounded-full opacity-30" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", 
            backgroundSize: "100% 4px" 
          }} 
        />
      </div>

      <header className="z-50 border-b border-white/10 backdrop-blur-md bg-black/50 sticky top-0">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/neutron.png"
              alt="Neutron Logo"
              className="h-8 sm:h-10 w-auto rounded"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Neutron
            </span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-['Greater_Theory'] uppercase tracking-tighter mb-4 text-white">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase">
                Last Updated: April 2, 2026
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-zinc max-w-none 
              prose-headings:font-['Greater_Theory'] prose-headings:uppercase prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/10
              prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-zinc-400 prose-li:text-lg
              prose-strong:text-white"
          >
            {children}
          </motion.div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}
