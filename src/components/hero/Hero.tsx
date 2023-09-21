import { FC, ReactElement } from "react";
import { motion, Variants } from "framer-motion";
import { HeroStyles } from "./HeroStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";
import { Container } from "../styles/globalStyles";

const container: Variants = {
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

const item: Variants = {
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

const Hero: FC = (): ReactElement => {
  return (
    <HeroStyles>
      <div className="hero">
        <Container>
          <div className="hero__text">
            <h1 className="black-border">
              MAKING <br /> GOOD DESIGN <br /> AND CODE
            </h1>
          </div>
        </Container>
        <motion.div className="hero__social" variants={container} initial="initial" animate="animate">
          <motion.div className="hero__social--item" variants={item}>
            <GithubSVG />
          </motion.div>

          <motion.div className="hero__social--item" variants={item}>
            <LinkedinSVG />
          </motion.div>
        </motion.div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
