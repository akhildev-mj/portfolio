"use client";

import { Input } from "@/components/ui/input";
import { NAV_ITEMS } from "@/constants/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";

export default function Navbar() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = NAV_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isCommandOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCommandOpen]);

  const handleNavigation = (href: string) => {
    setIsCommandOpen(false);
    setSearchQuery("");

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
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
                >
                  <Image src="/favicon.ico" alt="A" fill />
                </motion.div>
              </div>
              <div>
                <a href="#home">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Akhildev MJ
                  </span>
                  <div className="text-xs text-gray-400">
                    Data Scientist & AI Engineer
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Command Search Bar */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsCommandOpen(true)}
              className="hidden md:flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-gray-300 hover:bg-white/10 transition-all duration-300 min-w-[300px]"
            >
              <IoSearch className="w-4 h-4" />
              <span className="flex-1 text-left">Search or jump to...</span>
              <div className="flex items-center space-x-1">
                <kbd className="px-2 py-1 text-xs bg-white/10 rounded border border-white/20 flex items-center justify-center min-w-[24px] h-[24px]">
                  <MdKeyboardCommandKey className="w-3 h-3" />
                </kbd>
                <kbd className="px-2 py-1 text-xs bg-white/10 rounded border border-white/20 flex items-center justify-center min-w-[24px] h-[24px]">
                  K
                </kbd>
              </div>
            </motion.button>

            {/* Mobile Search Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCommandOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <IoSearch className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Command Palette */}
      <AnimatePresence>
        {isCommandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCommandOpen(false)}
          >
            <div className="flex items-start justify-center pt-[10vh] px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center space-x-3 p-4 border-b border-white/10">
                  <IoSearch className="w-5 h-5 text-gray-400" />
                  <Input
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 text-lg"
                  />
                  <button
                    onClick={() => setIsCommandOpen(false)}
                    className="p-1 hover:bg-white/10 rounded"
                  >
                    <IoClose className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    <div className="p-2">
                      {filteredItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleNavigation(item.href)}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors text-left group"
                        >
                          <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors">
                            <item.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium">
                              {item.name}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {item.description}
                            </div>
                          </div>
                          <div className="text-gray-500 text-xs">↵</div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-400">
                      <IoSearch className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>No results found</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-white/10 bg-white/5">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                          ↵
                        </kbd>
                        <span>to select</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                          esc
                        </kbd>
                        <span>to close</span>
                      </span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <MdKeyboardCommandKey className="w-3 h-3" />
                      <span>Command Palette</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
