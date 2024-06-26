import { ReactElement } from "react";
import type { FC } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { AboutContentStyles } from "./AboutStyles";

const AboutContent: FC = (): ReactElement => {
  const [ref, animation] = useScrollAnimation("-150px");

  return (
    <AboutContentStyles
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
      I<span className="white-color black-border">’</span>m a{" "}
      <span className="white-color black-border">versatile developer</span> who blends the worlds of development and
      design to craft exceptional digital experiences
      <span className="white-color black-border">.</span> With a keen eye for aesthetics{" "}
      <span className="white-color black-border">and</span> a deep understanding of code
      <span className="white-color black-border">,</span> I create seamless and visually captivating websites and
      applications<span className="white-color black-border">.</span> Constantly evolving
      <span className="white-color black-border">,</span> I stay at the forefront of{" "}
      <span className="white-color black-border">design</span> trends and emerging technologies
      <span className="white-color black-border">,</span> ensuring that my work remains innovative and user-focused
      <span className="white-color black-border">.</span> I<span className="white-color black-border">'</span>m a
      passionate <span className="white-color black-border">creator</span> who turns ideas into elegant
      <span className="white-color black-border">,</span> functional realities
      <span className="white-color black-border">.</span>
    </AboutContentStyles>
  );
};

export default AboutContent;
