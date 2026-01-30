"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Aman Kumar",
      role: "Competitions Head",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Shivansh",
      role: "Marketing",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Yash Lunawat",
      role: "Accommodation and Hospitality",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Aman Kumar",
      role: "Tech Exhibitions",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Rishabh",
      role: "Fest Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Event Coordinator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Rahul Verma",
      role: "Design Lead",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Neha Singh",
      role: "Social Media Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="team"
      className="w-screen min-h-screen bg-black py-20 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <motion.h2
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Students who made it possible
            </motion.h2>
            <motion.p
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              All the tech events were imagined, organised, and led entirely by
              NST students
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-4 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-4 rounded-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </motion.button>
          </div>
        </div>

        {/* Team Cards Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${currentIndex * (100 / itemsPerView)}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] md:min-w-[calc(33.333%-1.5rem)] lg:min-w-[calc(25%-1.5rem)] bg-zinc-900 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <motion.button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
