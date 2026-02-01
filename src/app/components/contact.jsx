"use client";
import { motion } from "motion/react";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="w-screen min-h-screen bg-black py-20 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <motion.p 
            className="text-zinc-500 text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            CONTACT
          </motion.p>
          <AnimatedHeading
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
            highlightWords={["talking", "do"]}
            highlightColor="linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)"
          >
            Interested in talking,
let's do it.
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            className="bg-black rounded-2xl p-8 md:p-12 border border-zinc-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-white hover:bg-gray-200 text-black font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-3">
                EMAIL
              </p>
              <a
                href="mailto:neutron@gmail.com"
                className="text-2xl md:text-3xl font-semibold text-white hover:opacity-80 transition-opacity"
              >
                neutron@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-3">
                LOCATION
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <p className="text-xl text-white font-medium">India</p>
              </div>
            </div>

            {/* Connect */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
                CONNECT
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-black hover:bg-zinc-800 border border-zinc-700 px-5 py-3 rounded-xl transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">
                    Instagram
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-black hover:bg-zinc-800 border border-zinc-700 px-5 py-3 rounded-xl transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">X</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-black hover:bg-zinc-800 border border-zinc-700 px-5 py-3 rounded-xl transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <p className="text-white font-semibold">
                  Available for collaborations
                </p>
              </div>
              <p className="text-zinc-500 text-sm">
                Open to partnerships, sponsorships, and exciting tech event
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
