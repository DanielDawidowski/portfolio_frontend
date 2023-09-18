import { ReactElement } from "react";
import type { FC } from "react";

const AboutContent: FC = (): ReactElement => {
  return (
    <p className="about__content">
      I<span className="white-color black-border">’</span>m a{" "}
      <span className="white-color black-border">versatile professional</span> who blends the worlds of development and
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
    </p>
  );
};

export default AboutContent;
