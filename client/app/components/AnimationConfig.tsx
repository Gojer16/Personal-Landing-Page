"use client";
import { useReducedMotion } from "framer-motion";

// Animation configuration that respects user preferences and performance
export const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();

  const config = {
    // Entrance animations - simplified for better performance
    entrance: shouldReduceMotion 
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.2 }
        }
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease: "easeOut" }
        },

    // Interaction animations - provide clear feedback
    interaction: shouldReduceMotion
      ? {
          whileHover: { opacity: 0.8 },
          whileTap: { opacity: 0.9 },
          transition: { duration: 0.1 }
        }
      : {
          whileHover: { scale: 1.02, y: -1 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.2, ease: "easeOut" }
        },

    // Stagger animations - for lists and grids
    stagger: shouldReduceMotion
      ? {
          transition: { staggerChildren: 0.05 }
        }
      : {
          transition: { staggerChildren: 0.1 }
        },

    // Viewport settings for better performance
    viewport: {
      once: true,
      margin: "-50px"
    }
  };

  return config;
};

// Predefined animation variants for common use cases
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }
};

// Performance-optimized transition presets
export const transitionPresets = {
  fast: { duration: 0.2, ease: "easeOut" },
  normal: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  spring: { type: "spring", stiffness: 300, damping: 30 }
};