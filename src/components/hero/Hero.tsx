import { FC, ReactElement } from "react";
import { HeroStyles } from "./HeroStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";

const Hero: FC = (): ReactElement => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__text">
            <h1 className="black-border">
              MAKING <br /> GOOD DESIGN <br /> AND CODE
            </h1>
          </div>
        </div>
        <div className="hero__social">
          <GithubSVG />
          <LinkedinSVG />
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
