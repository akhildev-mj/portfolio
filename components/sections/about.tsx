"use client";

import { ABOUT_SNIPPETS, STATS } from "@/constants/data";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animations";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Desktop typing animation
  useEffect(() => {
    if (!isInView) return;

    // Only run typing animation on desktop
    if (window.innerWidth >= 1024) {
      if (currentLine < ABOUT_SNIPPETS.length) {
        const currentSnippet = ABOUT_SNIPPETS[currentLine];

        if (charIndex < currentSnippet.length) {
          const timer = setTimeout(() => {
            setDisplayText(currentSnippet.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, 30);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setCurrentLine(currentLine + 1);
            setCharIndex(0);
            setDisplayText("");
          }, 200);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [currentLine, charIndex, isInView]);

  return (
    <section id="about" ref={ref} className="py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging data and AI to solve complex problems
            and create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Markdown-style About */}
          <motion.div
            {...fadeInLeft}
            animate={isInView ? fadeInLeft.animate : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 md:p-6 font-mono">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">README.md</span>
              </div>

              <div className="space-y-1 text-sm max-h-96 overflow-hidden">
                {/* Mobile: Show all content statically */}
                <div className="lg:hidden">
                  {ABOUT_SNIPPETS.map((line, index) => (
                    <div key={index} className="text-gray-300">
                      {line.startsWith("#") ? (
                        <span className="text-cyan-400 font-bold">{line}</span>
                      ) : line.startsWith("-") ? (
                        <span className="text-emerald-400">{line}</span>
                      ) : line.startsWith("##") ? (
                        <span className="text-purple-400 font-semibold">
                          {line}
                        </span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Desktop: Typing animation */}
                <div className="hidden lg:block">
                  {ABOUT_SNIPPETS.slice(0, currentLine).map((line, index) => (
                    <div key={index} className="text-gray-300">
                      {line.startsWith("#") ? (
                        <span className="text-cyan-400 font-bold">{line}</span>
                      ) : line.startsWith("-") ? (
                        <span className="text-emerald-400">{line}</span>
                      ) : line.startsWith("##") ? (
                        <span className="text-purple-400 font-semibold">
                          {line}
                        </span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}

                  {currentLine < ABOUT_SNIPPETS.length && (
                    <div className="text-gray-300">
                      {ABOUT_SNIPPETS[currentLine].startsWith("#") ? (
                        <span className="text-cyan-400 font-bold">
                          {displayText}
                        </span>
                      ) : ABOUT_SNIPPETS[currentLine].startsWith("-") ? (
                        <span className="text-emerald-400">{displayText}</span>
                      ) : ABOUT_SNIPPETS[currentLine].startsWith("##") ? (
                        <span className="text-purple-400 font-semibold">
                          {displayText}
                        </span>
                      ) : (
                        <span>{displayText}</span>
                      )}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="text-white"
                      >
                        |
                      </motion.span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Integrated directly */}
          <motion.div
            {...fadeInRight}
            animate={isInView ? fadeInRight.animate : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-3 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
