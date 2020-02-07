import * as React from "react";

const SvgTruck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M21.333 4h-20v17.333h20V4zM21.333 10.667h5.334l4 4v6.666h-9.334V10.667zM7.333 28a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM24.667 28a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTruck;
