"use client";
import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const galleryItems = [
  {
    id: 1,
    placement: { gridColumn: "1 / 3", gridRow: "1 / 3" },
    image: "https://picsum.photos/seed/neutron1/400/400",
  },
  {
    id: 2,
    placement: { gridColumn: "3 / 4", gridRow: "1 / 2" },
    image: "https://picsum.photos/seed/neutron2/200/200",
  },
  {
    id: 3,
    placement: { gridColumn: "4 / 5", gridRow: "1 / 2" },
    image: "https://picsum.photos/seed/neutron3/200/200",
  },
  {
    id: 4,
    placement: { gridColumn: "5 / 7", gridRow: "1 / 3" },
    image: "https://picsum.photos/seed/neutron4/400/400",
  },
  {
    id: 5,
    placement: { gridColumn: "3 / 5", gridRow: "2 / 3" },
    image: "https://picsum.photos/seed/neutron5/400/200",
  },
  {
    id: 6,
    placement: { gridColumn: "1 / 3", gridRow: "3 / 4" },
    image: "https://picsum.photos/seed/neutron6/400/200",
  },
  {
    id: 7,
    placement: { gridColumn: "3 / 4", gridRow: "3 / 4" },
    image: "https://picsum.photos/seed/neutron7/200/200",
  },
  {
    id: 8,
    placement: { gridColumn: "4 / 5", gridRow: "3 / 4" },
    image: "https://picsum.photos/seed/neutron8/200/200",
  },
  {
    id: 9,
    placement: { gridColumn: "5 / 6", gridRow: "3 / 4" },
    image: "https://picsum.photos/seed/neutron9/200/200",
  },
  {
    id: 10,
    placement: { gridColumn: "6 / 7", gridRow: "3 / 4" },
    image: "https://picsum.photos/seed/neutron10/200/200",
  },
];

function GalleryGrid({ idPrefix = "", animate = false }) {
  return (
    <div
      className="grid grid-cols-6 gap-4"
      style={{ gridTemplateRows: "repeat(3, 150px)" }}
    >
      {galleryItems.map((item, index) =>
        animate ? (
          <motion.div
            key={`${idPrefix}${item.id}`}
            className="bg-zinc-900 overflow-hidden relative rounded-sm"
            style={item.placement}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ) : (
          <div
            key={`${idPrefix}${item.id}`}
            className="bg-zinc-900 overflow-hidden relative rounded-sm"
            style={item.placement}
          >
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ),
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-screen min-h-screen bg-black py-20 overflow-hidden"
    >
      <AnimatedHeading
        className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 px-4"
        highlightWords={["Achieved"]}
        highlightColor="linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #71717a 100%)"
      >
        What We Have Achieved
      </AnimatedHeading>

      <div className="h-[482px] overflow-hidden px-4 md:px-8 lg:px-12 relative">
        <div
          className="flex flex-col gap-4 gallery-infinite-track"
          aria-hidden="false"
        >
          <GalleryGrid idPrefix="a-" animate={true} />
          <GalleryGrid idPrefix="b-" animate={false} />
        </div>
      </div>

      <style>{`
        .gallery-infinite-track {
          animation: galleryScrollUp 28s linear infinite;
          will-change: transform;
        }

        @keyframes galleryScrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}
