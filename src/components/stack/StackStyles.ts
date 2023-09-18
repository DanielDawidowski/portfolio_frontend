import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StackStyles = styled(motion.div)`
  margin-top: -70px;

  .stack {
    &__top {
      display: flex;
      justify-content: space-between;

      &--content {
        height: 70px;
        width: 100%;
        background-color: ${(props) => props.theme.purple_light};
        display: flex;
        padding: ${(props) => props.theme.size1};
        justify-content: space-between;
        align-items: center;

        &.media {
          display: none;
          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: flex;
            width: 50%;
          }
        }
      }
    }
    &__bottom {
      background-color: ${(props) => props.theme.purple_light};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        display: none;
      }
      .container {
        padding: ${(props) => props.theme.size1};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
      }
    }
  }
`;

export const Triangle = styled(motion.div)<{
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
}>`
  border-style: solid;
  border-color: transparent transparent ${(props) => props.theme.purple_light} transparent;
  ${(props) =>
    props.topLeft &&
    css`
      border-width: 0 0 70px 50px;
      transform: rotate(0deg);
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        border-width: 0 0 70px 70px;
      }
    `}
  ${(props) =>
    props.topRight &&
    css`
      border-width: 0 50px 70px 0;
      transform: rotate(360deg);
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        border-width: 0 70px 70px 0;
      }
    `}
  ${(props) =>
    props.bottomLeft &&
    css`
      border-width: 0 50px 70px 0;
      transform: rotate(180deg);
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        border-width: 0 70px 70px 0;
      }
    `}
  ${(props) =>
    props.bottomRight &&
    css`
      border-width: 0 0 70px 50px;
      transform: rotate(180deg);
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        border-width: 0 0 70px 70px;
      }
    `}
`;
