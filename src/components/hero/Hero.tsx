import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { HeroStyles } from "./HeroStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";
import { Container } from "../styles/globalStyles";
import { container, item } from "./HeroVariants";

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
            <a href="https://github.com/DanielDawidowski">
              <GithubSVG />
            </a>
          </motion.div>

          <motion.div className="hero__social--item" variants={item}>
            <a href="https://www.linkedin.com/in/daniel-dawidowski-924905165">
              <LinkedinSVG />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
