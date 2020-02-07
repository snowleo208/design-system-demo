import * as React from "react";

const SvgBuoy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
    <path
      d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.205 7.462 16.667 16.667 16.667z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 26.667a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334zM8.217 8.217l7.066 7.066M24.717 24.717l7.066 7.066M24.717 15.283l7.066-7.066M24.717 15.283L30.6 9.4M8.217 31.783l7.066-7.066"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgBuoy;
