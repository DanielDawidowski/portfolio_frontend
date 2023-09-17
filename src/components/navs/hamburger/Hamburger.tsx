import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import IHamburger from "./Hamburger.interface";
import { HamburgerMenu, CloseMenu } from "./HamburgerStyles";

const Hamburger: FC<IHamburger> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu, close = false } = props;
  return (
    <>
      {close ? (
        <CloseMenu>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <span></span>
            <span></span>
          </button>
        </CloseMenu>
      ) : (
        <HamburgerMenu>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </HamburgerMenu>
      )}
    </>
  );
};

Hamburger.propTypes = {
  toggleMenu: PropTypes.bool,
  setToggleMenu: PropTypes.func.isRequired,
  close: PropTypes.bool
};

export default Hamburger;
