"use client";

import { Button } from "@/components/ui/button";
import { ALL_PROJECTS, PROJECT_CATEGORIES } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiPlay, HiStar } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/#projects">
            <Button
              variant="ghost"
              className="mb-6 text-gray-400 hover:text-white"
            >
              <IoArrowBack className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A comprehensive showcase of my AI, data science, and full-stack
            development projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                    : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 h-[500px] flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.div
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="h-full relative"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Overlay Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HiExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>

                {/* Featured Badge - Positioned with proper spacing */}
                {project.featured && (
                  <div className="absolute top-2 right-2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-1.5 rounded-full shadow-lg">
                      <HiStar className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <project.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed flex-1 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-white/20 text-gray-300 hover:bg-white/10 text-xs"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-3 h-3 mr-1" />
                      Source
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-xs"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiPlay className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Project Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {ALL_PROJECTS.length}
                </div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {ALL_PROJECTS.filter((p) => p.featured).length}
                </div>
                <div className="text-gray-400">Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {PROJECT_CATEGORIES.length - 1}
                </div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
