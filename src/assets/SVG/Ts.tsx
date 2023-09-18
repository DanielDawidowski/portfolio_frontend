import { FC, ReactElement } from "react";

const TSSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="50" height="50" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16H42V42H7V16Z" fill="white" />
      <path
        d="M0 22.5V45H45V0H0V22.5ZM36.2628 20.7C37.3406 20.9501 38.3202 21.5138 39.078 22.32C39.4952 22.7543 39.8579 23.2379 40.158 23.76C40.158 23.8176 38.214 25.1316 37.0296 25.866C36.9864 25.8948 36.8136 25.7076 36.6228 25.4232C36.4066 25.0501 36.0994 24.7379 35.7298 24.5157C35.3603 24.2935 34.9405 24.1685 34.5096 24.1524C33.1452 24.0588 32.2668 24.7752 32.274 25.9524C32.2627 26.2455 32.3298 26.5363 32.4684 26.7948C32.7672 27.4176 33.3252 27.7884 35.0748 28.5444C38.2968 29.9304 39.6756 30.8448 40.5324 32.1444C41.49 33.5844 41.7024 35.91 41.0544 37.6308C40.3344 39.5028 38.5704 40.7736 36.0756 41.1948C34.9361 41.3253 33.7849 41.3132 32.6484 41.1588C30.9066 40.8717 29.3021 40.0354 28.0692 38.772C27.6552 38.3148 26.8488 37.1232 26.8992 37.0368C27.0306 36.9392 27.169 36.8514 27.3132 36.774L28.98 35.8524L30.2724 35.1036L30.5424 35.5032C30.9981 36.155 31.578 36.7104 32.2488 37.1376C33.6888 37.8936 35.6544 37.7892 36.6264 36.9144C36.9528 36.5938 37.1563 36.169 37.2017 35.7138C37.2471 35.2586 37.1314 34.8019 36.8748 34.4232C36.5148 33.9228 35.7948 33.5016 33.7824 32.6232C31.4604 31.6224 30.4596 31.0032 29.5452 30.0168C28.9744 29.3659 28.5529 28.5979 28.3104 27.7668C28.1295 26.8173 28.1028 25.8448 28.2312 24.8868C28.71 22.644 30.3912 21.078 32.8464 20.6136C33.9834 20.4729 35.1352 20.5045 36.2628 20.7072V20.7ZM25.7004 22.5864V24.4296H19.8576V41.0724H15.714V24.426H9.8568V22.626C9.83856 22.0053 9.85298 21.384 9.9 20.7648C9.9288 20.7324 13.5 20.7324 17.82 20.7324H25.6788L25.7004 22.5864Z"
        fill="#007ACC"
      />
    </svg>
  );
};

export default TSSVG;