import styled from "styled-components";
import { motion } from "framer-motion";

export const InputStyles = styled(motion.div)`
  margin-bottom: ${(props) => props.theme.size1};
  width: 100%;
`;

export const InputField = styled.input`
  display: block;
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size3};
  line-height: 1.5;
  background-color: ${(props) => props.theme.purple_dark};
  background-clip: border-box;
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  border-radius: 18px;
  font-family: Ranchers;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;
