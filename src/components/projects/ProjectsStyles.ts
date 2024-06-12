import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsStyles = styled(motion.div)`
  background: ${(props) => props.theme.turquoise_light};
`;

export const Title = styled.div`
  overflow: hidden;
`;

export const ProjectsWrapper = styled.div`
  padding: 36px 8px 144px 8px;
  background: ${(props) => props.theme.turquoise_light};
  height: 100%;
  overflow: hidden;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    padding: ${(props) => props.theme.size8} 0;
  }
`;

export const ProjectItem = styled.div`
  height: 100%;
  width: 100%;
  padding: ${(props) => props.theme.size5} 0;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectImage = styled.div`
  height: 100%;
  width: 100%;
  padding: ${(props) => props.theme.size1};
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${(props) => props.theme.size4};
`;

export const StackList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${(props) => props.theme.size4};
  padding: ${(props) => props.theme.size4};
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StackListItem = styled(motion.div)`
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
`;
