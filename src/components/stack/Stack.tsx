import { FC, ReactElement } from "react";
import { StackStyles, Triangle } from "./StackStyles";
import ReactSVG from "../../assets/SVG/React";
import ReduxSVG from "../../assets/SVG/Redux";
import HTMLSVG from "../../assets/SVG/Html";
import CSSSVG from "../../assets/SVG/Css";
import JSSVG from "../../assets/SVG/Js";
import TSSVG from "../../assets/SVG/Ts";
import NodeSVG from "../../assets/SVG/Node";
import NextSVG from "../../assets/SVG/Next";

const Stack: FC = (): ReactElement => {
  return (
    <StackStyles>
      <div className="stack">
        <div className="container">
          <div className="stack__top">
            <Triangle topLeft />
            <div className="stack__top--content">
              <ReactSVG />
              <ReduxSVG />
              <TSSVG />
              <JSSVG />
              <div className="stack__top--content media">
                <NodeSVG />
                <CSSSVG />
                <HTMLSVG />
                <NextSVG />
              </div>
            </div>
            <Triangle topRight />
          </div>
        </div>
        <div className="stack__bottom">
          <div className="container">
            <NodeSVG />
            <CSSSVG />
            <HTMLSVG />
            <NextSVG />
          </div>
        </div>
      </div>
    </StackStyles>
  );
};

export default Stack;
