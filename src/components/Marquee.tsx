"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Marquee() {
  const t = useTranslations("Marquee");

  const keywordsLine1 = [
    t("line1_1"),
    t("line1_2"),
    t("line1_3"),
    t("line1_4"),
    t("line1_5"),
    t("line1_6"),
  ];

  const keywordsLine2 = [
    t("line2_1"),
    t("line2_2"),
    t("line2_3"),
    t("line2_4"),
    t("line2_5"),
    t("line2_6"),
  ];

  // Duplicate arrays heavily to create a seamless infinite loop for large screens
  const dup1 = [...keywordsLine1, ...keywordsLine1, ...keywordsLine1, ...keywordsLine1, ...keywordsLine1, ...keywordsLine1];
  const dup2 = [...keywordsLine2, ...keywordsLine2, ...keywordsLine2, ...keywordsLine2, ...keywordsLine2, ...keywordsLine2];

  return (
    <section className="bg-navy dark:bg-navy-dark py-6 sm:py-8 overflow-hidden relative flex flex-col gap-4 border-y border-gold/20 transition-colors duration-300">
      {/* Heavy gradient masks for a smooth fade-in/fade-out at the screen edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-navy dark:from-navy-dark to-transparent z-10 pointer-events-none transition-colors duration-300" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-navy dark:from-navy-dark to-transparent z-10 pointer-events-none transition-colors duration-300" />

      {/* Subtle background noise/texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* --- LINE 1: Scrolling Left --- */}
      <motion.div
        className="flex whitespace-nowrap gap-8 sm:gap-16 items-center px-6 relative z-0"
        animate={{ x: [0, -3000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // Slower, premium speed
          ease: "linear",
        }}
      >
        {dup1.map((word, index) => (
          <div key={`l1-${index}`} className="flex items-center gap-8 sm:gap-16">
            <span
              className={`font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-widest ${
                index % 2 === 0 ? "text-gold" : "text-transparent"
              }`}
              style={
                index % 2 !== 0
                  ? { WebkitTextStroke: "1px #D4A537" } // Tailwind gold hex
                  : {}
              }
            >
              {word}
            </span>
            <Sparkles className="text-gold/40 flex-shrink-0" size={24} />
          </div>
        ))}
      </motion.div>

      {/* --- LINE 2: Scrolling Right --- */}
      <motion.div
        className="flex whitespace-nowrap gap-8 sm:gap-16 items-center px-6 relative z-0"
        animate={{ x: [-3000, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 75, // Slightly different speed for parallax effect
          ease: "linear",
        }}
      >
        {dup2.map((word, index) => (
          <div key={`l2-${index}`} className="flex items-center gap-8 sm:gap-16">
            <span
              className={`font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-widest ${
                index % 2 !== 0 ? "text-white/80" : "text-transparent"
              }`}
              style={
                index % 2 === 0
                  ? { WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }
                  : {}
              }
            >
              {word}
            </span>
            <Sparkles className="text-white/20 flex-shrink-0" size={24} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
