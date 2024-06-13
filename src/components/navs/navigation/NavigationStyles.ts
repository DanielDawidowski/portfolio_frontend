import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: ${(props) => props.theme.purple_dark};
  z-index: 999;
`;

export const NavWrapper = styled.nav`
  margin: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li:first-child {
      margin-right: ${(props) => props.theme.size1};
    }
  }
`;

export const NavLogo = styled.div`
  display: flex;
  h2 {
    margin-left: ${(props) => props.theme.size1};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const NavBody = styled.div`
  display: grid;
  width: 100%;

  li {
    margin: 8px 16px;
    h3 {
      padding-left: ${(props) => props.theme.size4};
      padding: ${(props) => props.theme.size1};
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
  }
`;
