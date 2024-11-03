import React from "react";

const MenuHoverAnimationOpen = () => {
  return (
    <div className="icon-container">
      <svg className="circle-outline">
        <circle cx="50%" cy="50%" r="20"></circle>
      </svg>
      <span className="dot dot-1"></span>
      <span className="dot dot-2"></span>
      <span className="dot dot-3"></span>
      <span className="dot dot-4"></span>

      <style jsx>{`
        /* Container for the dots and circle */
        .icon-container {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 40px;
          height: 40px;
          gap: 4px;
          border-radius: 100%;
          position: relative;
        }

        /* Dots Styling */
        .icon-container .dot {
          width: 5px;
          height: 5px;
          display: flex;
          background-color: currentColor;
          border-radius: 100%;
          transform: translate(0, 0);
          opacity: 1;
          transition: transform 0.5s ease;
        }

        /* Dot Positioning */
        .icon-container .dot.dot-1 {
          place-self: end;
        }
        .icon-container .dot.dot-2 {
          place-self: end start;
        }
        .icon-container .dot.dot-3 {
          place-self: start end;
        }
        .icon-container .dot.dot-4 {
          place-self: start;
        }

        /* Circle Outline Styling */
        .icon-container .circle-outline {
          position: absolute;
          width: 44px;
          height: 44px;
          left: -2px;
          top: -2px;
          stroke: currentColor;
        }

        /* Circle Dash Settings */
        .icon-container .circle-outline circle {
          stroke-dasharray: 125;
          stroke-dashoffset: 0;
          fill: none;
          transition: stroke-dashoffset 0.5s ease-out;
        }

        /* Hover Effects */
        .icon-container:hover .circle-outline circle {
          stroke-dashoffset: 125;
        }

        /* Dot Transformations on Hover */
        .icon-container:hover .dot.dot-1 {
          transform: translate(4px, 4px);
        }
        .icon-container:hover .dot.dot-2 {
          transform: translate(-4px, 4px);
        }
        .icon-container:hover .dot.dot-3 {
          transform: translate(4px, -4px);
        }
        .icon-container:hover .dot.dot-4 {
          transform: translate(-4px, -4px);
        }

        /* Fading out the other dots except for the first */
        .icon-container:hover .dot:not(.dot-1) {
          opacity: 0;
          transition: transform 0.5s ease, opacity 0.1s ease 0.45s;
        }
      `}</style>
    </div>
  );
};

export default MenuHoverAnimationOpen;
