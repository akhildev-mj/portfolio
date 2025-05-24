"use client";

import Contact from "@/components/contact";
import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import About from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Dynamic Background */}
      <motion.div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{ y: backgroundY, rotate: backgroundRotate }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{ y: backgroundY, rotate: backgroundRotate }}
        />
      </motion.div>

      <CursorFollower />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
