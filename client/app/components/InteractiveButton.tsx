"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export default function InteractiveButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  disabled = false,
}: InteractiveButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 focus:ring-blue-500",
    ghost: "text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:ring-blue-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}