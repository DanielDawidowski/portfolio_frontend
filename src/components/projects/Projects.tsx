import { ReactElement, useState } from "react";
import type { FC } from "react";
import {
  ProjectImage,
  ProjectItem,
  ProjectsStyles,
  ProjectsWrapper,
  SocialLinks,
  StackList,
  StackListItem,
  Title
} from "./ProjectsStyles";
import { IProject, projects } from "./Projects.interface";
import Image from "../image/Image";
import { stacksVariants, stackItemVariants } from "./ProjectsVariants";
import GithubSVG from "../../assets/SVG/Github";
import WebSVG from "../../assets/SVG/Web";
import { Container } from "../styles/globalStyles";
import Accordion from "../accordion/Accordion";
import { scrollToElement } from "../../services/utils/Utils";
import Line from "../line/Line";

const Projects: FC = (): ReactElement => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<string>("");

  const handleAccordionClick = (index: string) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex("");
    } else {
      setOpenAccordionIndex(index);
      setTimeout(() => {
        scrollToElement(index, 200);
      }, 500);
    }
  };

  return (
    <ProjectsStyles id="projects">
      <Title>
        <Line name={"Projects"} margin={"-150px"} />
      </Title>
      <ProjectsWrapper>
        <Container>
          {projects.map((project: IProject) => (
            <div id={project.id}>
              <Accordion
                title={project.name.toUpperCase()}
                isOpen={openAccordionIndex === project.id}
                onClick={() => handleAccordionClick(project.id)}
              >
                <ProjectItem key={project.id}>
                  <ProjectImage>
                    <Image src={project.img} alt={project.name} />
                    <SocialLinks>
                      <a href={project.github} target="_blank">
                        <GithubSVG fill="#B180DD" />
                      </a>
                      <a href={project.web} target="_blank">
                        <WebSVG />
                      </a>
                    </SocialLinks>
                  </ProjectImage>
                  <StackList variants={stacksVariants} initial="hidden" animate="show" exit="exit">
                    {project.stacks.map((stack, i) => (
                      <StackListItem key={i} variants={stackItemVariants}>
                        <div>{stack.icon}</div>
                        <h3 className="white-border">{stack.name}</h3>
                      </StackListItem>
                    ))}
                  </StackList>
                </ProjectItem>
              </Accordion>
            </div>
          ))}
        </Container>
      </ProjectsWrapper>
    </ProjectsStyles>
  );
};

export default Projects;
