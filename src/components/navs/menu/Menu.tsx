import { FC, ReactElement } from "react";

const Menu: FC = (): ReactElement => {
  return (
    <>
      <li>
        <h3>About Me</h3>
      </li>
      <li>
        <h3>Projects</h3>
      </li>
      <li>
        <h3>Contact</h3>
      </li>
    </>
  );
};

export default Menu;
