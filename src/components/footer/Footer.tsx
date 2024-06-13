import { ReactElement } from "react";
import type { FC } from "react";
import { Variants, motion } from "framer-motion";
import { FooterSocial, FooterStyles, FooterWrapper } from "./FooterStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } }
};

const Footer: FC = (): ReactElement => {
  const [ref, animation] = useScrollAnimation("-50px");

  return (
    <FooterStyles>
      <FooterWrapper
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          },
          hidden: { opacity: 0, y: -22 }
        }}
      >
        <FooterSocial variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>
            <GithubSVG fill="#85F3EA" />
          </motion.li>
          <motion.li variants={item}>
            <LinkedinSVG fill="#85F3EA" />
          </motion.li>
        </FooterSocial>
      </FooterWrapper>
    </FooterStyles>
  );
};

export default Footer;
