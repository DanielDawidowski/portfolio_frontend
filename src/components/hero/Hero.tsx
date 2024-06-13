import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { HeroSocial, HeroStyles, HeroText, HeroWrapper } from "./HeroStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";
import { Container } from "../styles/globalStyles";
import { container, item } from "./HeroVariants";

const Hero: FC = (): ReactElement => {
  return (
    <HeroStyles>
      <HeroWrapper>
        <Container>
          <HeroText>
            <h1 className="black-border">
              MAKING <br /> GOOD DESIGN <br /> AND CODE
            </h1>
          </HeroText>
        </Container>
        <HeroSocial variants={container} initial="initial" animate="animate">
          <motion.div variants={item}>
            <a href="https://github.com/DanielDawidowski">
              <GithubSVG />
            </a>
          </motion.div>

          <motion.div variants={item}>
            <a href="https://www.linkedin.com/in/daniel-dawidowski-924905165">
              <LinkedinSVG />
            </a>
          </motion.div>
        </HeroSocial>
      </HeroWrapper>
    </HeroStyles>
  );
};

export default Hero;
