import styled from "styled-components";
import { motion } from "framer-motion";
import CrossImg from "assets/images/projects/cross.png";

export const ProjectsStyles = styled(motion.div)`
  background: ${(props) => props.theme.turquoise_light};
  .projects {
    &__title {
      overflow: hidden;
      .line {
        height: 50px;
        width: 100%;
        &:nth-child(1) {
          background-color: ${(props) => props.theme.purple_light};
        }
        &:nth-child(2) {
          background-color: ${(props) => props.theme.turquoise_light};
          display: grid;
          place-items: center;
          h3 {
            letter-spacing: 2px;
          }
        }
        &:nth-child(3) {
          background: url(${CrossImg}) repeat-x center;
          background-position: left center;
          background-color: ${(props) => props.theme.turquoise_dark};
          display: grid;
          place-items: center;
          overflow: hidden;
        }
      }
    }
    &__content {
      padding: 36px 8px 144px 8px;
      background: ${(props) => props.theme.turquoise_light};
      height: 100%;
      overflow: hidden;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        padding: ${(props) => props.theme.size8} 0;
      }
      &--item {
        &__header {
          padding: ${(props) => props.theme.size5} 6px;
          border-top: 1px solid ${(props) => props.theme.turquoise_dark};
          display: flex;
          justify-content: space-between;
          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            padding: ${(props) => props.theme.size6} 6px;
          }

          h2 {
            font-size: ${(props) => props.theme.size5};
            @media (min-width: ${(props) => props.theme.breakpoint_small}) {
              font-size: ${(props) => props.theme.size6};
            }
          }
        }

        &__body {
          height: 100%;
          width: 100%;
          padding: ${(props) => props.theme.size5} 0;

          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          &--social {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: ${(props) => props.theme.size4};
          }

          &--image {
            height: 100%;
            width: 100%;
          }
        }

        &__stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-row-gap: ${(props) => props.theme.size4};
          padding: ${(props) => props.theme.size4};
          width: 100%;

          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          &--item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (min-width: ${(props) => props.theme.breakpoint_small}) {
              display: flex;
              align-items: center;
              width: 50%;
            }
            svg {
              width: 30px;
              height: 30px;
              @media (min-width: ${(props) => props.theme.breakpoint_small}) {
                width: 50px;
                height: 50px;
                margin-right: 10px;
              }
            }
            h3 {
              color: ${(props) => props.theme.black_light};
              margin-left: ${(props) => props.theme.size1};
              @media (min-width: ${(props) => props.theme.breakpoint_small}) {
                font-size: ${(props) => props.theme.size5};
                letter-spacing: 2px;
              }
            }
          }
        }

        &:last-child {
          border-bottom: 1px solid ${(props) => props.theme.turquoise_dark};
        }
      }
    }
  }
`;
