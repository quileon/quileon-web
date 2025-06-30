import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={320}
    height={193}
    viewBox="0 0 320 193"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M160 137.4L249.4 48H70.6L160 137.4ZM182.6 182.7C170.1 195.2 149.8 195.2 137.3 182.7L9.3 54.7C0.100004 45.5 -2.6 31.8 2.4 19.8C7.4 7.8 19 0 32 0H288C300.9 0 312.6 7.8 317.6 19.8C322.6 31.8 319.8 45.5 310.7 54.7L182.7 182.7H182.6Z"
      fill="#FEFAE0"
    />
  </svg>
);
export default SVGComponent;
