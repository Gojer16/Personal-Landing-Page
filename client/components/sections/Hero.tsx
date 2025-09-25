"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { FaChess } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-0 relative overflow-hidden bg-grid-slate-100 dark:bg-grid-slate-800">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Orlando Ascanio
          </span>
          {/* Easter egg on hover */}
          <motion.span
            className="cursor-default"
            whileHover={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.6 }}
          >
            <FaChess className="text-purple-600"/>
          </motion.span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-light mb-4 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        AI Product Engineer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        Turning complex problems into clean, scalable, AI-powered solutions.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-md md:text-lg mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build full-stack apps, secure APIs, and intelligent products that leverage AI to create real-world impact at scale.
        </motion.p>

        {/* Social icons row */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="https://orlandoascanio.com/?src=landing&project=github"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
          </Link>
          <Link
            href="https://orlandoascanio.com/?src=landing&project=linkedin"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="mailto:operation927@gmail.com" aria-label="Email">
            <Mail className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
          </Link>
          <Link
            href="https://orlandoascanio.com/?src=landing&project=portfoliosite"
            target="_blank"
            aria-label="Portfolio"
          >
            <Globe className="w-7 h-7 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
          </Link>
        </motion.div>

        {/* CTA buttons |  Improve responsiveness*/}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-4 mx-auto">
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/resume"
              aria-label="View Resume Online"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg transition-all 
              duration-500 bg-[length:200%_200%] hover:bg-[position:100%_0] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              dark:focus:ring-offset-gray-900 transform hover:-translate-y-1"
            >
            View Resume
            </Link>
          </motion.div>

          {/* 2nd CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="mailto:operation927@gmail.com"
              aria-label="Contact Me"
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 
              dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              dark:focus:ring-offset-gray-900 transform hover:-translate-y-1"
            >
            Contact Me
            </Link>
          </motion.div>

          {/* 3rd CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              href="/CVPersonal.pdf"
              download
              aria-label="Download CV PDF"
              className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transform hover:-translate-y-1"
            >
            Download CV
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-start justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-1"
              animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">
          Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
