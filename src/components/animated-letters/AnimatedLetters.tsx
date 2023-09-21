import { ReactElement } from "react";
import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { AnimatedLettersStyles } from "./AnimatedLettersStyles";
import { letterVariants, wordVariants } from "./AnimatedLettersVariants";

interface IWord {
  word: string;
}

const AnimatedLetters: FC<IWord> = ({ word }): ReactElement => {
  return (
    <AnimatePresence>
      <AnimatedLettersStyles variants={wordVariants} initial="initial" animate="animate">
        {[...word].map((letter: string, i) => (
          <motion.span key={i} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </AnimatedLettersStyles>
    </AnimatePresence>
  );
};

AnimatedLetters.propTypes = {
  word: PropTypes.string.isRequired
};

export default AnimatedLetters;
