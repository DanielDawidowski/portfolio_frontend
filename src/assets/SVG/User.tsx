import { FC, ReactElement } from "react";

const UserSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.6667 43.7145V39.1907C34.6667 36.7911 33.7135 34.4898 32.0167 32.7931C30.32 31.0963 28.0187 30.1431 25.6191 30.1431H12.0476C9.64805 30.1431 7.34675 31.0963 5.64999 32.7931C3.95323 34.4898 3 36.7911 3 39.1907V43.7145"
        stroke="#85F3EA"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8334 21.0953C23.8303 21.0953 27.881 17.0445 27.881 12.0476C27.881 7.05076 23.8303 3 18.8334 3C13.8365 3 9.78577 7.05076 9.78577 12.0476C9.78577 17.0445 13.8365 21.0953 18.8334 21.0953Z"
        stroke="#85F3EA"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserSVG;
