"use client";

import { Button } from "@/components/ui/button";
import type { Certification } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface CertificationCardProps {
  certification: Certification;
  index: number;
  isInView: boolean;
  compact?: boolean;
}

export default function CertificationCard({
  certification,
  index,
  isInView,
  compact = false,
}: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 transition-all duration-300 transform-gpu max-w-sm mx-auto flex flex-col ${
        compact ? "w-80" : ""
      } hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/10`}
    >
      {/* Certificate Header with padding for star badge */}
      <div className={"flex items-start mb-3 relative z-10"}>
        <div className={`mr-3 flex-shrink-0`}>
          <motion.div>
            <Image
              src={certification.image || "/placeholder.svg"}
              alt={certification.issuer}
              width={110}
              height={110}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="flex flex-col flex-1 min-w-0 justify-center gap-y-2">
          <h4
            className={`font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 ${
              compact ? "text-base" : "text-md"
            }`}
          >
            {certification.title}
          </h4>
          <p className="font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {certification.issuer}
            </span>
          </p>
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="w-fit px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/25 transition-colors duration-200"
          >
            {certification.category}
          </motion.span>
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-gray-300 line-clamp-2 ${
          compact ? "text-sm" : "text-sm"
        }`}
      >
        {certification.description}
      </p>

      {/* Skills - Just below description */}
      <div className="flex flex-wrap gap-1 mb-3">
        {certification.skills.slice(0, compact ? 2 : 3).map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.02 }}
            className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
        {certification.skills.length > (compact ? 2 : 3) && (
          <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
            +{certification.skills.length - (compact ? 2 : 3)}
          </span>
        )}
      </div>

      {/* Spacer to push footer to bottom */}
      <div className="flex-1"></div>

      {/* Footer - Always at bottom */}
      <div className="border-t border-white/10 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-purple-300 font-normal">
            <FaCalendarAlt className="w-4 h-4 mr-1" />
            {certification.date.split(" ")[0].slice(0, 3) +
              " " +
              certification.date.split(" ")[1]}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="sm"
              variant="ghost"
              className="p-2 text-lime-400 hover:text-green-600 transition-colors duration-200"
              onClick={() =>
                window.open(certification.verifyUrl || "#", "_blank")
              }
            >
              <MdVerified className="w-4 h-4" />
              <span className="bg-gradient-to-r from-lime-400 to-green-600 hover:from-green-600 hover:to-lime-400 bg-clip-text text-transparent transition-colors duration-200">
                Verify
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
