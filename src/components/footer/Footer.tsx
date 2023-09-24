import { ReactElement, useRef, useEffect } from "react";
import type { FC } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { FooterStyles } from "./FooterStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";

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
  const ref = useRef<HTMLDivElement | null>(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { amount: 0 });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isInView]);

  return (
    <FooterStyles>
      <motion.div
        className="footer"
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
        <motion.ul className="footer__inner" variants={container} initial="hidden" animate="show">
          <motion.li variants={item}>
            <GithubSVG fill="#85F3EA" />
          </motion.li>
          <motion.li variants={item}>
            <LinkedinSVG fill="#85F3EA" />
          </motion.li>
        </motion.ul>
      </motion.div>
    </FooterStyles>
  );
};

export default Footer;
