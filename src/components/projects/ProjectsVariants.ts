import { Variants } from "framer-motion";

export const stacksVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

export const stackItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: -20 }
};

export const projectsVariants = (x: number, width: string): Variants => {
  return {
    visible: {
      opacity: 1,
      x: 0,
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" }
    },
    hidden: { opacity: 0, x: x, width }
  };
};
