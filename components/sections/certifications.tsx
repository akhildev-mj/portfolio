"use client";

import { Button } from "@/components/ui/button";
import CertificationCard from "@/components/ui/certification-card";
import { CERTIFICATIONS } from "@/constants/certifications";
import { CREDLY_PROFILE_URL } from "@/constants/data";
import { buttonHover, fadeInUp, staggerContainer } from "@/utils/animations";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { SiCredly } from "react-icons/si";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const certificationsLoop = Array(5)
    .fill(CERTIFICATIONS)
    .flat()
    .map(({ image, title }, index) => ({
      id: index,
      image,
      title,
    }));

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-16 md:py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data
            science, AI, and cloud technologies.
          </p>
        </motion.div>

        {/* Certifications Grid - Simple 3 column layout */}
        <motion.div
          variants={staggerContainer}
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {CERTIFICATIONS.slice(0, 3).map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Infinite Scrolling Carousel (no duplication) */}
        <div className="relative mb-12 overflow-hidden">
          {/* Left Blur */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-slate-900 to-transparent z-10" />

          {/* Right Blur */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-slate-900 to-transparent z-10" />

          {/* Scrolling Content */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: certificationsLoop.length * 10,
              ease: "linear",
            }}
            className="flex gap-4 w-max"
          >
            {certificationsLoop.map((cert) => (
              <div key={cert.id}>
                <Image
                  width={80}
                  height={80}
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-xl object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/certifications">
            <motion.div {...buttonHover}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-6 md:px-8 py-3 group"
              >
                <span>View More</span>
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>

          <motion.div {...buttonHover}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-slate-900 hover:bg-slate-700 text-purple-600 hover:text-slate-100 px-6 md:px-8 py-3"
            >
              <a
                href={CREDLY_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCredly style={{ width: "1.8rem", height: "auto" }} />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
