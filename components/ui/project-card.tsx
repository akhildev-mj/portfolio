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
        compact ? "w-80" : "w-full"
      } hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden flex-none ${
          compact ? "h-32" : "h-auto"
        }`}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="w-full overflow-hidden"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={360}
            height={192}
            className="object-cover w-full rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
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
                className="bg-slate-800 hover:bg-slate-900 backdrop-blur-sm border border-white/30 text-cyan-400 hover:text-purple-400 transition-colors duration-200"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub className="w-4 h-4 mr-2" />
                <span className="bg-clip-text text-transparent border-white/20 text-xs bg-gradient-to-r from-cyan-400 to-purple-400">
                  GitHub
                </span>
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

      {/* Project Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-y-4">
          <h3
            className={`font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 ${
              compact ? "text-lg" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-gray-300 leading-relaxed line-clamp-2 ${
              compact ? "text-sm" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.02 }}
                className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors duration-200"
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
        </div>

        {!compact && (
          <div className="flex gap-2 mt-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-start"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-cyan-400 hover:text-purple-400 transition-colors duration-200"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub className="w-3 h-3 mr-1" />
                <span className="bg-clip-text text-transparent border-white/20 text-xs bg-gradient-to-r from-cyan-400 to-purple-400">
                  GitHub
                </span>
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
