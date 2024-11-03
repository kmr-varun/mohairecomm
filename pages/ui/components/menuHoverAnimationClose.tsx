import React from "react";

const MenuHoverAnimationClose = () => {
  return (
    <span className="icon-container icon-close">
      <svg
        className="icon-close-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="30.1 30.1 15.81 15.8"
        width="16"
        height="16"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="45.5" y1="30.5" x2="30.5" y2="45.5" strokeWidth="0.75" />
          <line x1="30.5" y1="30.5" x2="45.5" y2="45.5" strokeWidth="0.75" />
        </g>
      </svg>

      <style jsx>{`
        .icon-close-svg {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          width: 16px; /* Adjusted to match the SVG width */
          height: auto;
        }

        .icon-close-svg line {
          stroke-dasharray: 25;
          stroke-dashoffset: 50; /* Start with lines fully visible */
          transition: stroke-dashoffset 0.6s ease-in-out;
        }

        .icon-close-svg line:last-of-type {
          transition-delay: 0.3s;
        }

        .icon-container:hover .icon-close-svg line {
          stroke-dashoffset: 0;
        }

        .icon-container {
          display: inline-block; /* Ensure the icon behaves like a block */
          cursor: pointer; /* Change cursor to pointer on hover */
        }
      `}</style>
    </span>
  );
};

export default MenuHoverAnimationClose;
