import { ReactElement } from "react";
import type { FC } from "react";
import { AboutStyles } from "./AboutStyles";
import { Triangle } from "../stack/StackStyles";
import Image from "../image/Image";
import ProfileImg from "../../assets/images/about/me.png";
import AboutInfoSmall from "../../assets/Images/about/about-info-small.png";
import AboutInfoBig from "../../assets/Images/about/about-info.png";
import Arrow from "../arrow/Arrow";
import AboutContent from "./AboutContent";

const About: FC = (): ReactElement => {
  return (
    <AboutStyles>
      <div className="about">
        <div className="container">
          <div className="about__title">
            <Triangle bottomLeft />
            <h2 className="black-border">About Me</h2>
            <Triangle bottomRight />
          </div>
          <AboutContent />
        </div>
        <div className="container">
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
        </div>

        <div className="about__info--big">
          <div className="container">
            <div className="about__info--big__profile">
              <div className="about__info--big__profile__inner">
                <Arrow />
                <Image src={ProfileImg} alt="Profile" />
              </div>
              <Image src={AboutInfoBig} alt="AboutInfoBig" />
            </div>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
