import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={512}
    height={512}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_14_43)">
      <path
        d="M0 112C0 67.8 35.8 32 80 32H192C209.7 32 224 46.3 224 64C224 81.7 209.7 96 192 96H80C71.2 96 64 103.2 64 112V432C64 440.8 71.2 448 80 448H400C408.8 448 416 440.8 416 432V320C416 302.3 430.3 288 448 288C465.7 288 480 302.3 480 320V432C480 476.2 444.2 512 400 512H80C35.8 512 0 476.2 0 432V112Z"
        fill="#D4A373"
      />
      <path
        d="M322.4 19.8C327.4 7.8 339.1 0 352 0H480C497.7 0 512 14.3 512 32V160C512 172.9 504.2 184.6 492.2 189.6C480.2 194.6 466.5 191.8 457.3 182.7L416 141.3L246.6 310.6C234.1 323.1 213.8 323.1 201.3 310.6C188.8 298.1 188.8 277.8 201.3 265.3L370.7 96L329.4 54.6C320.2 45.4 317.5 31.7 322.5 19.7L322.4 19.8Z"
        fill="#DEDFBA"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_43">
        <rect width={512} height={512} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
