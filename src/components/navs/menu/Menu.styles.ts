import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuStyles = styled(motion.nav)`
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  li {
    margin-right: ${(props) => props.theme.size3};
    cursor: pointer;
  }
`;
