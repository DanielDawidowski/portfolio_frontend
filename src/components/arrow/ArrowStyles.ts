import styled from "styled-components";
import { motion } from "framer-motion";

export const ArrowStyles = styled(motion.div)`
  .arrow {
    display: flex;
    flex-direction: column;

    margin-right: 30px;
    &__lines {
      margin-left: 20px;
    }
    &__line {
      background-color: ${(props) => props.theme.purple_dark};
      &:nth-child(1) {
        width: 40px;
        height: 4px;
        margin: 0 0 2px 0;
      }
      &:nth-child(2) {
        width: 40px;
        height: 8px;
        margin: 2px 0 0 0;
      }
      &:nth-child(3) {
        width: 40px;
        height: 40px;
        margin: 2px 0 0 0;
      }
      &:nth-child(4) {
        width: 40px;
        height: 60px;
        margin: 2px 0 0 0;
      }
    }
    &__point {
      border-style: solid;
      border-color: transparent transparent ${(props) => props.theme.purple_dark} transparent;
      border-width: 0 40px 40px 40px;
      width: 0;
    }
  }
`;
