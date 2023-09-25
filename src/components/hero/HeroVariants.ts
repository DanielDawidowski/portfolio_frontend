import { Variants } from "framer-motion";

export const container: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

export const item: Variants = {
  initial: {
    opacity: 0,
    x: -20,
    rotate: 180
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 360,
    transition: {
      duration: 1
    }
  }
};
