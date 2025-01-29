import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={448}
    height={512}
    viewBox="0 0 448 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_15_5)">
      <path
        d="M0 232V280C0 302.1 17.9 320 40 320H224C224 277.3 224 234.7 224 192C162.7 192 101.3 192 40 192C17.9 192 0 209.9 0 232Z"
        fill="#DEDFBA"
      />
      <path
        d="M224 320V416C224 428.9 231.8 440.6 243.8 445.6C255.8 450.6 269.5 447.8 278.7 438.7L438.7 278.7C451.2 266.2 451.2 245.9 438.7 233.4L278.7 73.4002C269.5 64.2002 255.8 61.5002 243.8 66.5002C231.8 71.5002 224 83.1002 224 96.1002V192.1V320.1V320Z"
        fill="#D4A373"
      />
    </g>
    <defs>
      <clipPath id="clip0_15_5">
        <rect width={448} height={512} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
