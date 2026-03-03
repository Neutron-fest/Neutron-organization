"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    className: "col-span-2 row-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    image: "/Gallery/20250413_195125.jpg",
  },
  {
    id: 2,
    className: "col-span-1 row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    image: "/Gallery/20250413_195722.jpg",
  },
  {
    id: 3,
    className: "col-span-1 row-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2",
    image: "/Gallery/ARS06099.JPG",
  },
  {
    id: 4,
    className: "col-span-2 row-span-2 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3",
    image: "/Gallery/ARS06503.JPG",
  },
  {
    id: 5,
    className: "col-span-2 sm:col-span-1 lg:col-span-2 row-span-1 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    image: "/Gallery/ARS07087.JPG",
  },
  {
    id: 6,
    className: "col-span-2 row-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    image: "/Gallery/ARS07116.JPG",
  },
  {
    id: 7,
    className: "col-span-1 row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    image: "/Gallery/ARS07327.JPG",
  },
  {
    id: 8,
    className: "col-span-1 row-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    image: "/Gallery/dj.webp",
  },
  {
    id: 9,
    className: "col-span-1 row-span-1 lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-4",
    image: "/Gallery/Gaurav.webp",
  },
  {
    id: 10,
    className: "col-span-1 row-span-1 lg:col-start-6 lg:col-end-7 lg:row-start-3 lg:row-end-4",
    image: "/Gallery/Show.webp",
  },
];

function GalleryGrid({ idPrefix = "", animate = false, onImageClick }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[100px] md:auto-rows-[130px] lg:auto-rows-[150px]">
      {galleryItems.map((item, index) => {
        const content = (
          <div
            className="w-full h-full relative group cursor-pointer"
            onClick={() => onImageClick(item.image)}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white bg-black/60 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transform scale-95 group-hover:scale-100 transition-all duration-300">
                View
              </span>
            </div>
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        );

        return animate ? (
          <motion.div
            key={`${idPrefix}${item.id}`}
            className={`bg-zinc-900 overflow-hidden relative rounded-xl shadow-lg border border-zinc-800/50 ${item.className}`}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            {content}
          </motion.div>
        ) : (
          <div
            key={`${idPrefix}${item.id}`}
            className={`bg-zinc-900 overflow-hidden relative rounded-xl shadow-lg border border-zinc-800/50 ${item.className}`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="w-full min-h-screen bg-black py-10 sm:py-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.4)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />

      <AnimatedHeading
        className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-12 sm:mb-20 px-4 relative z-10"
        highlightWords={["Achieved"]}
        highlightColor="linear-gradient(135deg, #27272a 0%, #52525b 50%, #a1a1aa 100%)"
      >
        What We Have Achieved
      </AnimatedHeading>

      <div className="h-[432px] md:h-[552px] lg:h-[482px] overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12 relative z-10 group">
        <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black to-transparent z-20 pointer-events-none" />

        <div className="flex flex-col gap-2 md:gap-4 gallery-infinite-track group-hover:paused pb-4">
          <GalleryGrid idPrefix="a-" animate={true} onImageClick={setSelectedImage} />
          <GalleryGrid idPrefix="b-" animate={false} onImageClick={setSelectedImage} />
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-screen flex items-center justify-center w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 sm:-right-4 sm:-top-4 text-white hover:text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800/80 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all shadow-xl z-50 border border-zinc-700/50 text-sm flex items-center justify-center"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="w-auto max-w-full max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-infinite-track {
          animation: galleryScrollUp 25s linear infinite;
          will-change: transform;
        }

        /* Responsive speeds for better viewing experience */
        @media (max-width: 768px) {
          .gallery-infinite-track {
            animation-duration: 35s; /* Slower on mobile */
          }
        }

        @keyframes galleryScrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 1rem)); } 
          /* -50% - gap distance ensures seamless loop */
        }
      `}</style>
    </section>
  );
}
