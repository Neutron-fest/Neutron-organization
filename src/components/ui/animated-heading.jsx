"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Split text into lines with highlighted words
function splitTextIntoLines(text, highlightWords = []) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = [];

  words.forEach((word) => {
    currentLine.push(word);
    // Simple heuristic: create new line every 3-5 words for visual balance
    if (currentLine.length >= 4) {
      lines.push(currentLine.join(" "));
      currentLine = [];
    }
  });

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.map((line) => {
    let processedLine = line;
    const highlights = [];

    highlightWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      if (regex.test(processedLine)) {
        highlights.push(word);
      }
    });

    return { text: processedLine, highlights };
  });
}

// Render line with highlighted words
function renderLineWithHighlights(text, highlights) {
  if (highlights.length === 0) {
    return text;
  }

  let result = text;
  const parts = [];
  let lastIndex = 0;

  highlights.forEach((word) => {
    const regex = new RegExp(`(\\b${word}\\b)`, "gi");
    const matches = [...text.matchAll(regex)];

    matches.forEach((match) => {
      if (match.index > lastIndex) {
        parts.push({
          text: text.slice(lastIndex, match.index),
          highlight: false,
        });
      }
      parts.push({ text: match[0], highlight: true });
      lastIndex = match.index + match[0].length;
    });
  });

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }

  if (parts.length === 0) {
    return text;
  }

  return parts.map((part, index) =>
    part.highlight ? (
      <strong key={index} className="font-black">
        {part.text}
      </strong>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

export function AnimatedHeading({
  children,
  className = "",
  highlightWords = [],
  highlightColor = "linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #71717a 100%)",
  as: Component = "h2",
  staggerDelay = 0.15,
  animationDuration = 1.2,
  revealDuration = 0.8,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const text = typeof children === "string" ? children : "";

  // Split text by line breaks if present, otherwise auto-split
  const lines = useMemo(() => {
    if (text.includes("\n")) {
      return text.split("\n").map((line) => ({
        text: line.trim(),
        highlights: highlightWords.filter((word) =>
          new RegExp(`\\b${word}\\b`, "gi").test(line),
        ),
      }));
    }
    return splitTextIntoLines(text, highlightWords);
  }, [text, highlightWords]);

  const lineVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    visible: (i) => ({
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: animationDuration,
        delay: i * staggerDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const revealVariants = {
    hidden: {
      scaleX: 1,
      transformOrigin: "left center",
    },
    visible: (i) => ({
      scaleX: 0,
      transformOrigin: "right center",
      transition: {
        duration: revealDuration,
        delay: i * staggerDelay + animationDuration * 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <Component ref={ref} className={className} aria-label={text}>
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="line relative block"
          style={{ textAlign: "inherit" }}
          custom={index}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
          aria-hidden="true"
        >
          {renderLineWithHighlights(line.text, line.highlights)}
          <motion.div
            className="high-line-reveal absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
            style={{ backgroundImage: highlightColor }}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariants}
          />
        </motion.span>
      ))}
    </Component>
  );
}

// Simple animated heading without line splitting - for single-line headings
export function AnimatedText({
  children,
  className = "",
  highlightColor = "linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #71717a 100%)",
  as: Component = "h2",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Component ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        animate={
          isInView
            ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
        }
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{ backgroundImage: highlightColor }}
        initial={{ scaleX: 1, transformOrigin: "left center" }}
        animate={
          isInView
            ? { scaleX: 0, transformOrigin: "right center" }
            : { scaleX: 1, transformOrigin: "left center" }
        }
        transition={{
          duration: 0.8,
          delay: delay + 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </Component>
  );
}

// Staggered word-by-word animation
export function AnimatedWords({
  children,
  className = "",
  highlightWords = [],
  as: Component = "h2",
  staggerDelay = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <Component ref={ref} className={className}>
      {words.map((word, index) => {
        const isHighlight = highlightWords.some(
          (hw) =>
            hw.toLowerCase() === word.toLowerCase().replace(/[.,!?]/g, ""),
        );
        return (
          <motion.span
            key={index}
            className={`inline-block ${isHighlight ? "font-black" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              delay: index * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </Component>
  );
}

export default AnimatedHeading;
