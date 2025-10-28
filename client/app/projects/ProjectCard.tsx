"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Define the Project type based on the project objects in dataProjects.ts
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
  experienceLevel?: 'Junior' | 'Mid' | 'Senior' | 'Expert';
  projectDuration?: string;
  metrics?: {
    linesOfCode?: number;
    performance?: string;
    users?: number;
  };
  learnings?: string[];
};


interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);


const techIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "⏭️",
  "Node.js": "🟩",
  Python: "🐍",
  AWS: "☁️",
  "Socket.io": "🔌",
  "Chess.js": "♟️",
  Flask: "🥤",
};

  return (
    <motion.div
      className=""
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 1000 }}
    >
      {/* Project Thumbnail */}
      {project.image && (
        <div className="w-full aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.tagline} project screenshot`}
            width={800}
            height={450}
            className="object-cover w-full h-full hover:scale-105 transition-transform"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            {project.year && (
              <span className="ml-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Experience Level and Duration */}
        {(project.experienceLevel || project.projectDuration) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.experienceLevel && (
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full border border-purple-200 dark:border-purple-700">
                {project.experienceLevel} Level
              </span>
            )}
            {project.projectDuration && (
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full border border-orange-200 dark:border-orange-700">
                {project.projectDuration}
              </span>
            )}
          </div>
        )}

        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-300 mb-5 text-base">
          {project.tagline}
        </p>
        
        {/* DEBUG: Very obvious indicator */}
        <div className="mb-4 p-3 bg-red-500 text-white font-bold text-center rounded">
          🚨 DEBUG: ProjectCard is working! 🚨
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(showAllTech ? project.stack : project.stack.slice(0, 4)).map(
            (tech, index) => (
              <span
                key={index}
                className="px-3 py-1 flex items-center gap-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-medium rounded-full dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50"
              >
                <span aria-hidden="true">{techIcons[tech] || "💻"}</span>
                <span>{tech}</span>
              </span>
            )
          )}
          {project.stack.length > 4 && !showAllTech && (
            <button
              onClick={() => setShowAllTech(true)}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              +{project.stack.length - 4} more
            </button>
          )}
        </div>

        {/* Problem / Role / Impact */}
        <div className="space-y-4 mb-6">
          <InfoItem label="Problem" color="blue" text={project.problem} />
          <InfoItem label="Role" color="indigo" text={project.role} />
          <InfoItem
            label="Impact"
            color="green"
            text={
              project.impact ||
              (project.impactMetric
                ? `Achieved ${project.impactMetric}`
                : "Impact details not available")
            }
          />
        </div>

        {/* Debug: Always show metrics section for testing */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Project Metrics {project.metrics ? '✅' : '❌'}
          </h4>
          {project.metrics ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {project.metrics.linesOfCode && (
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white">
                    {project.metrics.linesOfCode.toLocaleString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Lines of Code</div>
                </div>
              )}
              {project.metrics.performance && (
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white">
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
          ) : (
            <div className="text-red-500 text-sm">No metrics data found</div>
          )}
        </div>

        {/* Debug: Always show learnings section for testing */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Key Learnings {project.learnings && project.learnings.length > 0 ? '✅' : '❌'}
          </h4>
          {project.learnings && project.learnings.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.learnings.map((learning, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs rounded border border-green-200 dark:border-green-800"
                >
                  {learning}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-red-500 text-sm">No learnings data found</div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Case Study of ${project.title}`}
            className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Case Study
          </Link>
          <Link
            href={project.demoLink}
            target="_blank"
            className="flex-1 text-center px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Live Demo
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-black hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* Small subcomponent for Problem / Role / Impact */

type InfoItemProps = {
  label: string;
  color: "blue" | "indigo" | "green";
  text: string | string[] | undefined;
};

function InfoItem({ label, color, text }: InfoItemProps) {
  const colors: Record<"blue" | "indigo" | "green", string> = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    indigo:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    green:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  };

  return (
    <div className="flex items-start">
      <div
        className={`flex-shrink-0 w-6 h-6 rounded-full ${colors[color]} flex items-center justify-center mr-3 mt-0.5 text-xs font-bold`}
      >
        {label[0]}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          {label}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}
