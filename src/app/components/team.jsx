"use client";
import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Aman Kumar",
      role: "Competitions Head",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d20e5368e1507d4109_image%204631.avif",
    },
    {
      id: 2,
      name: "Shivansh",
      role: "Marketing",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d215e08369e5b7a927_image%204629.avif",
    },
    {
      id: 3,
      name: "Yash Lunawat",
      role: "Accommodation and Hospitality",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d23fd5947ee8a92206_image%204628.avif",
    },
    {
      id: 4,
      name: "Aman Kumar",
      role: "Tech Exhibitions",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d20c4dcd72c058f0ea_image%204630.avif",
    },
    {
      id: 5,
      name: "Rishabh Gusain",
      role: "Fest Engagement",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d2d519ae1be1e25617_image%204632.avif",
    },
    {
      id: 6,
      name: "Satyarth",
      role: "Partner Management",
      image:
        "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/683511d2c8956871555a8233_image%204603.avif",
    },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <section
      id="team"
      className="w-screen min-h-screen bg-black py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-12">
          <AnimatedHeading
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4"
            highlightWords={["Students", "possible"]}
            highlightColor="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
          >
            Students who made it possible
          </AnimatedHeading>
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
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <div 
          className="flex gap-6 pl-16 md:pl-24 lg:pl-32 hover:[animation-play-state:paused]"
          style={{
            width: "fit-content",
            animation: "scroll 25s linear infinite",
          }}
        >
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[280px] sm:w-[300px] md:w-[320px] bg-zinc-900 rounded-3xl overflow-hidden flex-shrink-0"
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
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </section>
  );
}
