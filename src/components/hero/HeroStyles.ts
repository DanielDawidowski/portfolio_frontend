import styled from "styled-components";
import { motion } from "framer-motion";
import NavBGLarge from "../../assets/Images/hero/hero-bg-large.png";
import NavBGSmall from "../../assets/Images/hero/hero-bg-small.png";

export const HeroStyles = styled(motion.div)`
  padding: ${(props) => props.theme.size1};
  width: 100%;
  height: 100vh;
  background: url(${NavBGSmall}) no-repeat;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    background: url(${NavBGLarge}) no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .hero {
    position: relative;
    width: 100%;
    height: 100%;
    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      width: 100%;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        justify-content: flex-start;
        align-items: center;
        height: 80vh;
      }
      h1 {
        text-align: center;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          text-align: inherit;
        }
      }
    }
    &__social {
      display: grid;
      grid-gap: ${(props) => props.theme.size4};
      position: absolute;
      bottom: 20%;
      left: 2%;
    }
  }
`;
