import styled from "styled-components";
import { motion } from "framer-motion";
import ContactBG from "../../assets/Images/contact/contact-bg.png";

export const ContactStyles = styled(motion.div)`
  background: url(${ContactBG}) no-repeat;
  background-size: cover;
  background-position: center;
  .contact {
    &__title {
    }
    .line {
      height: 50px;
      width: 100%;
      &:nth-child(1) {
        background-color: ${(props) => props.theme.purple_light};
      }
      &:nth-child(2) {
        background-color: ${(props) => props.theme.turquoise_dark};
        display: grid;
        place-items: center;
        h3 {
          letter-spacing: 2px;
        }
      }
      &:nth-child(3) {
        background-color: ${(props) => props.theme.white};
      }
    }
    &__body {
      padding: ${(props) => props.theme.size1};
      margin: 50px 8px 0 40px;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &--form {
        position: relative;
        display: flex;
        background-color: ${(props) => props.theme.purple_light};
        border-radius: 18px;
        padding: ${(props) => props.theme.size4} 0;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          padding: ${(props) => props.theme.size4} ${(props) => props.theme.size6};
          input {
            width: 300px;
          }
          textarea {
            width: 300px;
          }
        }
        &__item {
          display: flex;
          justify-content: center;
          align-items: center;
          &--icon {
            padding-left: ${(props) => props.theme.size1};
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
          position: absolute;
          background: ${(props) => props.theme.white};
          border-radius: 18px;
          top: 50%;
          left: -10%;
          img {
            width: 80px;
          }
        }
      }
      &--image {
        margin-top: 50px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  button {
    margin-left: 60px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin-left: 20px;
    }
  }
`;
