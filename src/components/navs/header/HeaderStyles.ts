import { MenuStyles } from "./../menu/Menu.styles";
import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)<{ bgColor: string }>`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${(props) => props.bgColor};

  ${MenuStyles} {
    display: none;

    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    li {
      margin-right: ${(props) => props.theme.size3};
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const HeaderNav = styled.nav`
  margin: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 30%;
  }
  h3 {
    margin-left: ${(props) => props.theme.size1};
    letter-spacing: 0.5px;
  }
`;
