"use client";
import { FaChess } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";


export default function About() {
  const badgeClass =
    "inline-flex items-center px-4  py-2 border border-blue-500/40 rounded-full font-medium text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-gray-800/40 shadow-sm hover:shadow-md transition-all";

  const skills = {
    Frontend: [
      { name: "JavaScript", emoji: "⚡" },
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "🚀" },
      {name: "Framer Motion", emoji: "🎞️"}
    ],
    Backend: [
      { name: "Python", emoji: "🐍" },
      { name: "Node.js", emoji: "🌐" },
      { name: "MongoDB", emoji: "🍃" },
      {name: "MySQL & PostgreSQL", emoji: "📦"}
    ],
    Tools: [
      { name: "Docker", emoji: "🐳" },
      { name: "Git", emoji: "🔧" },
      {name: "Testing", emoji: "🧪"},
      {name: "CI/CD", emoji: "🤖"},
      {name: "AWS", emoji: "☁️"}
    ],
  };

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title + Easter Egg */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Orlando
          <motion.span
            title="I love chess, strategy fuels my coding."
            whileHover={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 0.6 }}
            className="inline-block cursor-help"
          >
            <FaChess />
          </motion.span>
        </motion.h2>

        <div className="text-center max-w-3xl mx-auto">
          {/* Avatar */}
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg ring-offset-2 focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/pfp.jpg" 
              alt="Orlando Ascanio"
              width={128}
              height={128}
              className="object-cover"
            />
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            className="text-lg italic text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          “I believe in turning complexity into clarity, building tools that empower users and scale with simplicity.”
          </motion.p>

          {/* About Text with contextual depth */}
          <motion.div
            className="space-y-4 text-lg text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p>
              I’m a software engineer, focused on backend &
              full-stack development. I care deeply about clean code,
              reliability, and designing systems that stand the test of scale.
            </p>
            <p>
              Over the last few years, I’ve built{" "}
              <span className="font-medium">
                full-stack apps, APIs, and automation tools
              </span>{" "}
              with JavaScript, Python, and cloud-native stacks. I’m especially
              interested in how technology can{" "}
              <span className="font-medium">
                simplify complexity and empower people
              </span>{" "}
              in their daily lives.
            </p>
            <p>
              I’m currently open to EU-based remote opportunities where I can
              contribute to impactful projects and keep growing as a developer.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.hr
            className="border-t border-gray-300 dark:border-gray-700 my-8 w-2/3 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Skills Grouped */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {Object.entries(skills).map(([group, items], groupIndex) => (
              <motion.div
                key={group}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + groupIndex * 0.1,
                }}
              >
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {group}
                </h3>
                {items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={badgeClass}
                  >
                    <span aria-hidden="true" className="mr-1">
                      {skill.emoji}
                    </span>
                    <span className="sr-only">{skill.name}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {[
              {
                href: "https://orlandoascanio.com/?src=landing&project=main",
                label: "GitHub",
                icon: <Github className="w-6 h-6" />,
                hover: "hover:text-black dark:hover:text-white",
              },
              {
                href: "https://orlandoascanio.com/?src=landing&project=linkedin",
                label: "LinkedIn",
                icon: <Linkedin className="w-6 h-6" />,
                hover: "hover:text-blue-600",
              },
              {
                href: "https://orlandoascanio.com/?src=landing&project=portfoliosite",
                label: "Portfolio",
                icon: <Globe className="w-6 h-6" />,
                hover: "hover:text-indigo-600",
              },
              {
                href: "mailto:operation927@gmail.com",
                label: "Email",
                icon: <Mail className="w-6 h-6" />,
                hover: "hover:text-red-500",
              },
            ].map(({ href, label, icon, hover }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                className={`text-gray-700 dark:text-gray-300 transition-colors ${hover}`}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="space-y-4"
          >
            <Link
              href="mailto:operation927@gmail.com"
              className="block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
            I’m currently open to remote opportunities in Europe, Let’s connect!
            </Link>
            <Link
              href="/projects"
              className="block text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
            Or view my case studies →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
