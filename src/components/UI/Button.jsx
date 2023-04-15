import Link from "next/link";
import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`border bg-[#ffffff] px-[20px] py-[10px] text-black font-bold button ${
        className && className
      } `}
      onClick={() => (onClick ? onClick() : {})}
    >
      {children}
    </button>
  );
};

export default Button;
