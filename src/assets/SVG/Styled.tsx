import { FC, ReactElement } from "react";

const StyledSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_63_79)">
        <path
          d="M41.2106 17.1868L41.02 18.1806C40.7251 20.0639 40.8319 20.6028 41.6401 21.3017L42.4204 21.9473L41.6122 25.5514C41.1292 27.7016 40.537 29.5037 40.1609 30.0959C39.8381 30.6068 39.4619 31.3591 39.3806 31.7632C39.2459 32.2461 38.7884 32.7316 38.0894 33.1611C37.4718 33.5119 36.2594 34.4523 35.4003 35.2072C34.7141 35.8248 34.2413 36.2035 33.9846 36.3662L33.1459 37.0296C32.9302 37.3494 32.7679 37.7022 32.6655 38.0742C32.607 38.3461 32.6401 38.5266 32.7265 38.6588C32.8104 38.7858 32.9552 38.8748 33.1535 38.9307C33.3882 38.9857 33.6298 39.0054 33.8703 38.9892C34.4143 38.952 34.9529 38.8566 35.4766 38.7045C35.6545 38.6562 35.7943 38.6105 35.9163 38.5698C36.1044 38.3385 36.539 37.9014 37.3091 37.1414C39.3526 35.1258 40.1329 34.0228 39.3272 34.3201C39.0298 34.4269 39.1645 34.1575 39.6754 33.6186C40.7531 32.5689 41.3707 30.9829 42.6619 26.0089C43.6836 22.082 43.6836 22.0261 44.436 22.0261C44.7892 22.0261 45.7881 22.0871 45.7881 22.0871V17.1868H43.4955H41.2106ZM50.968 25.2311C50.8054 25.2311 50.536 25.4751 50.3758 25.7446C50.081 26.2275 50.4292 26.5223 54.867 29.2927C57.5027 30.9626 59.6275 32.3859 59.5741 32.4952C59.5207 32.574 57.368 33.9745 54.7882 35.5884C50.1064 38.491 50.081 38.519 50.5105 39.1112C51.0494 39.8101 50.5105 40.0516 56.5877 36.2594L61 33.4356V31.3108L56.0768 28.271C53.4157 26.6036 51.1027 25.2591 50.968 25.2311ZM10.0853 25.5285C9.95063 25.5285 7.63771 26.901 4.97658 28.5404L0 31.5802V33.7051L4.94863 36.7983C7.69363 38.491 10.0065 39.8915 10.1133 39.8915C10.22 39.8915 10.4361 39.6475 10.6521 39.3526C10.9749 38.8418 10.703 38.6257 6.15846 35.7486C1.83 33.0315 1.3725 32.6554 1.80458 32.3605C2.074 32.1724 4.1175 30.9067 6.32367 29.5367C11.3536 26.4435 11.0842 26.657 10.6801 26.0114C10.52 25.7446 10.248 25.5031 10.0879 25.5285H10.0853ZM32.1572 25.587C31.415 25.5819 29.8188 26.7129 25.0405 30.6144C24.8346 31.1049 24.8168 31.443 24.9109 31.6616C24.9719 31.8115 25.0837 31.9157 25.2388 31.992C25.3913 32.0682 25.5895 32.114 25.8081 32.1318C26.2427 32.1699 26.7561 32.1013 27.1704 32.0199L27.45 31.9564C27.5457 31.8281 27.6714 31.7251 27.816 31.6565C28.1108 31.4938 29.3486 30.3653 30.5864 29.1555C32.7646 26.9493 33.2755 25.953 32.3885 25.6302C32.3157 25.6012 32.2355 25.5866 32.1572 25.587ZM37.7387 27.1196C37.0855 27.1374 35.9087 27.8948 33.8931 29.5037C32.8815 30.3246 32.241 30.7669 31.8979 30.8584L30.5661 31.9106C30.0654 32.8256 29.9917 33.3924 30.1238 33.7051C30.1569 33.7822 30.2049 33.852 30.2651 33.9104C30.3253 33.9689 30.3965 34.0148 30.4746 34.0456C30.6688 34.1223 30.8758 34.1611 31.0846 34.16C31.5835 34.1547 32.0793 34.082 32.5588 33.944C32.8086 33.8769 33.0554 33.7989 33.2984 33.7101L33.3721 33.6796L33.5068 33.6085C33.761 33.2806 34.3455 32.663 35.0775 31.9513C37.3905 29.7197 38.5723 28.1337 38.3309 27.5415C38.2216 27.2543 38.0335 27.1094 37.7387 27.1196ZM31.5777 29.8646C31.3896 29.8849 30.9677 30.2103 30.2077 30.8762C29.1097 31.8471 27.9126 32.4063 27.4983 32.1572C27.402 32.1789 27.3054 32.1993 27.2085 32.2182C26.7866 32.3021 26.2605 32.3707 25.7903 32.3326C25.5687 32.3191 25.3516 32.2649 25.1498 32.1724C24.9595 32.0854 24.8076 31.9317 24.7228 31.7403C24.6288 31.5116 24.6288 31.2269 24.7355 30.8635L23.0834 32.2207L19.3446 35.3139V40.3286L31.5955 30.6779C31.5931 30.5723 31.6068 30.4669 31.6361 30.3653C31.7302 30.0247 31.7251 29.8519 31.5777 29.8671V29.8646ZM36.8491 31.4887C36.6635 31.4887 36.3535 31.7505 35.8578 32.2766C35.1843 32.9959 34.1244 33.6924 33.5627 33.8347L33.4763 33.8804C33.3841 33.9185 33.2908 33.9541 33.1967 33.9872C33.0442 34.038 32.846 34.099 32.6172 34.16C32.1597 34.2846 31.5904 34.3989 31.082 34.3862C30.8424 34.3859 30.6051 34.3393 30.3831 34.249C30.1739 34.1627 30.0062 33.9987 29.9154 33.7915C29.768 33.4382 29.8265 32.9426 30.1493 32.2385L19.3421 40.7506V43.8133H24.0899L34.16 35.9036C34.4218 35.6138 34.8158 35.2174 35.347 34.7217C36.7703 33.4026 37.0931 32.9476 37.0931 32.2741C37.0931 31.7505 37.0346 31.4862 36.8491 31.4862V31.4887ZM39.2459 36.445L38.3843 37.3041C37.9013 37.7616 37.0397 38.3258 36.45 38.5673L36.3331 38.6181L36.3255 38.6308L36.3001 38.6562C36.2772 38.674 36.267 38.6766 36.2493 38.6842C36.0139 38.7733 35.7747 38.8521 35.5325 38.9206C34.994 39.0773 34.44 39.1753 33.8804 39.2129C33.6158 39.2298 33.3502 39.2067 33.0925 39.1442C32.8689 39.095 32.6715 38.9646 32.5384 38.7782C32.4164 38.5901 32.3808 38.3385 32.4495 38.0284C32.504 37.8077 32.5851 37.5943 32.6909 37.393L24.5652 43.8133H35.3724L36.6635 42.334C38.4376 40.2651 39.2459 38.7858 39.2459 37.5201V36.445Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_63_79">
          <rect width="61" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StyledSVG;