"use client";
import { motion, MotionProps, useReducedMotion, Easing } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  reducedMotionFallback?: MotionProps;
  purpose?: "entrance" | "interaction" | "feedback" | "navigation";
}

// Enhanced motion wrapper that respects user preferences and provides purposeful animations
const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ children, className, reducedMotionFallback, purpose = "entrance", ...motionProps }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    // Define purposeful animation presets
    const animationPresets = {
      entrance: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
      },
      interaction: {
        whileHover: { scale: 1.02, y: -2 },
        whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: ("easeOut" as unknown as Easing) }
      },
      feedback: {
        initial: { scale: 1 },
        animate: { scale: [1, 1.05, 1] },
  transition: { duration: 0.3, ease: ("easeInOut" as unknown as Easing) }
      },
      navigation: {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
  transition: { duration: 0.3, ease: ("easeOut" as unknown as Easing) }
      }
    };

    // Reduced motion alternatives
    const reducedMotionPresets = {
      entrance: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 }
      },
      interaction: {
        whileHover: { opacity: 0.8 },
        transition: { duration: 0.1 }
      },
      feedback: {
        initial: { opacity: 1 },
        animate: { opacity: [1, 0.8, 1] },
        transition: { duration: 0.2 }
      },
      navigation: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 }
      }
    };

    // Use reduced motion alternatives if user prefers reduced motion
    const finalProps = shouldReduceMotion 
      ? { 
          ...reducedMotionPresets[purpose], 
          ...reducedMotionFallback 
        }
      : { 
          ...animationPresets[purpose], 
          ...motionProps 
        };

    return (
      <motion.div
        ref={ref}
        className={className}
        {...finalProps}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;