import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoStyles = styled(motion.h3)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 100%;
  }
  div {
    display: flex;
  }
`;
