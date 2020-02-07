import * as React from "react";

const SvgBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M28 21.333V10.667a2.667 2.667 0 00-1.333-2.307l-9.334-5.333a2.667 2.667 0 00-2.666 0L5.333 8.36A2.667 2.667 0 004 10.667v10.666a2.667 2.667 0 001.333 2.307l9.334 5.333a2.666 2.666 0 002.666 0l9.334-5.333A2.668 2.668 0 0028 21.333z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.36 9.28L16 16.013 27.64 9.28M16 29.44V16"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgBox;
