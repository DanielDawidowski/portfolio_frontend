import styled from "styled-components";
import { motion } from "framer-motion";

export const TextAreaField = styled(motion.textarea)`
  display: block;
  padding: ${(props) => props.theme.size2} ${(props) => props.theme.size3};
  margin: 0 ${(props) => props.theme.size1};
  line-height: 1.5;
  background-color: ${(props) => props.theme.purple_dark};
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  border-radius: 18px;
  font-family: Ranchers;
  text-transform: uppercase;
  outline: 0;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  resize: none;
`;

export const TextAreaStyles = styled(motion.div)`
  margin-bottom: ${(props) => props.theme.size1};
`;
