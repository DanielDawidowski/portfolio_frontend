import styled from "styled-components";
import { motion } from "framer-motion";
const NavBGLarge = require("../../assets/Images/hero/hero-bg-large.png");
const NavBGSmall = require("../../assets/Images/hero/hero-bg-small.png");

export const HeroStyles = styled(motion.div)`
  padding: ${(props) => props.theme.size1};
  width: 100%;

  background: url(${NavBGSmall}) no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: ${(props) => props.theme.breakpoint_xsmall}) {
    background: url(${NavBGLarge}) no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .hero {
    position: relative;
    width: 100%;

    &__text {
      width: 100%;
      height: 540px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: ${(props) => props.theme.size8};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        justify-content: flex-start;
        align-items: center;
        height: 100%;
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
