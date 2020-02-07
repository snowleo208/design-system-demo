import * as React from "react";

const SvgTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 35 35" fill="none" {...props}>
    <path
      d="M21.5 8.5a1.667 1.667 0 000 2.333l2.667 2.667a1.667 1.667 0 002.333 0l6.283-6.283A10 10 0 0119.55 20.45L8.033 31.967a3.535 3.535 0 11-5-5L14.55 15.45A10 10 0 0127.783 2.217l-6.266 6.266-.017.017z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTool;
