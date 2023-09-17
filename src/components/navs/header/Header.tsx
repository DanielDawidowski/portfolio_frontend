import { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { HeaderStyles } from "./HeaderStyles";
import IHamburger from "../hamburger/Hamburger.interface";
import Hamburger from "../hamburger/Hamburger";
import Menu from "../menu/Menu";

const Header: FC<IHamburger> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;

  return (
    <HeaderStyles>
      <div className="container">
        <nav className="header">
          <div className="header__logo">
            <h3>Dan Daw</h3>
          </div>
          <ul className="header__menu">
            <Menu />
          </ul>
          <div>
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </HeaderStyles>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired
};

export default Header;
