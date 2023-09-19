import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";

interface IWebSVG {
  fill?: string;
}

const WebSVG: FC<React.SVGProps<IWebSVG>> = (props): ReactElement => {
  const { fill = "#B180DD" } = props;
  return (
    <svg width="38" height="38" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.772 32.4C38.988 30.618 39.15 28.836 39.15 27C39.15 25.164 38.988 23.382 38.772 21.6H47.898C48.33 23.328 48.6 25.137 48.6 27C48.6 28.863 48.33 30.672 47.898 32.4M33.993 47.412C35.613 44.415 36.855 41.175 37.719 37.8H45.684C43.0682 42.3043 38.9181 45.7164 33.993 47.412ZM33.318 32.4H20.682C20.412 30.618 20.25 28.836 20.25 27C20.25 25.164 20.412 23.355 20.682 21.6H33.318C33.561 23.355 33.75 25.164 33.75 27C33.75 28.836 33.561 30.618 33.318 32.4ZM27 48.492C24.759 45.252 22.95 41.661 21.843 37.8H32.157C31.05 41.661 29.241 45.252 27 48.492ZM16.2 16.2H8.316C10.9049 11.6835 15.0519 8.26601 19.98 6.588C18.36 9.585 17.145 12.825 16.2 16.2ZM8.316 37.8H16.2C17.145 41.175 18.36 44.415 19.98 47.412C15.0623 45.7155 10.9211 42.3028 8.316 37.8ZM6.102 32.4C5.67 30.672 5.4 28.863 5.4 27C5.4 25.137 5.67 23.328 6.102 21.6H15.228C15.012 23.382 14.85 25.164 14.85 27C14.85 28.836 15.012 30.618 15.228 32.4M27 5.481C29.241 8.721 31.05 12.339 32.157 16.2H21.843C22.95 12.339 24.759 8.721 27 5.481ZM45.684 16.2H37.719C36.874 12.8559 35.6227 9.62792 33.993 6.588C38.961 8.289 43.092 11.718 45.684 16.2ZM27 0C12.069 0 0 12.15 0 27C0 34.1608 2.84464 41.0284 7.90812 46.0919C10.4153 48.5991 13.3918 50.5879 16.6675 51.9448C19.9433 53.3016 23.4543 54 27 54C34.1608 54 41.0284 51.1554 46.0919 46.0919C51.1554 41.0284 54 34.1608 54 27C54 23.4543 53.3016 19.9433 51.9448 16.6675C50.5879 13.3918 48.5991 10.4153 46.0919 7.90812C43.5847 5.40094 40.6082 3.41213 37.3325 2.05525C34.0567 0.698376 30.5457 0 27 0Z"
        fill={fill}
      />
    </svg>
  );
};

WebSVG.propTypes = {
  fill: PropTypes.string
};

export default WebSVG;