"use client";

import { Button } from "@/components/ui/button";
import { CERTIFICATIONS, CERTIFICATION_CATEGORIES } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { HiCheckCircle, HiExternalLink } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const filteredCertifications =
    activeCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((cert) => cert.category === activeCategory);

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
          <Link href="/#certifications">
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
              All Certifications
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Professional certifications that validate my expertise across data
            science, AI, cloud technologies, and software development.
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
            {CERTIFICATION_CATEGORIES.map((category) => (
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 transition-all duration-500 transform-gpu"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCert === cert.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
              />

              {/* Border Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCert === cert.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 rounded-2xl blur-sm -z-10"
              />

              {/* 3D Transform Effect */}
              <motion.div
                animate={{
                  rotateY: hoveredCert === cert.id ? 5 : 0,
                  rotateX: hoveredCert === cert.id ? 5 : 0,
                  scale: hoveredCert === cert.id ? 1.02 : 1,
                  y: hoveredCert === cert.id ? -10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Certificate Header */}
                <div className="flex items-start mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <motion.div
                      animate={{
                        scale: hoveredCert === cert.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.issuer}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredCert === cert.id ? 1 : 0,
                        scale: hoveredCert === cert.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <div className="flex items-center mt-1">
                      <HiCheckCircle className="w-3 h-3 text-green-400 mr-1" />
                      <span className="text-xs text-green-400">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {cert.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center text-sm text-gray-400">
                    <FaCalendarAlt className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-2"
                  >
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Credential ID */}
                <div className="mt-2 text-xs text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>
              </motion.div>
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
              Certification Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {CERTIFICATIONS.length}
                </div>
                <div className="text-gray-400">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {CERTIFICATIONS.length}
                </div>
                <div className="text-gray-400">Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {CERTIFICATION_CATEGORIES.length - 1}
                </div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-400">Verified</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
