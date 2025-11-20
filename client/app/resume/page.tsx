"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { skills, projects } from './data'

export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Orlando Ascanio
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              AI Engineer | Software Engineer (Full-Stack, AI)
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col items-center gap-2 mb-6 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Remote Opportunities
              </p>
              <a
                href="mailto:operation927@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                operation927@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/gojer16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/orlando-ascanio-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Download Resume */}
            <Link
              href="/Personalresume.pdf"
              target="_blank"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow"
            >
              Download PDF
            </Link>
          </div>

          {/* Experience */}
          <motion.h2
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            My Experience
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Escuela Técnica Industrial Mariano Fernández Fortique • Jan 2025 - April 2025
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                Led design and development of the school’s first digital platform, enabling access to online materials for 400+ students and staff.
              </li>
              <li>
                Designed and deployed React + Node.js architecture with MySQL backend, improving system reliability and load performance by 30%.
              </li>
              <li>
                Implemented JWT-based authentication and access roles for secure user management.
              </li>
              <li>
                Built automated deployment pipelines (GitHub Actions + Docker) for zero-downtime updates.
              </li>
              <li>
                Collaborated with a small dev team under Agile methodology, conducting biweekly code reviews and sprint demos.
              </li>
            </ul>
          </motion.div>

          {/* Projects Preview */}
          <motion.h2
            className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects Preview
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.projectDuration && (
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full">
                        {project.projectDuration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full dark:bg-gray-700 dark:text-gray-400">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Metrics */}
                {project.metrics && (
                  <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">

                      {project.metrics.performance && (
                        <div className="text-center">
                          <div className="font-bold text-gray-900 dark:text-white text-xs">
                            {project.metrics.performance}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">Performance</div>
                        </div>
                      )}
                      {project.metrics.users && (
                        <div className="text-center">
                          <div className="font-bold text-gray-900 dark:text-white">
                            {project.metrics.users}+
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">Users</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Key Learnings */}
                {project.learnings && project.learnings.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Key Learnings
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.learnings.slice(0, 2).map((learning, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs rounded"
                        >
                          {learning}
                        </span>
                      ))}
                      {project.learnings.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                          +{project.learnings.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                >
                  View Case Study <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-medium hover:from-black hover:to-gray-900 transition-all"
            >
              View All My Case Studies →
            </Link>
          </div>
          {/* Education */}
          <motion.h2
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            My Education
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              B.S. Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Instituto Universitario de Tecnología &quot;Antonio Ricaurte&quot; (IUTAR) • 2021 - 2025
            </p>
          </motion.div>

          {/* Skills */}
          <motion.h2
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, list], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}