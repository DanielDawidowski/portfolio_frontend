import styled from "styled-components";
import { motion } from "framer-motion";

export const ScrollbarStyles = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  height: 10%;
  width: 2px;
  background-color: ${(props) => props.theme.white};
  z-index: 1000;
  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
`;

export const DotStyles = styled(motion.div).attrs<{ top?: number }>((props) => ({
  top: props.top
}))`
  top: ${(props) => props.top}%;
  position: absolute;
  left: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  border: 1px solid ${(props) => props.theme.turquoise_dark};
  background-color: ${(props) => props.theme.white};
  z-index: 1000;
`;
