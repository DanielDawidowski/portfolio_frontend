import styled from "styled-components";
import { motion } from "framer-motion";

export const HamburgerMenu = styled(motion.div)`
  padding: ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }

  button {
    border: none;
    background: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span {
      width: 30px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.white};
      border-radius: 15%;
      margin: 2px;
    }
  }
`;

export const CloseMenu = styled.div`
  padding: ${(props) => props.theme.size1};
  transform: rotate(45deg);

  button {
    border: none;
    background: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    position: relative;
    span {
      width: 30px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.purple_light};
      border-radius: 25%;

      &:nth-child(1) {
        transform: rotate(0deg);
        position: absolute;
      }
      &:nth-child(2) {
        transform: rotate(90deg);
        position: absolute;
      }
    }
  }
`;
