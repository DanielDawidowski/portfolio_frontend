import { ReactElement } from "react";
import type { FC } from "react";
import PropTypes from "prop-types";
import { ArrowStyles } from "./ArrowStyles";

interface Props {
  rotate?: boolean;
}

const Arrow: FC<Props> = (props): ReactElement => {
  const { rotate } = props;
  return (
    <ArrowStyles>
      <div className="arrow" style={{ transform: rotate ? "rotate(-90deg)" : "rotate(180deg)" }}>
        <div className="arrow__point"></div>
        <div className="arrow__lines">
          <div className="arrow__line"></div>
          <div className="arrow__line"></div>
          <div className="arrow__line"></div>
          <div className="arrow__line"></div>
        </div>
      </div>
    </ArrowStyles>
  );
};

Arrow.propTypes = {
  rotate: PropTypes.bool
};

export default Arrow;
