import { ReactElement } from "react";
import type { FC } from "react";
import { StackStyles, Triangle } from "./StackStyles";
import ReactSVG from "../../assets/SVG/React";
import ReduxSVG from "../../assets/SVG/Redux";
import HTMLSVG from "../../assets/SVG/Html";
import CSSSVG from "../../assets/SVG/Css";
import JSSVG from "../../assets/SVG/Js";
import TSSVG from "../../assets/SVG/Ts";
import NodeSVG from "../../assets/SVG/Node";
import NextSVG from "../../assets/SVG/Next";
import { Container } from "../styles/globalStyles";

const Stack: FC = (): ReactElement => {
  return (
    <StackStyles>
      <div className="stack">
        <Container>
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
        </Container>
        <div className="stack__bottom">
          <Container>
            <NodeSVG />
            <CSSSVG />
            <HTMLSVG />
            <NextSVG />
          </Container>
        </div>
      </div>
    </StackStyles>
  );
};

export default Stack;
