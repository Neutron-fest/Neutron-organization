"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function SimpleBarChart({ data, label }) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-4">
      <h3 className="text-white text-xl font-semibold mb-6">{label}</h3>
      <div className="flex items-end justify-between gap-3 h-48">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex-1 flex flex-col items-center gap-2"
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full bg-linear-to-t from-blue-500 to-blue-300 rounded-t-lg"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: item.value / maxValue }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                height: "100%",
                transformOrigin: "bottom",
              }}
            />
            <span className="text-gray-400 text-xs mt-2">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SimpleLineChart({ data, label }) {
  return (
    <div className="space-y-4">
      <h3 className="text-white text-xl font-semibold mb-6">{label}</h3>
      <div className="relative h-48">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d={`M 0 ${200 - (data[0] / Math.max(...data)) * 180} ${data
              .map(
                (value, i) =>
                  `L ${(i / (data.length - 1)) * 400} ${200 - (value / Math.max(...data)) * 180}`,
              )
              .join(" ")}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-between mt-4">
          {["2020", "2021", "2022", "2023", "2024", "2025"].map((year, i) => (
            <span key={i} className="text-gray-400 text-xs">
              {year}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Impact() {
  const barData = [
    { label: "2020", value: 500 },
    { label: "2021", value: 1200 },
    { label: "2022", value: 2100 },
    { label: "2023", value: 3500 },
    { label: "2024", value: 5200 },
  ];

  const lineData = [800, 1500, 2200, 3100, 4500, 6200];

  return (
    <section
      id="analytics"
      className="w-screen min-h-screen bg-black py-20 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="bg-zinc-900 rounded-3xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              <AnimatedCounter end={5000} suffix="+" />
            </h3>
            <p className="text-gray-400 text-lg">Participants</p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 rounded-3xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              <AnimatedCounter end={50} suffix="+" />
            </h3>
            <p className="text-gray-400 text-lg">Events Organized</p>
          </motion.div>

          <motion.div
            className="bg-zinc-900 rounded-3xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-4">
              <AnimatedCounter end={100} suffix="+" />
            </h3>
            <p className="text-gray-400 text-lg">Partners & Sponsors</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-zinc-900 rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SimpleBarChart
              data={barData}
              label="Annual Participation Growth"
            />
          </motion.div>

          <motion.div
            className="bg-zinc-900 rounded-3xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SimpleLineChart data={lineData} label="Engagement Trend" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
