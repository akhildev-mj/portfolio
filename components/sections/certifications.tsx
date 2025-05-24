"use client";

import { Button } from "@/components/ui/button";
import CertificationCard from "@/components/ui/certification-card";
import { CERTIFICATIONS, CREDLY_PROFILE_URL } from "@/constants/data";
import { buttonHover, fadeInUp, staggerContainer } from "@/utils/animations";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                <Award className="w-5 h-5 mr-2" />
                <span>View All Certifications</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>

          <motion.div {...buttonHover}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 px-6 md:px-8 py-3"
            >
              <a
                href={CREDLY_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>View Credly Badges</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
