import { FC, ReactElement } from "react";

const CSSSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="50" height="50" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.2219 39.5016L0.712524 0.125H39.2875L35.7735 39.4953L19.9766 43.875L4.2219 39.5016Z" fill="#1572B6" />
      <path d="M20 40.5282L32.7656 36.9891L35.7687 3.34534H20V40.5282Z" fill="#33A9DC" />
      <path
        d="M20 17.6109H26.3906L26.8312 12.6656H20V7.83594H32.1094L31.9938 9.13125L30.8078 22.4406H20V17.6109Z"
        fill="white"
      />
      <path
        d="M20.0297 30.1532L20.0078 30.1594L14.6297 28.7063L14.2859 24.8547H9.4375L10.1141 32.4375L20.0062 35.1844L20.0297 35.1782V30.1532Z"
        fill="#EBEBEB"
      />
      <path
        d="M25.9796 22.236L25.3984 28.7032L20.0125 30.1563V35.1813L29.9125 32.4375L29.9859 31.6219L30.825 22.236H25.9796Z"
        fill="white"
      />
      <path
        d="M20.0171 7.83594V12.6656H8.35151L8.25464 11.5797L8.03433 9.13125L7.9187 7.83594H20.0171ZM20 17.6109V22.4406H14.689L14.5921 21.3547L14.3734 18.9063L14.2578 17.6109H20Z"
        fill="#EBEBEB"
      />
    </svg>
  );
};

export default CSSSVG;
