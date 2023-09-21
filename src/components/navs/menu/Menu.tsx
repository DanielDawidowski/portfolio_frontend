import { FC, ReactElement } from "react";
import { motion, Variants } from "framer-motion";
import AnimatedLetters from "../../animated-letters/AnimatedLetters";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Menu: FC = (): ReactElement => {
  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="header__menu">
      <motion.li variants={item}>
        <motion.h3 className="black-border">
          <AnimatedLetters word="About" />
        </motion.h3>
      </motion.li>
      <motion.li variants={item}>
        <motion.h3 className="black-border">
          <AnimatedLetters word="Contact" />
        </motion.h3>
      </motion.li>
      <motion.li variants={item}>
        <motion.h3 className="black-border">
          <AnimatedLetters word="Projects" />
        </motion.h3>
      </motion.li>
    </motion.ul>
  );
};

export default Menu;
