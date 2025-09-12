"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      href: "https://orlandoascanio.com/?src=landing&project=main",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "https://orlandoascanio.com/?src=landing&project=linkedin",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "mailto:operation927@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Motto + Copyright */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {new Date().getFullYear()} Orlando Ascanio. Always learning,
            always building.
          </motion.p>

          {/* Navigation */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
              >
                {label}
              </Link>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {socials.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Signal */}
        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-600">
        Built with Next.js, Tailwind, and ❤️. Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
