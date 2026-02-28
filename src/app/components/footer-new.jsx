"use client";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (event) => {
    if (!svgRef.current) return;

    setIsHovering(true);

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 600;
    const y = ((event.clientY - rect.top) / rect.height) * 120;

    setMaskPosition({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" },
  ];


  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/neutronfest/",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      name: "X",
      url: "https://x.com/neutronfest",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@neutronfest",
      icon: <Youtube className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/neutronfest/",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-white/10 py-12 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-gradient-to-br from-white/10 via-zinc-500/5 to-transparent blur-3xl"></div>
      </div>

      {/* Large background text with hover effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <svg
          ref={svgRef}
          className="w-full h-full max-w-300"
          viewBox="0 0 600 120"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            <radialGradient
              id="revealMask"
              cx={maskPosition.x}
              cy={maskPosition.y}
              r="15%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>

            <mask id="textRevealMask">
              <rect width="100%" height="100%" fill="url(#revealMask)" />
            </mask>
          </defs>

          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-[120px] font-black tracking-tight"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            NEUTRON
          </text>

          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-[120px] font-black tracking-tight"
            fill="url(#textGradient)"
            mask="url(#textRevealMask)"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            NEUTRON
          </text>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Top section: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="text-black font-black">N</span>
              </div>
              <span className="text-white font-['Greater_Theory'] text-2xl tracking-tighter uppercase">Neutron</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering innovation through technology. Leading tech events and
              competitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:neutron@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:scale-110 transition-all" />
                  neutron@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-zinc-600" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section: Social links + Copyright + Back to top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:border-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Neutron. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
