import { ReactElement } from "react";
import type { FC } from "react";
import { motion, Variants } from "framer-motion";
import { StackStyles, Triangle } from "./StackStyles";
import ReactSVG from "../../assets/SVG/React";
import ReduxSVG from "../../assets/SVG/Redux";
import HTMLSVG from "../../assets/SVG/Html";
import CSSSVG from "../../assets/SVG/Css";
import JSSVG from "../../assets/SVG/Js";
import TSSVG from "../../assets/SVG/Ts";
import NodeSVG from "../../assets/SVG/Node";
import NextSVG from "../../assets/SVG/Next";
import { Container } from "../styles/globalStyles";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Stack: FC = (): ReactElement => {
  return (
    <StackStyles>
      <div className="stack">
        <Container>
          <div className="stack__top">
            <Triangle topLeft />
            <motion.div variants={container} initial="hidden" animate="show" className="stack__top--content">
              <motion.div variants={item}>
                <ReactSVG />
              </motion.div>
              <motion.div variants={item}>
                <ReduxSVG />
              </motion.div>
              <motion.div variants={item}>
                <TSSVG />
              </motion.div>
              <motion.div variants={item}>
                <JSSVG />
              </motion.div>
              <div className="stack__top--content media">
                <motion.div variants={item}>
                  <NodeSVG />
                </motion.div>
                <motion.div variants={item}>
                  <CSSSVG />
                </motion.div>
                <motion.div variants={item}>
                  <HTMLSVG />
                </motion.div>
                <motion.div variants={item}>
                  <NextSVG />
                </motion.div>
              </div>
            </motion.div>
            <Triangle topRight />
          </div>
        </Container>
        <div className="stack__bottom">
          <Container>
            <NodeSVG />
            <CSSSVG />
            <HTMLSVG />
            <NextSVG />
          </Container>
        </div>
      </div>
    </StackStyles>
  );
};

export default Stack;
