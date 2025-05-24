"use client";

import { motion, useInView } from "framer-motion";
import { Award, Brain, Code, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const aboutSnippets = [
  "# About Akhildev MJ",
  "",
  "## Professional Summary",
  "Passionate Data Scientist and AI Engineer with 5+ years",
  "of experience in building intelligent systems that",
  "transform raw data into actionable insights.",
  "",
  "## Core Expertise",
  "- Machine Learning & Deep Learning",
  "- Data Analysis & Visualization",
  "- Full Stack Development",
  "- Cloud Architecture & Deployment",
  "",
  "## Mission",
  "Bridging the gap between complex data and",
  "practical solutions that drive business value.",
  "",
  "## Current Focus",
  "Building next-generation AI applications that",
  "solve real-world problems and create meaningful",
  "impact through innovative technology solutions.",
];

const stats = [
  { label: "Years Experience", value: "5+", icon: TrendingUp },
  { label: "Projects Completed", value: "25+", icon: Code },
  { label: "Certifications", value: "50+", icon: Award },
  { label: "Technologies", value: "25+", icon: Brain },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (currentLine < aboutSnippets.length) {
      const currentSnippet = aboutSnippets[currentLine];

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
  }, [currentLine, charIndex, isInView]);

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging data and AI to solve complex problems
            and create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Markdown-style About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 font-mono">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">README.md</span>
              </div>

              <div className="space-y-1 text-sm max-h-96 overflow-hidden">
                {aboutSnippets.slice(0, currentLine).map((line, index) => (
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

                {currentLine < aboutSnippets.length && (
                  <div className="text-gray-300">
                    {aboutSnippets[currentLine].startsWith("#") ? (
                      <span className="text-cyan-400 font-bold">
                        {displayText}
                      </span>
                    ) : aboutSnippets[currentLine].startsWith("-") ? (
                      <span className="text-emerald-400">{displayText}</span>
                    ) : aboutSnippets[currentLine].startsWith("##") ? (
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
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
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
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
