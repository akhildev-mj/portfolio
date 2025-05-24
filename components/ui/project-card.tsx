"use client";

import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiPlay } from "react-icons/hi";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  compact?: boolean;
}

export default function ProjectCard({
  project,
  index,
  isInView,
  compact = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 flex flex-col max-w-sm mx-auto ${
        compact ? "w-80 h-96" : "h-[480px]"
      } hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${compact ? "h-32" : "h-48"}`}>
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="h-full relative"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        {/* Overlay Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="flex space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub className="w-4 h-4 mr-2" />
                Code
              </Button>
            </motion.div>

            {project.live && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  <HiExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            <project.icon className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Project Content - Flex Layout */}
      <div className="p-4 flex-1 flex flex-col">
        <h3
          className={`font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-gray-300 mb-3 leading-relaxed line-clamp-2 ${
            compact ? "text-sm" : "text-sm"
          }`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.02 }}
              className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20 hover:bg-white/15 transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > (compact ? 3 : 4) && (
            <span className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20">
              +{project.technologies.length - (compact ? 3 : 4)}
            </span>
          )}
        </div>

        {/* Action Buttons - Always at bottom */}
        {!compact && (
          <div className="flex space-x-2 mt-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent border-white/20 text-gray-300 hover:bg-white/10 text-xs"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub className="w-3 h-3 mr-1" />
                Source
              </Button>
            </motion.div>

            {project.live && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-xs"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  <HiPlay className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
