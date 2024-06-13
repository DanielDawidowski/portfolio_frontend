import styled from "styled-components";
import { motion } from "framer-motion";

export const TextAreaField = styled(motion.textarea)`
  display: block;
  padding: ${(props) => props.theme.size2} ${(props) => props.theme.size3};
  line-height: 1.5;
  background-color: ${(props) => props.theme.purple_dark};
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  border-radius: 18px;
  font-family: Ranchers;
  outline: 0;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  resize: none;
  width: 100%;
`;

export const TextAreaStyles = styled(motion.div)`
  margin-bottom: ${(props) => props.theme.size1};
  width: 100%;
`;
