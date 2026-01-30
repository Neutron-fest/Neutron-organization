"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 0.5;
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollPos;
        // Reset scroll when reaching the end
        if (
          scrollPos >=
          scrollContainer.scrollHeight - scrollContainer.clientHeight
        ) {
          scrollPos = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  // Generate placeholder items with varied sizes for bento grid
  const galleryItems = [
    { id: 1, size: "col-span-2 row-span-2" },
    { id: 2, size: "col-span-1 row-span-1" },
    { id: 3, size: "col-span-1 row-span-1" },
    { id: 4, size: "col-span-1 row-span-2" },
    { id: 5, size: "col-span-2 row-span-1" },
    { id: 6, size: "col-span-1 row-span-1" },
    { id: 7, size: "col-span-1 row-span-1" },
    { id: 8, size: "col-span-2 row-span-2" },
    { id: 9, size: "col-span-1 row-span-1" },
    { id: 10, size: "col-span-1 row-span-2" },
    { id: 11, size: "col-span-2 row-span-1" },
    { id: 12, size: "col-span-1 row-span-1" },
    { id: 13, size: "col-span-1 row-span-1" },
    { id: 14, size: "col-span-2 row-span-2" },
    { id: 15, size: "col-span-1 row-span-1" },
    { id: 16, size: "col-span-1 row-span-2" },
    { id: 17, size: "col-span-2 row-span-1" },
    { id: 18, size: "col-span-1 row-span-1" },
  ];

  return (
    <section
      id="gallery"
      className="w-screen min-h-screen bg-black py-20 overflow-hidden"
    >
      <motion.h2
        className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What We Have Achieved
      </motion.h2>

      <div
        ref={scrollRef}
        className="h-150 overflow-hidden px-4 md:px-8 lg:px-12"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] gap-4 pb-20">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.size} bg-white rounded-2xl`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            />
          ))}
          {/* Duplicate items for infinite scroll effect */}
          {galleryItems.map((item, index) => (
            <motion.div
              key={`dup-${item.id}`}
              className={`${item.size} bg-white rounded-2xl`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
