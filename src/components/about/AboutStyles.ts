import styled from "styled-components";
import { motion } from "framer-motion";
import AboutBG from "../../assets/Images/about/about-bg.png";

export const AboutStyles = styled(motion.div)`
  background: ${(props) => props.theme.purple_opacity};
`;

export const AboutTitle = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    background-color: ${(props) => props.theme.purple_light};
    width: 100%;
    height: 70px;
    display: grid;
    place-items: center;
  }
`;

export const AboutSmallQuery = styled.div`
  display: block;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
`;

export const AboutBigQuery = styled.div`
  background: url(${AboutBG}) no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  height: 75vh;
  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
`;

export const SmallProfileQuery = styled.div`
  background: ${(props) => props.theme.white};
  background: url(${AboutBG}) no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${(props) => props.theme.size1};
`;

export const BigProfileQuery = styled(motion.div)`
  border: 2px dashed ${(props) => props.theme.purple_dark};
  background: ${(props) => props.theme.white};
  padding: ${(props) => props.theme.size2};
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  img {
    border-radius: 12px;
  }
  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
`;

export const SmallProfileInnerQuery = styled.div`
  background: ${(props) => props.theme.white};
  margin: ${(props) => props.theme.size4} ${(props) => props.theme.size2};
  padding: ${(props) => props.theme.size4} ${(props) => props.theme.size2};
  border: 2px dashed ${(props) => props.theme.purple_dark};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 130px;
    height: 130px;
  }
`;

export const BigProfileInnerQuery = styled.div`
  padding: ${(props) => props.theme.size1} ${(props) => props.theme.size5};
  display: grid;
`;

export const AboutContentStyles = styled(motion.div)`
  padding: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size6} 0;
  text-align: justify;
  line-height: 2;
  font-size: ${(props) => props.theme.size4};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    font-size: ${(props) => props.theme.size6};
  }
`;
