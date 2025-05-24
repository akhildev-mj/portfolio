"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";
import { PROJECT_CATEGORIES, PROJECTS } from "@/constants/projects";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12">
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
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mb-12">
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
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={true}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Project Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {PROJECTS.length}
                </div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {PROJECTS.filter((p) => p.live).length}
                </div>
                <div className="text-gray-400">Live Demos</div>
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
