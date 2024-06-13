import { FC, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavBody, NavLogo, NavStyles, NavWrapper } from "./NavigationStyles";
import Hamburger from "../hamburger/Hamburger";
import IHamburger from "../hamburger/Hamburger.interface";
import Menu from "../menu/Menu";

const Navigation: FC<IHamburger> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;
  return (
    <AnimatePresence>
      {toggleMenu && (
        <>
          <NavStyles
            initial={{ y: "-100%" }}
            animate={{ y: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
            exit={{ y: "-100%" }}
            className="nav"
          >
            <NavWrapper>
              <NavLogo>
                <h2>Dan Daw</h2>
              </NavLogo>
              <ul>
                <li>
                  <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} close />
                </li>
              </ul>
            </NavWrapper>
            <NavBody>
              <Menu setToggleMenu={setToggleMenu} />
            </NavBody>
          </NavStyles>
        </>
      )}
    </AnimatePresence>
  );
};

Navigation.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired
};

export default Navigation;
