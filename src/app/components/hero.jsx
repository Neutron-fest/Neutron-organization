"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 0.8, 1]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* NEUTRON TEXT (BEHIND VIDEO) */}
        <div className="absolute inset-0 z-5 flex items-center justify-center overflow-hidden w-full px-0">
          <motion.h1
            className="font-black text-white tracking-tighter whitespace-nowrap w-full text-center"
            style={{
              fontFamily: "Greater Theory",
              opacity,
              scale,
              fontSize: "clamp(2.5rem, 18vw, 16vw)",
            }}
          >
            NEUTRON
          </motion.h1>
        </div>

        {/* VIDEO */}
        <motion.div
          style={{ scale: videoScale, borderRadius }}
          className="absolute inset-0 z-10 overflow-hidden origin-center"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://rishihoodmarketingimg.s3.ap-south-1.amazonaws.com/Neutron+ORG/Neutron.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
