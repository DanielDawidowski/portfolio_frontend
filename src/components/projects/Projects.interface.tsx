import type { ReactNode } from "react";
import ReactSVG from "../../assets/SVG/React";
import ReduxSVG from "../../assets/SVG/Redux";
import JSSVG from "../../assets/SVG/Js";
import TSSVG from "../../assets/SVG/Ts";
import NodeSVG from "../../assets/SVG/Node";
// import NextSVG from "../../assets/SVG/Next";
import SassSVG from "../../assets/SVG/Sass";
import FramerSVG from "../../assets/SVG/Framer";
import StyledSVG from "../../assets/SVG/Styled";
import SocketIOSVG from "../../assets/SVG/Socketio";

export type IStack = {
  name: string;
  icon: ReactNode;
};

export interface IProject {
  id: string;
  name: string;
  img: string;
  github: string;
  web: string;
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
    github: "https://github.com/DanielDawidowski/cinema-FRONTEND",
    web: "https://cinema-frontend-mol8.onrender.com/",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "Node.js",
        icon: <NodeSVG />
      },
      {
        name: "@Reduxjs/toolkit",
        icon: <ReduxSVG />
      },
      {
        name: "Typescript",
        icon: <TSSVG />
      },
      {
        name: "Styled components",
        icon: <StyledSVG />
      }
    ]
  },
  {
    id: "12346",
    name: "Clothes_shop",
    img: "https://i.ibb.co/BNYchDZ/clothes.png",
    github: "https://github.com/DanielDawidowski/shop-2023-frontend",
    web: "https://shop-2023.onrender.com/",
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
    github: "https://github.com/DanielDawidowski/aktywne_obozy_REACT_JS_2023",
    web: "https://aktywneobozy.com.pl/",
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
        name: "Framer motion",
        icon: <FramerSVG />
      },
      {
        name: "Styled components",
        icon: <StyledSVG />
      },
      {
        name: "Socket IO",
        icon: <SocketIOSVG />
      }
    ]
  },
  {
    id: "12348",
    name: "Pizza_Restaurant",
    img: "https://i.ibb.co/FVQJH0g/restaurant.png",
    github: "https://github.com/DanielDawidowski/pizza_restaurant",
    web: "https://pizza-restaurant-ciwo.onrender.com/",
    stacks: [
      {
        name: "React",
        icon: <ReactSVG />
      },
      {
        name: "@Reduxjs/toolkit",
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
