import { FC, ReactElement } from "react";

const FramerSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.8103 0H50.9621V20.3335H30.886L10.8103 0ZM10.8103 20.3335H30.886L50.9621 40.6665H30.886V61L10.8103 40.6665V20.3335Z"
        fill="black"
      />
    </svg>
  );
};

export default FramerSVG;
