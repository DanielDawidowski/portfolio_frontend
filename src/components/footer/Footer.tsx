import { ReactElement } from "react";
import type { FC } from "react";
import { FooterStyles } from "./FooterStyles";
import GithubSVG from "../../assets/SVG/Github";
import LinkedinSVG from "../../assets/SVG/Linkedin";

const Footer: FC = (): ReactElement => {
  return (
    <FooterStyles>
      <div className="footer">
        <GithubSVG fill="#85F3EA" />
        <LinkedinSVG fill="#85F3EA" />
      </div>
    </FooterStyles>
  );
};

export default Footer;
