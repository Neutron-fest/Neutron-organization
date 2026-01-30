"use client";
import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-screen bg-black py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Large Background Text with Hover Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1
          className="text-[15rem] sm:text-[20rem] md:text-[25rem] lg:text-[30rem] font-black text-transparent opacity-10"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
          }}
          whileHover={{
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 40px rgba(139, 92, 246, 0.2)",
              "0 0 20px rgba(59, 130, 246, 0.3)",
            ],
            WebkitTextStroke: "2px rgba(59, 130, 246, 0.3)",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          NEUTRON
        </motion.h1>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-white text-3xl font-bold mb-4">Neutron</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering innovation through technology. Leading tech events and
              competitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 ">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative z-20 "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects/Events */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Events</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative z-20 text-sm"
                >
                  All Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative z-20 text-sm"
                >
                  Competitions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative z-20 text-sm"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative z-20 text-sm"
                >
                  Exhibitions
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-0 mt-1" />
                <a
                  href="mailto:neutron@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative z-20 text-sm break-all"
                >
                  neutron@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-0 mt-1" />
                <span className="text-gray-400 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="lg:flex hidden h-80  relative -mt-60 z-10">
          <TextHoverEffect text="Neutron" className="z-10" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Neutron. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
