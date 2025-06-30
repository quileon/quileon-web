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
      d="M160 55.5998L70.6 145H249.3L160 55.5998ZM137.4 10.2998C149.9 -2.2002 170.2 -2.2002 182.7 10.2998L310.7 138.3C319.9 147.5 322.6 161.2 317.6 173.2C312.6 185.2 301 193 288 193H32C19.1 193 7.40001 185.2 2.40001 173.2C-2.59999 161.2 0.200006 147.5 9.30001 138.3L137.3 10.2998H137.4Z"
      fill="#FEFAE0"
    />
  </svg>
);
export default SVGComponent;
