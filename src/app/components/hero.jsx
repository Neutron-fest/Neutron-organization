"use client";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://rishihoodmarketingimg.s3.ap-south-1.amazonaws.com/Neutron+ORG/Neutron.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />

      {/* Scroll Prompt - Center Bottom */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.p
          className="text-white text-sm sm:text-base font-medium tracking-wider uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
