import styled from "styled-components";
import { motion } from "framer-motion";
import ContactBG from "../../assets/Images/contact/contact-bg.png";

export const ContactStyles = styled(motion.div)`
  background: url(${ContactBG}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  padding: ${(props) => props.theme.size6} ${(props) => props.theme.size1};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${(props) => props.theme.breakpoint_xsmall}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
`;

export const ContactForm = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.theme.purple_light};
  border-radius: 18px;
  padding: ${(props) => props.theme.size4} ${(props) => props.theme.size1};

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    padding: ${(props) => props.theme.size4} ${(props) => props.theme.size2};
  }
`;

const Message = styled(motion.div)`
  margin: 0 0 8px 0;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.white};
  h3 {
    padding: ${(props) => props.theme.size1};
    letter-spacing: 1px;
  }
`;

export const SuccessMessage = styled(Message)`
  border: 1px solid ${(props) => props.theme.green_light};
  h3 {
    color: ${(props) => props.theme.green_light};
  }
`;

export const ErrorMessage = styled(Message)`
  border: 1px solid ${(props) => props.theme.red};
  h3 {
    color: ${(props) => props.theme.red};
  }
`;

export const ContactFormItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(3) {
    align-items: flex-start;
  }
`;

export const ContactFormIcon = styled(motion.div)`
  padding-right: ${(props) => props.theme.size1};
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ContactFormImage = styled(motion.div)`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: block;
    position: absolute;
    background: ${(props) => props.theme.white};
    margin: ${(props) => props.theme.size1};
    border-radius: 18px;
    top: 55%;
    left: -15%;
  }
  img {
    width: 80px;
  }
`;

export const ContactButton = styled(motion.div)`
  margin-left: ${(props) => props.theme.size5};
`;

export const ContactImage = styled(motion.div)`
  margin-top: 50px;
  @media (min-width: ${(props) => props.theme.breakpoint_xsmall}) {
    max-width: 400px;
  }
`;
