import { ReactElement } from "react";
import type { FC } from "react";
import { projectsVariants } from "../projects/ProjectsVariants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { ILine } from "./Line.interface";
import { LineStyles } from "./Line.styles";

const Line: FC<ILine> = ({ name, margin }): ReactElement => {
  const [ref, animation] = useScrollAnimation(margin);

  const variantLeft = projectsVariants(-72, "0%");
  const variantRight = projectsVariants(72, "200%");

  return (
    <>
      <LineStyles
        $section={name}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variantLeft}
        className="line"
      ></LineStyles>
      <LineStyles
        $section={name}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variantRight}
        className="line"
      >
        <h3 className="black-border">{name}</h3>
      </LineStyles>
      <LineStyles
        $section={name}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variantRight}
        className="line"
      ></LineStyles>
    </>
  );
};

export default Line;
