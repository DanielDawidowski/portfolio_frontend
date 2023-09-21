import { ReactElement, useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { ProjectsStyles } from "./ProjectsStyles";
import { IProject, projects } from "./Projects.interface";
import Image from "../image/Image";
import { container, item } from "./ProjectsVariants";
import GithubSVG from "../../assets/SVG/Github";
import WebSVG from "../../assets/SVG/Web";
import { Container } from "../styles/globalStyles";
import Accordion from "../accordion/Accordion";

const Projects: FC = (): ReactElement => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <ProjectsStyles>
      <div className="projects">
        <div className="projects__title">
          <div className="line"></div>
          <div className="line">
            <h3 className="black-border">Projects</h3>
          </div>
          <div className="line"></div>
        </div>
        <div className="projects__content">
          <Container>
            {projects.map((project: IProject, i) => (
              <motion.div className="projects__content--item" key={project.id}>
                <Accordion
                  title={project.name.toUpperCase()}
                  isOpen={openAccordionIndex === i}
                  onClick={() => handleAccordionClick(i)}
                >
                  <motion.div key={project.id} className="projects__content--item__body">
                    <motion.div
                      className="projects__content--item__body--image"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                    >
                      <Image src={project.img} alt={project.name} />
                      <motion.div className="projects__content--item__body--social">
                        <a href="https://www.google.com" target="_blank">
                          <GithubSVG fill="#B180DD" />
                        </a>
                        <a href="https://www.google.com" target="_blank">
                          <WebSVG />
                        </a>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="projects__content--item__stack"
                    >
                      {project.stacks.map((stack, i) => (
                        <motion.div key={i} variants={item} className="projects__content--item__stack--item">
                          <div>{stack.icon}</div>
                          <h3 className="white-border">{stack.name}</h3>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </Accordion>
              </motion.div>
            ))}
          </Container>
        </div>
      </div>
    </ProjectsStyles>
  );
};

export default Projects;
