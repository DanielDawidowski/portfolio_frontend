import { FC, ReactElement, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HeaderStyles } from "./HeaderStyles";
import IHamburger from "../hamburger/Hamburger.interface";
import Hamburger from "../hamburger/Hamburger";
import Menu from "../menu/Menu";
import AnimatedLetters from "../../animated-letters/AnimatedLetters";
import { Container } from "../../styles/globalStyles";

const Header: FC<IHamburger> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Calculate the current section based on scroll position
      const newSection = Math.floor(scrollPosition / sectionHeight);

      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    // Add a scroll event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  const headerColors: string[] = ["#85f3ea39", "#4687A1", "#262034", "#B180DD", "#33547A"];

  return (
    <HeaderStyles bgColor={headerColors[currentSection]}>
      <Container>
        <nav className="header">
          <div className="header__logo">
            <h3 className="black-border">
              <AnimatedLetters word="Dan Daw" />
            </h3>
          </div>
          <Menu />
          <div>
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </Container>
    </HeaderStyles>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired
};

export default Header;
