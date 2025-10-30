import React from "react";

function Button({className,props}) {
  return (
    <div>
      <button className={`nav-item bg-red-500 px-4 py-1 hover:cursor-pointer text-[16px] text-white active:scale-90 ${className}`}>
        {props}
      </button>
    </div>
  );
}

export default Button;
