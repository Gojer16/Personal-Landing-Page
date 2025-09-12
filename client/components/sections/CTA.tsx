"use client";
import { motion } from "framer-motion";
import { FileText, Linkedin, Github, Mail } from "lucide-react";

export default function CTA() {
  const ctas = [
    {
      href: "/resume",
      label: "View Resume",
      icon: <FileText className="w-5 h-5 mr-2" />,
      style:
        "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800",
    },
    {
      href: "https://orlandoascanio.com/?src=landing&project=linkedin",
      label: "LinkedIn Profile",
      icon: <Linkedin className="w-5 h-5 mr-2" />,
      style:
        "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600",
    },
    {
      href: "https://orlandoascanio.com/?src=landing&project=main",
      label: "GitHub Profile",
      icon: <Github className="w-5 h-5 mr-2" />,
      style:
        "bg-gradient-to-r from-gray-800 to-black text-white hover:from-black hover:to-gray-900 dark:from-gray-700 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let’s build something impactful together 🚀
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
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
          {ctas.map(({ href, label, icon, style }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${style}`}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Email */}
        <motion.p
        className="flex justify-center items-center gap-2 text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        Prefer email?{" "}
        <a
        href="mailto:operation927@gmail.com"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
        <Mail className="w-5 h-5" /> operation927@gmail.com
        </a>
        </motion.p>

        {/* Trust Signal */}
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        I usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
