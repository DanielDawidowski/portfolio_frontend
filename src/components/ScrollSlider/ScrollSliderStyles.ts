import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const scrollLeft = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: -100% -100%;
    /* rotate: 360deg; */
  }
`;

export const ScrollSliderStyles = styled(motion.div)`
  overflow: hidden;
  .scroll {
    &__line {
      &::before {
        content: "";
        height: 10px;
        display: block;
        background-image: linear-gradient(to right, #f6f1f0 0%, #f6f1f0 50%, #9a30a7 50%, #9a30a7 100%);
        background-size: 20% auto;
        animation: ${scrollLeft} 5s linear infinite;
        transform: skew(-20deg, 0deg);
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          background-size: 10% auto;
        }
      }
    }
    &__inner {
      width: 1500px;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${(props) => props.theme.purple_light};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        width: 100%;
      }
      h1 {
        word-spacing: 100px;
        font-size: ${(props) => props.theme.size6};
      }
    }
  }
`;
