import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={448}
    height={448}
    viewBox="0 0 448 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M416 0H31.9C14.3 0 0 14.5 0 32.3V415.7C0 433.5 14.3 448 31.9 448H416C433.6 448 448 433.5 448 415.7V32.3C448 14.5 433.6 0 416 0ZM135.4 384H69V170.2H135.5V384H135.4ZM102.2 141C80.9 141 63.7 123.7 63.7 102.5C63.7 81.3 80.9 64 102.2 64C123.4 64 140.7 81.3 140.7 102.5C140.7 123.8 123.5 141 102.2 141ZM384.3 384H317.9V280C317.9 255.2 317.4 223.3 283.4 223.3C248.8 223.3 243.5 250.3 243.5 278.2V384H177.1V170.2H240.8V199.4H241.7C250.6 182.6 272.3 164.9 304.6 164.9C371.8 164.9 384.3 209.2 384.3 266.8V384Z"
      fill="#eff1f5"
    />
  </svg>
);
export default SVGComponent;
