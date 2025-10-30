import React from "react";

const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title">
      <div
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", borderColor: borderColor }}
        className={`${className} border-[0.5vw] text-nowrap opacity-0`}
      >
        <div
          style={{ backgroundColor: bg }}
          className="md:px-20 px-3 pb-5 md:pt-0 pt-3"
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
