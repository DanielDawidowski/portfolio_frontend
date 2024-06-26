import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterStyles = styled(motion.footer)`
  background-color: ${(props) => props.theme.turquoise_dark};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterWrapper = styled(motion.div)`
  padding: ${(props) => props.theme.size4};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    padding: ${(props) => props.theme.size4} 0;
  }
`;

export const FooterSocial = styled(motion.ul)`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
`;
