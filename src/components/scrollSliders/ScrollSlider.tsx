import { ReactElement, useRef } from "react";
import type { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollSliderStyles } from "./ScrollSliderStyles";

const ScrollSlider: FC = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const forwardX = useTransform(scrollYProgress, [0, 1], ["100%", "-900%"]);
  return (
    <ScrollSliderStyles>
      <div className="scroll" ref={ref}>
        <div className="scroll__line"></div>
        <div className="scroll__inner">
          <motion.h1 style={{ x: forwardX }} className="black-border">
            Development Design Developer Designer <span className="media"> Development Design Developer </span>
          </motion.h1>
        </div>
        <div className="scroll__line"></div>
      </div>
    </ScrollSliderStyles>
  );
};

export default ScrollSlider;
