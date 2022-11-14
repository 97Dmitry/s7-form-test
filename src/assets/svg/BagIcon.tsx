import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.11 5H15A5 5 0 0 0 5 5H2.89a2.5 2.5 0 0 0-2.5 2.5L0 15.833A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833L19.61 7.5a2.5 2.5 0 0 0-2.5-2.5ZM10 1.667A3.333 3.333 0 0 1 13.333 5H6.667A3.333 3.333 0 0 1 10 1.667Zm8.333 14.166a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5l.39-8.333a.833.833 0 0 1 .834-.833H5v1.666a.834.834 0 1 0 1.667 0V6.667h6.666v1.666a.834.834 0 1 0 1.667 0V6.667h2.11a.833.833 0 0 1 .833.833l.39 8.333Z"
        fill="#8BA5D8"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
