"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatedHeading } from "@/components/ui/animated-heading";

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
    { id: 1, size: "col-span-2 row-span-2", image: "https://picsum.photos/seed/neutron1/400/400" },
    { id: 2, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron2/200/200" },
    { id: 3, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron3/200/200" },
    { id: 4, size: "col-span-1 row-span-2", image: "https://picsum.photos/seed/neutron4/200/400" },
    { id: 5, size: "col-span-2 row-span-1", image: "https://picsum.photos/seed/neutron5/400/200" },
    { id: 6, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron6/200/200" },
    { id: 7, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron7/200/200" },
    { id: 8, size: "col-span-2 row-span-2", image: "https://picsum.photos/seed/neutron8/400/400" },
    { id: 9, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron9/200/200" },
    { id: 10, size: "col-span-1 row-span-2", image: "https://picsum.photos/seed/neutron10/200/400" },
    { id: 11, size: "col-span-2 row-span-1", image: "https://picsum.photos/seed/neutron11/400/200" },
    { id: 12, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron12/200/200" },
    { id: 13, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron13/200/200" },
    { id: 14, size: "col-span-2 row-span-2", image: "https://picsum.photos/seed/neutron14/400/400" },
    { id: 15, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron15/200/200" },
    { id: 16, size: "col-span-1 row-span-2", image: "https://picsum.photos/seed/neutron16/200/400" },
    { id: 17, size: "col-span-2 row-span-1", image: "https://picsum.photos/seed/neutron17/400/200" },
    { id: 18, size: "col-span-1 row-span-1", image: "https://picsum.photos/seed/neutron18/200/200" },
  ];

  return (
    <section
      id="gallery"
      className="w-screen min-h-screen bg-black py-20 overflow-hidden"
    >
      <AnimatedHeading
        className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 px-4"
        highlightWords={["Achieved"]}
        highlightColor="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
      >
        What We Have Achieved
      </AnimatedHeading>

      <div
        ref={scrollRef}
        className="h-150 overflow-hidden px-4 md:px-8 lg:px-12"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] gap-4 pb-20">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.size} bg-zinc-900 rounded-2xl overflow-hidden relative`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={`Gallery image ${item.id}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
          {/* Duplicate items for infinite scroll effect */}
          {galleryItems.map((item, index) => (
            <motion.div
              key={`dup-${item.id}`}
              className={`${item.size} bg-zinc-900 rounded-2xl overflow-hidden relative`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={`Gallery image ${item.id}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
