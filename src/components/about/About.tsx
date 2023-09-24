import { ReactElement, useRef, useEffect } from "react";
import type { FC } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AboutStyles } from "./AboutStyles";
import { Triangle } from "../stack/StackStyles";
import Image from "../image/Image";
import ProfileImg from "../../assets/images/about/me.png";
import AboutInfoSmall from "../../assets/Images/about/about-info-small.png";
import AboutInfoBig from "../../assets/Images/about/about-info.png";
import Arrow from "../arrow/Arrow";
import AboutContent from "./AboutContent";
import { Container } from "../styles/globalStyles";

const About: FC = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isInView]);

  return (
    <AboutStyles>
      <div id="about" className="about">
        <Container>
          <div className="about__title">
            <Triangle bottomLeft />
            <h3 className="black-border">About Me</h3>
            <Triangle bottomRight />
          </div>
          <AboutContent />
        </Container>
        <div className="about__info--small">
          <div className="about__info--image">
            <Image src={AboutInfoSmall} alt="AboutInfoSmall" />
          </div>
          <div className="about__info--small__profile">
            <div className="about__info--small__profile__inner">
              <Image src={ProfileImg} alt="Profile" />
              <Arrow rotate />
            </div>
          </div>
        </div>

        <div className="about__info--big">
          <Container>
            <motion.div
              className="about__info--big__profile"
              ref={ref}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" }
                },
                hidden: { opacity: 0, y: 72 }
              }}
            >
              <div className="about__info--big__profile__inner">
                <Arrow />
                <Image src={ProfileImg} alt="Profile" />
              </div>
              <Image src={AboutInfoBig} alt="AboutInfoBig" />
            </motion.div>
          </Container>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
