"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Calendar, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-MLS-2024-001",
    image: "/placeholder.svg?height=80&width=80",
    description: "Advanced machine learning on AWS platform",
    skills: [
      "SageMaker",
      "ML Pipelines",
      "Model Deployment",
      "Data Engineering",
    ],
    featured: true,
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-PDE-2024-002",
    image: "/placeholder.svg?height=80&width=80",
    description: "Data engineering and analytics on GCP",
    skills: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud ML"],
    featured: true,
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-102-2024-003",
    image: "/placeholder.svg?height=80&width=80",
    description: "AI solutions on Microsoft Azure platform",
    skills: [
      "Cognitive Services",
      "Bot Framework",
      "Azure ML",
      "Computer Vision",
    ],
    featured: false,
    verifyUrl: "#",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 relative">
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
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data
            science, AI, and cloud technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                )}

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
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Credential ID */}
                <div className="mt-2 text-xs text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>
              </motion.div>
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
          <Link href="/certifications">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 group"
            >
              <Award className="w-5 h-5 mr-2" />
              <span>View More Certifications</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
