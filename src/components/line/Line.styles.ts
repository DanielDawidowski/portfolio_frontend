import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import CrossImg from "../../assets/Images/projects/cross.png";

export const LineStyles = styled(motion.div)<{ $section: string }>`
  height: 50px;
  width: 100%;

  &:nth-child(1) {
    background-color: ${(props) => props.theme.purple_light};
  }
  &:nth-child(2) {
    display: grid;
    place-items: center;
    h3 {
      letter-spacing: 2px;
    }
  }

  ${({ $section }) =>
    $section === "Projects"
      ? css`
          &:nth-child(2) {
            background-color: ${(props) => props.theme.turquoise_light};
          }
          &:nth-child(3) {
            background: url(${CrossImg}) repeat-x center;
            background-position: left center;
            background-color: ${(props) => props.theme.turquoise_dark};
            display: grid;
            place-items: center;
            overflow: hidden;
          }
        `
      : null}
  ${({ $section }) =>
    $section === "Contact"
      ? css`
          &:nth-child(2) {
            background-color: ${(props) => props.theme.turquoise_dark};
          }
          &:nth-child(3) {
            background-color: ${(props) => props.theme.white};
          }
        `
      : null}
`;
