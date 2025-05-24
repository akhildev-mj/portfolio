"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Brain,
  ExternalLink,
  Github,
  Play,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Predictive Analytics Platform",
    description:
      "Advanced machine learning platform for real-time data analysis, predictive modeling, and automated insights generation with interactive dashboards.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    category: "AI/ML",
    icon: Brain,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Data Pipeline Orchestrator",
    description:
      "Automated ETL pipeline system with real-time monitoring, data quality checks, and scalable processing for large datasets.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: [
      "Apache Airflow",
      "Spark",
      "Kafka",
      "AWS",
      "Python",
      "MongoDB",
    ],
    category: "Data Engineering",
    icon: Brain,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Computer Vision Quality Control System",
    description:
      "Deep learning-based quality control system for manufacturing with real-time defect detection and automated reporting.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "Redis", "Docker"],
    category: "Computer Vision",
    icon: Brain,
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative AI and data science solutions that demonstrate my
            expertise in building intelligent systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 h-[500px] flex flex-col"
            >
              {/* Hover Effect Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredProject === project.id ? 0.1 : 0,
                  scale: hoveredProject === project.id ? 1.2 : 0.8,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl"
              />

              {/* Border Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 rounded-2xl blur-sm -z-10"
              />

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
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>FEATURED</span>
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
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-white/20 text-gray-300 hover:bg-white/10 text-xs"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Source
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 text-xs"
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 group"
            >
              <span>View More Projects</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
