import { cubicBezier, type Variants } from "framer-motion";

export const headerMotion = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { type: "spring", damping: 25 } as const,
};

export const mobileMenuMotion = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

/**
 * Base transition reused across animations
 */
const baseTransition = {
  duration: 0.8,
  // ease: [0.22, 1, 0.36, 1], // easeOutCubic
  ease: cubicBezier(0.22, 1, 0.36, 1),
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0, transition: baseTransition },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0, transition: baseTransition },
};

export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerChildren: Variants = {
  animate: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};
