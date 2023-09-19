import { ReactElement, useState } from "react";
import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsStyles } from "./ProjectsStyles";
import { IProject, IProjects, projects } from "./Projects.interface";
import Image from "../image/Image";
import { container, item } from "./ProjectsVariants";
import GithubSVG from "../../assets/SVG/Github";
import WebSVG from "../../assets/SVG/Web";

const Projects: FC<IProjects> = (): ReactElement => {
  const [toggle, setToggle] = useState<string | null>("");

  const open = (name: string): void => {
    setToggle(toggle !== name ? name : null);
    console.log("toggle", toggle);
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
          <motion.div className="container">
            {projects.map((project: IProject) => (
              <motion.div className="projects__content--item" key={project.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    className="projects__content--item__header"
                    style={{ borderBottom: toggle === project.name ? "1px solid #33547A" : "" }}
                    onClick={() => open(project.name)}
                  >
                    <h2 className="black-border">{project.name.toUpperCase()}</h2>
                  </motion.div>
                  {toggle === project.name && (
                    <motion.div
                      key={project.id}
                      initial={{ height: 0, opacity: 0, y: -20 }}
                      animate={{ height: toggle ? "100%" : "0", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.1,
                        ease: "easeInOut"
                      }}
                      exit={{ height: 0, opacity: 0, y: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
                      className="projects__content--item__body"
                    >
                      <motion.div className="projects__content--item__body--image">
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
                        {project.stacks.map((stack) => (
                          <motion.div variants={item} className="projects__content--item__stack--item">
                            <div>{stack.icon}</div>
                            <h3 className="white-border">{stack.name}</h3>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ProjectsStyles>
  );
};

export default Projects;
