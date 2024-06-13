import { FC, ReactElement, useState } from "react";
import { motion, Variants } from "framer-motion";
import AnimatedLetters from "../../animated-letters/AnimatedLetters";
import { scrollToElement } from "../../../services/utils/Utils";
import { IMenu, IMenuItem, menuItems } from "./Menu.interface";
import { MenuStyles } from "./Menu.styles";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Menu: FC<IMenu> = ({ setToggleMenu }): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleClick = (name: string) => {
    scrollToElement(name, 1000);
    setToggleMenu!(false);
  };

  return (
    <MenuStyles variants={container} initial="hidden" animate="show">
      {menuItems.map((menuItem: IMenuItem, i: number) => (
        <motion.li
          key={i}
          variants={item}
          onClick={() => handleClick(menuItem.name.toLowerCase())}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <motion.h3
            className="black-border"
            initial={{ letterSpacing: "0.5px", scale: 1 }}
            whileHover={{ letterSpacing: isHovered ? "4px" : "0.5px", transition: { duration: 0.6 }, scale: 1.1 }}
          >
            <AnimatedLetters word={menuItem.name} />
          </motion.h3>
        </motion.li>
      ))}
    </MenuStyles>
  );
};

export default Menu;
