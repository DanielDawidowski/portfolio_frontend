import { ReactElement } from "react";
import type { FC } from "react";
import {
  SmallProfileQuery,
  AboutSmallQuery,
  AboutStyles,
  AboutTitle,
  SmallProfileInnerQuery,
  AboutBigQuery,
  BigProfileQuery,
  BigProfileInnerQuery
} from "./AboutStyles";
import { Triangle } from "../stack/StackStyles";
import Image from "../image/Image";
import ProfileImg from "../../assets/Images/about/me.png";
import AboutInfoSmall from "../../assets/Images/about/about-info-small.png";
import AboutInfoBig from "../../assets/Images/about/about-info.png";
import Arrow from "../arrow/Arrow";
import AboutContent from "./AboutContent";
import { Container } from "../styles/globalStyles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About: FC = (): ReactElement => {
  const [ref, animation] = useScrollAnimation("-50px");

  return (
    <AboutStyles>
      <div id="about" className="about">
        <Container>
          <AboutTitle>
            <Triangle bottomLeft />
            <h3 className="black-border">About Me</h3>
            <Triangle bottomRight />
          </AboutTitle>
          <AboutContent />
        </Container>
        <AboutSmallQuery>
          <Image src={AboutInfoSmall} alt="AboutInfoSmall" />
          <SmallProfileQuery>
            <SmallProfileInnerQuery>
              <Image src={ProfileImg} alt="Profile" />
              <Arrow rotate />
            </SmallProfileInnerQuery>
          </SmallProfileQuery>
        </AboutSmallQuery>

        <AboutBigQuery>
          <Container>
            <BigProfileQuery
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
              <BigProfileInnerQuery>
                <Arrow />
                <Image src={ProfileImg} alt="Profile" />
              </BigProfileInnerQuery>
              <Image src={AboutInfoBig} alt="AboutInfoBig" />
            </BigProfileQuery>
          </Container>
        </AboutBigQuery>
      </div>
    </AboutStyles>
  );
};

export default About;
