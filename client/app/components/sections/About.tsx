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
    "AI & ML": [
      { name: "LLMs & RAG", emoji: "🤖", years: 2, projects: 5 },
      { name: "Embeddings", emoji: "📚", years: 2, projects: 3 },
      { name: "AI Assistants", emoji: "💡", years: 1, projects: 4 },
    ],
    Frontend: [
      { name: "JavaScript", emoji: "⚡", years: 4, projects: 12 },
      { name: "React", emoji: "⚛️", years: 3, projects: 10 },
      { name: "Next.js", emoji: "🚀", years: 2, projects: 8 },
      { name: "Framer Motion", emoji: "🎞️", years: 2, projects: 6 },
    ],
    "Backend & Cloud": [
      { name: "Node.js", emoji: "🌐", years: 3, projects: 8 },
      { name: "FastAPI & Flask", emoji: "🐍", years: 2, projects: 6 },
      { name: "SQL/NoSQL", emoji: "🗄️", years: 3, projects: 9 },
      { name: "AWS & CI/CD", emoji: "☁️", years: 2, projects: 5 },
    ],
  };

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title + Easter Egg - Purposeful interaction */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          About Me
          <motion.span
            title="I love chess, strategy fuels my coding."
            whileHover={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block cursor-help text-purple-600"
          >
            <FaChess />
          </motion.span>
        </motion.h2>

        <div className="text-center max-w-3xl mx-auto">
          {/* Avatar - Subtle interaction feedback */}
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg ring-offset-2 focus:ring-2 focus:ring-blue-400"
            whileHover={{ 
              scale: 1.03,
              borderColor: "#4F46E5"
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/pfp.jpg" 
              alt="Orlando Ascanio - AI Engineer and Full-Stack Developer"
              width={128}
              height={128}
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="128px"
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
            &quot;I build AI-powered products that turn ideas into tools people actually use, blending full-stack engineering with applied AI.&quot;
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
              I&apos;m an AI Engineer who gets excited about building AI-powered applications,
              scalable systems, and cloud-first solutions that solve real-world problems. What drives me most is seeing my code make a tangible difference in how people work and live.
            </p>
            <p>
              My approach centers on <span className="font-medium">turning ideas into products people love</span> —
              I believe great software should feel intuitive while being built on solid, scalable architecture. I&apos;ve learned that the best solutions often come from understanding the problem deeply before writing a single line of code.
            </p>
            <p>
              Right now, I&apos;m actively seeking EU-based remote opportunities where I can
              contribute to impactful AI projects while continuing to grow alongside talented teams. I thrive in environments where innovation meets practical application.
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
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`${badgeClass} flex-col items-center text-center`}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <span aria-hidden="true">{skill.emoji}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {skill.years} years • {skill.projects} projects
                    </div>
                  </motion.div>
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
                href: "https://orlandoascanio.com/?src=landing&project=github",
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
              I&apos;m currently open to remote opportunities in Europe. Let&apos;s connect!
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