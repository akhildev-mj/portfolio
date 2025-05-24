"use client";

import { motion } from "framer-motion";
import { Coffee, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-cyan-400 rounded-lg"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-1 border border-purple-400 rounded"
              />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Akhildev MJ
              </span>
              <div className="text-xs text-gray-400">
                Data Scientist & AI Engineer
              </div>
            </div>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-gray-300 mb-4"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Coffee className="w-4 h-4 text-amber-400" />
            </motion.div>
            <span>by a passionate data scientist</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            <p>
              &copy; {new Date().getFullYear()} Akhildev MJ. All rights
              reserved.
            </p>
          </motion.div>

          {/* Animated background element */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-8 mx-auto max-w-md"
          />
        </motion.div>
      </div>
    </footer>
  );
}
