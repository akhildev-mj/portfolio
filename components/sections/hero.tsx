"use client";

import { Button } from "@/components/ui/button";
import {
  CODE_RAIN_DROPS,
  CODE_TEMPLATES,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  ROLES,
} from "@/constants/data";
import {
  buttonHover,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/utils/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiDownload,
  HiLightningBolt,
  HiPlay,
  HiSparkles,
} from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateCode = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentTemplate((prev) => (prev + 1) % CODE_TEMPLATES.length);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 lg:px-20 xl:px-32 pt-16"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0"
        />

        {/* Code Rain Effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-sm"
            animate={{
              y: [
                -100,
                typeof window !== "undefined" ? window.innerHeight + 100 : 800,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            {
              CODE_RAIN_DROPS[
                Math.floor(Math.random() * CODE_RAIN_DROPS.length)
              ]
            }
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 lg:pt-0">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile - Main Content */}
          <motion.div {...fadeInUp} className="text-center mb-8">
            {/* Status Badge */}
            <motion.div
              {...fadeInUp}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm text-gray-300">
                Available for opportunities
              </span>
              <HiSparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Akhildev MJ
                </span>
              </h1>

              {/* Animated Role with Gradient */}
              <div className="h-8 flex items-center justify-center">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {ROLES[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-base text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto"
            >
              Transforming data into intelligent solutions. I build AI-powered
              applications that solve real-world problems and create meaningful
              impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <motion.div {...buttonHover}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300"
                >
                  <HiDownload className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>

              <div className="flex items-center space-x-3">
                {[
                  { icon: FaGithub, href: GITHUB_PROFILE_URL, label: "GitHub" },
                  {
                    icon: FaLinkedin,
                    href: LINKEDIN_PROFILE_URL,
                    label: "LinkedIn",
                  },
                  { icon: MdEmail, href: "#contact", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    {...buttonHover}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile - Code Generator */}
          <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs ml-2 truncate">
                    {CODE_TEMPLATES[currentTemplate].language.toLowerCase()}
                  </span>
                </div>
                <motion.div {...buttonHover}>
                  <Button
                    onClick={generateCode}
                    disabled={isGenerating}
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-xs px-3 py-1"
                  >
                    {isGenerating ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <HiLightningBolt className="w-3 h-3" />
                      </motion.div>
                    ) : (
                      <>
                        <HiPlay className="w-3 h-3 mr-1" />
                        Generate
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>

              {/* Code Display */}
              <div className="font-mono text-xs">
                <div className="text-purple-400 mb-2">
                  // {CODE_TEMPLATES[currentTemplate].language} - AI Generated
                </div>
                <motion.div
                  key={currentTemplate}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-300 whitespace-pre-line text-xs leading-relaxed"
                >
                  {CODE_TEMPLATES[currentTemplate].code}
                </motion.div>

                {/* Generating Animation */}
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 flex items-center space-x-2 text-cyan-400"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <span className="text-xs">
                      Generating intelligent code...
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-gray-700/50">
                {[
                  { label: "Lines Generated", value: "10K+" },
                  { label: "AI Models", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-sm font-bold text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Desktop - Left Side */}
          <motion.div {...fadeInLeft} className="text-left">
            {/* Status Badge */}
            <motion.div
              {...fadeInUp}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm text-gray-300">
                Available for opportunities
              </span>
              <HiSparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white mb-4">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Akhildev MJ
                </span>
              </h1>

              {/* Animated Role with Gradient */}
              <div className="h-12 flex items-center">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl xl:text-2xl font-medium bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {ROLES[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              Transforming data into intelligent solutions. I build AI-powered
              applications that solve real-world problems and create meaningful
              impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <motion.div {...buttonHover}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-base font-semibold rounded-full transition-all duration-300"
                >
                  <HiDownload className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>

              <div className="flex items-center space-x-4">
                {[
                  { icon: FaGithub, href: GITHUB_PROFILE_URL, label: "GitHub" },
                  {
                    icon: FaLinkedin,
                    href: LINKEDIN_PROFILE_URL,
                    label: "LinkedIn",
                  },
                  { icon: MdEmail, href: "#contact", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    {...buttonHover}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop - Right Side - Code Generator */}
          <motion.div {...fadeInRight} transition={{ delay: 0.3 }}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    code-generator.
                    {CODE_TEMPLATES[currentTemplate].language.toLowerCase()}
                  </span>
                </div>
                <motion.div {...buttonHover}>
                  <Button
                    onClick={generateCode}
                    disabled={isGenerating}
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-xs"
                  >
                    {isGenerating ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <HiLightningBolt className="w-3 h-3" />
                      </motion.div>
                    ) : (
                      <HiPlay className="w-3 h-3 mr-1" />
                    )}
                    Generate
                  </Button>
                </motion.div>
              </div>

              {/* Code Display */}
              <div className="font-mono text-sm">
                <div className="text-purple-400 mb-2">
                  // {CODE_TEMPLATES[currentTemplate].language} - AI Generated
                </div>
                <motion.div
                  key={currentTemplate}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-300 whitespace-pre-line"
                >
                  {CODE_TEMPLATES[currentTemplate].code}
                </motion.div>

                {/* Generating Animation */}
                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 flex items-center space-x-2 text-cyan-400"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <span className="text-sm">
                      Generating intelligent code...
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-700/50">
                {[
                  { label: "Lines Generated", value: "10K+" },
                  { label: "AI Models", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-bold text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
