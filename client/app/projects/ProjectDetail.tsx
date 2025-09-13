"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "./dataProjects";
import Custom404 from "../not-found";

// Reuse the Project type from ProjectCard
type Project = {
  slug: string;
  title: string;
  tagline: string;
  year?: string | number;
  image?: string;
  stack: string[];
  problem: string;
  role: string;
  impact?: string[];
  impactMetric?: string;
  demoLink: string;
  githubLink: string;
};

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project) return (
  <Custom404 />
)

  // Find index & next project
  const index = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length]; // loop back

  return (
    <article className="relative py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Back to projects */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
          ← Back to all projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {project.tagline}
          </p>
          {project.year && (
            <span className="inline-block mt-4 px-4 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
            {project.year}
            </span>
          )}
        </motion.div>

        {/* Image */}
        {project.image && (
          <motion.div
            className="rounded-xl overflow-hidden shadow-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        )}

        {/* Tech Stack */}
        {project.stack && project.stack.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 shadow-sm"
              >
              {tech}
              </span>
            ))}
          </motion.div>
        )}

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <InfoBlock
            title="Problem"
            text={project.problem}
            color="blue"
            delay={0.2}
          />
          <InfoBlock
            title="Role"
            text={project.role}
            color="indigo"
            delay={0.3}
          />
          <InfoBlock
            title="Impact"
            text={project.impact}
            color="green"
            delay={0.4}
          />
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href={project.demoLink}
            target="_blank"
            className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center"
          >
          🚀 Live Demo
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="px-6 py-3.5 rounded-lg bg-gray-800 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center"
          >
          💻 GitHub
          </Link>
        </motion.div>

        {/* Next Project */}
        {nextProject && (
          <motion.div
            className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4">Up next →</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
            {nextProject.title}
            </Link>
          </motion.div>
        )}
      </div>
    </article>
  );
}

/* InfoBlock subcomponent */

type InfoBlockProps = {
  title: string;
  text: string | string[] | undefined;
  color: "blue" | "indigo" | "green";
  delay: number;
};

function InfoBlock({ title, text, color, delay }: InfoBlockProps) {
  const colorMap: Record<"blue" | "indigo" | "green", string> = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    indigo:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    green:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  };

  return (
    <motion.div
      className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${colorMap[color]} font-bold`}
      >
        {title[0]}
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Handle string OR array */}
      {Array.isArray(text) ? (
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-2">
          {text.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {text}
        </p>
      )}
    </motion.div>
  );
}