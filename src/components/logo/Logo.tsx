import { useState } from "react";
import AnimatedLetters from "../animated-letters/AnimatedLetters";
import { LogoStyles } from "./LogoStyles";
import { AnimatePresence, motion } from "framer-motion";

const Logo = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <LogoStyles
      className="black-border"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={{ width: 0 }}
      whileHover={{ width: "30%", transition: { duration: 0.1 } }}
    >
      <AnimatePresence>
        <motion.div key="word-1">
          <AnimatedLetters word={"Dan"} />
          {isHovered ? <AnimatedLetters word={"iel"} /> : ""}
        </motion.div>
        <motion.div key="word-2">
          <AnimatedLetters word={"Daw"} />
          {isHovered ? <AnimatedLetters word={"idowski"} /> : ""}
        </motion.div>
      </AnimatePresence>
    </LogoStyles>
  );
};

export default Logo;
