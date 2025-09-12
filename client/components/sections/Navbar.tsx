"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/projects", label: "Case Studies" },
];

function ThemeToggle({ theme, setTheme }: any) {
  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Theme"
      whileTap={{ rotate: 180, scale: 0.8 }}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </motion.button>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => setMounted(true), []);

  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 dark:text-gray-100"
          >
          Orlando Ascanio<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  activeSection === link.href.replace("#", "")
                    ? "page"
                    : undefined
                }
                className={`relative transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {link.label}
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 to-indigo-600 transform origin-left scale-x-0 transition-transform duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            <Link
              href="/resume"
              className="px-4 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
            >
            View Resume →
            </Link>

            {mounted && <ThemeToggle theme={theme} setTheme={setTheme} />}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {mounted && <ThemeToggle theme={theme} setTheme={setTheme} />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 dark:text-white" /> : <Menu className="dark:text-white w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 px-4 py-6 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
              >
              View Resume →
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
