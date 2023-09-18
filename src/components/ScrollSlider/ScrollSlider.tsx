import { ReactElement } from "react";
import type { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollSliderStyles } from "./ScrollSliderStyles";

const ScrollSlider: FC = (): ReactElement => {
  const { scrollYProgress } = useScroll();
  const forwardX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  return (
    <ScrollSliderStyles>
      <div className="scroll">
        <div className="scroll__line"></div>
        <div className="scroll__inner">
          <motion.h1 style={{ x: forwardX }} className="black-border">
            Development Design Developer Designer
          </motion.h1>
        </div>
        <div className="scroll__line"></div>
      </div>
    </ScrollSliderStyles>
  );
};

export default ScrollSlider;
