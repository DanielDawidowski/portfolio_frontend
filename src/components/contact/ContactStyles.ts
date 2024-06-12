import styled from "styled-components";
import { motion } from "framer-motion";
import ContactBG from "../../assets/Images/contact/contact-bg.png";
import { InputField } from "../input/InputStyles";

export const ContactStyles = styled(motion.div)`
  background: url(${ContactBG}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  .contact {
    &__body {
      padding: ${(props) => props.theme.size6} ${(props) => props.theme.size1};
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      @media (min-width: ${(props) => props.theme.breakpoint_xsmall}) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
      }
      &--form {
        position: relative;
        display: flex;
        background-color: ${(props) => props.theme.purple_light};
        border-radius: 18px;
        padding: ${(props) => props.theme.size4} 0;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          padding: ${(props) => props.theme.size4} ${(props) => props.theme.size2};
        }
        &__item {
          display: flex;
          justify-content: space-between;
          align-items: center;

          ${InputField} {
            width: 100%;
          }
          textarea {
            width: 100%;
          }

          &--icon {
            padding-right: ${(props) => props.theme.size1};
            svg {
              width: 30px;
              height: 30px;
            }
          }

          &:nth-child(3) {
            align-items: flex-start;
          }
        }
        &__image {
          display: none;
          @media (min-width: ${(props) => props.theme.breakpoint_small}) {
            display: block;
            position: absolute;
            background: ${(props) => props.theme.white};
            margin: ${(props) => props.theme.size1};
            border-radius: 18px;
            top: 45%;
            left: -10%;
          }
          img {
            width: 80px;
          }
        }
      }
      &--image {
        margin-top: 50px;
        @media (min-width: ${(props) => props.theme.breakpoint_xsmall}) {
          max-width: 400px;
        }
      }
    }
  }
`;
