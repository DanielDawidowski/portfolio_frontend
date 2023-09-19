import { ReactElement } from "react";
import type { FC, ReactNode } from "react";
import ReactSVG from "../../assets/SVG/React";
import ReduxSVG from "../../assets/SVG/Redux";
import JSSVG from "../../assets/SVG/Js";
import TSSVG from "../../assets/SVG/Ts";
import NodeSVG from "../../assets/SVG/Node";
// import NextSVG from "../../assets/SVG/Next";
import SassSVG from "../../assets/SVG/Sass";
import FramerSVG from "../../assets/SVG/Framer";
import StyledSVG from "../../assets/SVG/Styled";

export type IStack = {
  name: string;
  icon: ReactNode;
};

export interface IProject {
  id: string;
  name: string;
  img: string;
  stacks: IStack[];
}

export interface IProjects {
  projects: IProject[];
}

export const projects: IProject[] = [
  {
    id: "12345",
    name: "Cinema",
    img: "https://i.ibb.co/YtRh7bt/cinema.png",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "Redux",
        icon: <ReduxSVG />
      },
      {
        name: "Typescript",
        icon: <TSSVG />
      },
      {
        name: "Sass",
        icon: <SassSVG />
      }
    ]
  },
  {
    id: "12346",
    name: "Clothes_shop",
    img: "https://i.ibb.co/BNYchDZ/clothes.png",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "Redux",
        icon: <ReduxSVG />
      },
      {
        name: "Javascript",
        icon: <JSSVG />
      },
      {
        name: "Framer motion",
        icon: <FramerSVG />
      },
      {
        name: "Sass",
        icon: <SassSVG />
      }
    ]
  },
  {
    id: "12347",
    name: "Active_camps",
    img: "https://i.ibb.co/f0x7CNq/camps.png",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "Redux",
        icon: <ReduxSVG />
      },
      {
        name: "Typescript",
        icon: <TSSVG />
      },
      {
        name: "Node.js",
        icon: <NodeSVG />
      },
      {
        name: "Javascript",
        icon: <JSSVG />
      },
      {
        name: "Framer motion",
        icon: <FramerSVG />
      },
      {
        name: "Sass",
        icon: <SassSVG />
      }
    ]
  },
  {
    id: "12348",
    name: "Pizza_Restaurant",
    img: "https://i.ibb.co/FVQJH0g/restaurant.png",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "Redux",
        icon: <ReduxSVG />
      },
      {
        name: "Typescript",
        icon: <TSSVG />
      },
      {
        name: "Framer motion",
        icon: <FramerSVG />
      },
      {
        name: "Styled components",
        icon: <StyledSVG />
      }
    ]
  }
];
