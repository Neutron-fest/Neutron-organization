"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useAnimationFrame,
} from "motion/react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { AnimatedText } from "@/components/ui/animated-heading";

// Noise texture overlay
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Animated number with rolling effect
function RollingNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function - easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDisplayed(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
}

// Live pulse indicator
function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400" />
      </span>
      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
        Live
      </span>
    </span>
  );
}

// Mini sparkline chart
function Sparkline({ data, width = 80, height = 24, color = "#52525b" }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((v - min) / range) * height * 0.8 - height * 0.1,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx={points[points.length - 1]?.x}
        cy={points[points.length - 1]?.y}
        r="2"
        fill={color}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        viewport={{ once: true }}
      />
    </svg>
  );
}

// Hero stat with large number
function HeroStat({
  value,
  suffix,
  label,
  trend,
  trendValue,
  sparkData,
  accent = "#a1a1aa",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-2xl p-6 overflow-hidden transition-all duration-500"
        style={{
          background: "#0d0d0d",
          border: `1px solid ${isHovered ? accent + "40" : "rgba(39,39,42,0.8)"}`,
          boxShadow: isHovered ? `0 0 40px 0 ${accent}18` : "none",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}80, transparent)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0.3,
            opacity: isHovered ? 1 : 0.4,
          }}
          transition={{ duration: 0.5 }}
        />

        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-medium"
              style={{ color: accent + "aa" }}
            >
              {label}
            </span>
          </div>
          {sparkData && <Sparkline data={sparkData} color={accent} />}
        </div>

        <div className="mb-2">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none"
            style={{ color: "#f4f4f5" }}
          >
            <RollingNumber value={value} suffix={suffix} />
          </h3>
        </div>

        <div
          className="mt-5 h-px"
          style={{
            background: `linear-gradient(90deg, ${accent}30, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

// Advanced multi-series chart
function AdvancedChart({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredSeries, setHoveredSeries] = useState(null);
  const chartRef = useRef(null);

  const chartWidth = 500;
  const chartHeight = 280;
  const padding = { top: 40, right: 20, bottom: 50, left: 60 };

  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxValue = Math.max(
    ...data.flatMap((d) => [d.participants, d.engagement]),
  );

  const points = useMemo(() => {
    return data.map((d, i) => ({
      x: padding.left + (i / (data.length - 1)) * innerWidth,
      y1: padding.top + innerHeight - (d.participants / maxValue) * innerHeight,
      y2: padding.top + innerHeight - (d.engagement / maxValue) * innerHeight,
      ...d,
    }));
  }, [data, maxValue, innerWidth, innerHeight]);

  const createPath = useCallback(
    (series) => {
      const yKey = series === "participants" ? "y1" : "y2";
      if (points.length < 2) return "";

      let path = `M ${points[0].x} ${points[0][yKey]}`;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const tension = 0.4;

        const cp1x = prev.x + (curr.x - prev.x) * tension;
        const cp2x = curr.x - (curr.x - prev.x) * tension;

        path += ` C ${cp1x} ${prev[yKey]}, ${cp2x} ${curr[yKey]}, ${curr.x} ${curr[yKey]}`;
      }

      return path;
    },
    [points],
  );

  const participantsPath = createPath("participants");
  const engagementPath = createPath("engagement");

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-zinc-200 text-base sm:text-lg font-medium mb-1">
            Growth Overview
          </h3>
          <p className="text-zinc-600 text-xs">
            Participation vs Engagement metrics
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className={`flex items-center gap-1.5 text-[10px] sm:text-xs transition-colors ${hoveredSeries === "participants" || !hoveredSeries ? "text-zinc-400" : "text-zinc-700"}`}
            onMouseEnter={() => setHoveredSeries("participants")}
            onMouseLeave={() => setHoveredSeries(null)}
          >
            <span className="w-2.5 sm:w-3 h-[2px] bg-zinc-400" />
            <span className="hidden xs:inline sm:inline">Participants</span>
            <span className="inline xs:hidden sm:hidden">Part.</span>
          </button>
          <button
            className={`flex items-center gap-1.5 text-[10px] sm:text-xs transition-colors ${hoveredSeries === "engagement" || !hoveredSeries ? "text-zinc-600" : "text-zinc-800"}`}
            onMouseEnter={() => setHoveredSeries("engagement")}
            onMouseLeave={() => setHoveredSeries(null)}
          >
            <span className="w-2.5 sm:w-3 h-[2px] bg-zinc-600 opacity-60" />
            <span className="hidden xs:inline sm:inline">Engagement</span>
            <span className="inline xs:hidden sm:hidden">Eng.</span>
          </button>
        </div>
      </div>

      {/* Chart */}
      <div
        className="flex-1 relative min-h-[250px] sm:min-h-[280px]"
        ref={chartRef}
      >
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="xMinYMid meet"
        >
          <defs>
            <linearGradient
              id="participantsGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(161, 161, 170, 0.15)" />
              <stop offset="100%" stopColor="rgba(161, 161, 170, 0)" />
            </linearGradient>
          </defs>

          {/* Y-axis grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => {
            const y = padding.top + innerHeight * (1 - tick);
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="rgba(63, 63, 70, 0.3)"
                  strokeDasharray={i === 0 ? "0" : "2 4"}
                />
                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  fill="#52525b"
                  fontSize="10"
                  className="tabular-nums"
                >
                  {((maxValue * tick) / 1000).toFixed(1)}k
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          <motion.path
            d={
              participantsPath +
              ` L ${points[points.length - 1]?.x} ${padding.top + innerHeight} L ${points[0]?.x} ${padding.top + innerHeight} Z`
            }
            fill="url(#participantsGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: hoveredSeries === "engagement" ? 0.3 : 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Lines */}
          <motion.path
            d={participantsPath}
            fill="none"
            stroke="#a1a1aa"
            strokeWidth={hoveredSeries === "participants" ? 2.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ opacity: hoveredSeries === "engagement" ? 0.3 : 1 }}
          />

          <motion.path
            d={engagementPath}
            fill="none"
            stroke="#52525b"
            strokeWidth={hoveredSeries === "engagement" ? 2.5 : 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{ opacity: hoveredSeries === "participants" ? 0.3 : 1 }}
          />

          {/* Interactive points */}
          {points.map((point, i) => (
            <g key={i}>
              {/* Hover zone */}
              <rect
                x={point.x - innerWidth / data.length / 2}
                y={padding.top}
                width={innerWidth / data.length}
                height={innerHeight}
                fill="transparent"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{ cursor: "pointer" }}
              />

              {/* Vertical line on hover */}
              {activeIndex === i && (
                <motion.line
                  x1={point.x}
                  y1={padding.top}
                  x2={point.x}
                  y2={padding.top + innerHeight}
                  stroke="rgba(161, 161, 170, 0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}

              {/* Points */}
              <motion.circle
                cx={point.x}
                cy={point.y1}
                r={activeIndex === i ? 5 : 3}
                fill="#18181b"
                stroke="#a1a1aa"
                strokeWidth="2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
                viewport={{ once: true }}
              />

              {/* Tooltip */}
              {activeIndex === i &&
                (() => {
                  const tooltipWidth = 110;
                  const tooltipHeight = 45;
                  const isRightSide = point.x > padding.left + innerWidth / 2;
                  const tooltipX = isRightSide
                    ? point.x - tooltipWidth - 8
                    : point.x + 8;
                  const rawY =
                    Math.min(point.y1, point.y2) - tooltipHeight - 10;
                  const tooltipY = Math.max(padding.top, rawY);
                  const textX = tooltipX + tooltipWidth / 2;
                  return (
                    <motion.g
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <rect
                        x={tooltipX}
                        y={tooltipY}
                        width={tooltipWidth}
                        height={tooltipHeight}
                        rx="6"
                        fill="#18181b"
                        stroke="#27272a"
                        strokeWidth="1"
                      />
                      <text
                        x={textX}
                        y={tooltipY + 17}
                        textAnchor="middle"
                        fill="#a1a1aa"
                        fontSize="10"
                        fontWeight="500"
                      >
                        {point.participants.toLocaleString()} participants
                      </text>
                      <text
                        x={textX}
                        y={tooltipY + 33}
                        textAnchor="middle"
                        fill="#71717a"
                        fontSize="10"
                      >
                        {point.engagement.toLocaleString()} engaged
                      </text>
                    </motion.g>
                  );
                })()}

              <text
                x={point.x}
                y={chartHeight - 15}
                textAnchor="middle"
                fill={activeIndex === i ? "#a1a1aa" : "#52525b"}
                fontSize="11"
                className="transition-colors"
              >
                {point.year}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// Radar/spider chart for skills
function RadarChart({ data }) {
  const size = 200;
  const center = size / 2;
  const radius = 70;
  const angleStep = (2 * Math.PI) / data.length;

  const points = useMemo(() => {
    return data.map((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.value / 100) * radius;
      return {
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle),
        labelX: center + (radius + 25) * Math.cos(angle),
        labelY: center + (radius + 25) * Math.sin(angle),
        ...d,
      };
    });
  }, [data, angleStep]);

  const pathD =
    points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") +
    " Z";

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background rings */}
        {[0.25, 0.5, 0.75, 1].map((scale, i) => (
          <polygon
            key={i}
            points={data
              .map((_, j) => {
                const angle = j * angleStep - Math.PI / 2;
                const r = scale * radius;
                return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(63, 63, 70, 0.3)"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {data.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="rgba(63, 63, 70, 0.3)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data shape */}
        <motion.polygon
          points={points.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="rgba(82, 82, 91, 0.2)"
          stroke="#71717a"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />

        {/* Points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#27272a"
            stroke="#a1a1aa"
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}

        {/* Labels */}
        {points.map((point, i) => (
          <text
            key={i}
            x={point.labelX}
            y={point.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#71717a"
            fontSize="10"
            className="uppercase tracking-wider"
          >
            {point.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

// Animated progress ring
function ProgressRing({ value, label, sublabel, size = 120, mobileSize = 90 }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const actualSize = isMobile ? mobileSize : size;
  const strokeWidth = isMobile ? 6 : 8;
  const radius = (actualSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <svg
          width={actualSize}
          height={actualSize}
          className="transform -rotate-90"
        >
          <circle
            cx={actualSize / 2}
            cy={actualSize / 2}
            r={radius}
            fill="none"
            stroke="#1c1c1c"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={actualSize / 2}
            cy={actualSize / 2}
            r={radius}
            fill="none"
            stroke="#52525b"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (value / 100) * circumference,
            }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-zinc-200 text-xl sm:text-2xl font-light tabular-nums">
            {value}%
          </span>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 text-center">
        <p className="text-zinc-400 text-xs sm:text-sm">{label}</p>
        {sublabel && (
          <p className="text-zinc-600 text-[10px] sm:text-xs mt-0.5">
            {sublabel}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Horizontal bar with label
function HorizontalMetric({ label, value, maxValue, index }) {
  const percentage = (value / maxValue) * 100;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-2 gap-2">
        <span className="text-zinc-400 text-xs sm:text-sm truncate">
          {label}
        </span>
        <span className="text-zinc-500 text-xs sm:text-sm tabular-nums shrink-0">
          {value.toLocaleString()}
        </span>
      </div>
      <div className="relative h-1.5 bg-zinc-900 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-zinc-700 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 bg-zinc-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </motion.div>
  );
}

// Timeline marker
function TimelineEvent({ year, title, value, isLast }) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-800" />
        {!isLast && <div className="w-px flex-1 bg-zinc-900 my-1" />}
      </div>
      <div className="pb-6">
        <span className="text-zinc-600 text-[10px] sm:text-xs tabular-nums">
          {year}
        </span>
        <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">{title}</p>
        <p className="text-zinc-500 text-[10px] sm:text-xs mt-0.5">{value}</p>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const chartData = [
    { year: "2024", participants: 2800, engagement: 2400 },
    { year: "2025", participants: 3500, engagement: 3000 },
  ];

  const radarData = [
    { label: "Tech", value: 92 },
    { label: "Design", value: 78 },
    { label: "Business", value: 65 },
    { label: "Research", value: 85 },
    { label: "Community", value: 95 },
  ];

  const timelineEvents = [
    {
      year: "2024",
      title: "The Spark",
      value:
        "The first Neutron lit up the campus with raw energy, packed crowds, and nonstop music till midnight.",
    },
    {
      year: "2025",
      title: "The Explosion",
      value:
        "Bigger stages, louder sets, national artists, and double the crowd — Neutron became the fest everyone talked about.",
    },
    {
      year: "2026",
      title: "The Phenomenon",
      value:
        "Massive production, immersive installations, and record-breaking footfall.",
    },
  ];

  return (
    <section
      id="analytics"
      className="relative w-screen min-h-screen bg-[#0a0a0a] py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <NoiseOverlay />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-zinc-600 text-xs uppercase tracking-[0.2em]">
                Analytics
              </span>
              <LiveIndicator />
            </motion.div>

            <AnimatedText
              className="text-zinc-100 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
              highlightColor="linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #71717a 100%)"
            >
              Our Impact
            </AnimatedText>
          </div>

          <p className="text-zinc-500 text-sm max-w-full md:max-w-sm md:text-right leading-relaxed">
            Real-time metrics tracking our community growth and engagement
            across all platforms.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Hero Stats - Row 1 */}
          <HeroStat
            value={3500}
            suffix="+"
            label="Total Participants"
            trend="up"
            trendValue="+23%"
            sparkData={[500, 1200, 2100, 3500, 5200, 7000]}
            accent="#d4d4d8"
          />
          <HeroStat
            value={50}
            suffix="+"
            label="Events Organized"
            trend="up"
            trendValue="+12"
            sparkData={[8, 15, 24, 35, 42, 50]}
            accent="#a1a1aa"
          />
          <HeroStat
            value={60}
            suffix="+"
            label="Partners & Sponsors"
            sparkData={[20, 35, 52, 70, 85, 100]}
            trendValue="+10"
            trend="up"
            accent="#71717a"
          />
          <HeroStat
            value={1000000}
            suffix="+"
            label="People Reached"
            trend="up"
            trendValue="+5"
            sparkData={[3, 7, 12, 16, 20, 25]}
            accent="#52525b"
          />

          {/* Main Chart - Row 2 */}
          <motion.div
            className="lg:col-span-3 bg-zinc-950/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-900/80 min-h-[350px] sm:min-h-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AdvancedChart data={chartData} />
          </motion.div>

          {/* Timeline - Row 2 */}
          <motion.div
            className="bg-zinc-950/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-900/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.15em] mb-4 sm:mb-6">
              Milestones
            </h3>
            <div className="space-y-0">
              {timelineEvents.map((event, i) => (
                <TimelineEvent
                  key={i}
                  {...event}
                  isLast={i === timelineEvents.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Radar Chart - Row 3 */}
          <motion.div
            className="lg:col-span-2 bg-zinc-950/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-900/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 w-full">
                <h3 className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.15em] mb-2">
                  Expertise Distribution
                </h3>
                <p className="text-zinc-600 text-[10px] sm:text-xs mb-4 sm:mb-6">
                  Community skill coverage across domains
                </p>
                <RadarChart data={radarData} />
              </div>
            </div>
          </motion.div>

          {/* Progress Rings - Row 3 */}
          <motion.div
            className="lg:col-span-2 bg-zinc-950/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-900/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.15em] mb-6 sm:mb-8">
              Performance Indicators
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-around gap-6 sm:gap-4">
              <ProgressRing
                value={92}
                label="Satisfaction"
                sublabel="4.6/5 rating"
              />
              <ProgressRing
                value={87}
                label="Retention"
                sublabel="YoY return"
              />
              <ProgressRing value={95} label="Growth" sublabel="vs target" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
