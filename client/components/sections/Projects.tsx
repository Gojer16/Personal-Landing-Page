"use client";
import dynamic from "next/dynamic";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

// Lazy-load ProjectCard
const ProjectCard = dynamic(() => import("../../app/projects/ProjectCard"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl" />
  ),
});

export default function Projects() {
  const featuredProjects = Object.values(projects)
    .filter((p) => p.featured)
    .slice(0, 3);
  const totalProjects = Object.values(projects).length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
          CASE STUDIES
          </div>
          <motion.h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          Projects that define my work.
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          Real-world case studies in automation, AI, and full-stack scalability.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              role="listitem"
              aria-label={`Project: ${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all"
            >
              {project.featured && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-md">
                Featured
                </span>
              )}
              <ProjectCard project={project} />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
          View All {totalProjects} Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
          Or{" "}
            <Link
              href="/resume"
              className="underline font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
          download my resume
            </Link>{" "}
          for a quick overview.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
