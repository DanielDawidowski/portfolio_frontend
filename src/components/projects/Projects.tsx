import { ReactElement, useState, useRef, useEffect } from "react";
import type { FC } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ProjectsStyles } from "./ProjectsStyles";
import { IProject, projects } from "./Projects.interface";
import Image from "../image/Image";
import { stacksVariants, stackItemVariants, projectsVariants } from "./ProjectsVariants";
import GithubSVG from "../../assets/SVG/Github";
import WebSVG from "../../assets/SVG/Web";
import { Container } from "../styles/globalStyles";
import Accordion from "../accordion/Accordion";
import { scrollToElement } from "../../services/utils/Utils";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Projects: FC = (): ReactElement => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<string>("");
  const [ref, animation] = useScrollAnimation("-150px");

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

  const variantLeft = projectsVariants(-72, "0%");
  const variantRight = projectsVariants(72, "200%");

  return (
    <ProjectsStyles>
      <div id="projects" className="projects">
        <div className="projects__title">
          <motion.div
            ref={ref}
            animate={animation}
            className="line"
            initial="hidden"
            variants={variantLeft}
          ></motion.div>
          <motion.div ref={ref} animate={animation} className="line" initial="hidden" variants={variantRight}>
            <h3 className="black-border">Projects</h3>
          </motion.div>
          <motion.div
            ref={ref}
            animate={animation}
            className="line"
            initial="hidden"
            variants={variantRight}
          ></motion.div>
        </div>
        <div className="projects__content">
          <Container>
            {projects.map((project: IProject) => (
              <motion.div id={project.id} className="projects__content--item" key={project.id}>
                <Accordion
                  title={project.name.toUpperCase()}
                  isOpen={openAccordionIndex === project.id}
                  onClick={() => handleAccordionClick(project.id)}
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
                      variants={stacksVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="projects__content--item__stack"
                    >
                      {project.stacks.map((stack, i) => (
                        <motion.div
                          key={i}
                          variants={stackItemVariants}
                          className="projects__content--item__stack--item"
                        >
                          <div>{stack.icon}</div>
                          <h3 className="white-border">{stack.name}</h3>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </Accordion>
              </motion.div>
              // <Project key={project.id} {...project} />
            ))}
          </Container>
        </div>
      </div>
    </ProjectsStyles>
  );
};

export default Projects;
