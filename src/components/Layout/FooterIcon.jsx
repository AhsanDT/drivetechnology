import Link from "next/link";
import React from "react";

const FooterIcon = ({icon,link, className}) => {
  return (
    <Link href={link} className={`${className && className} text-[white] w-[32px] h-[32px] rounded-full flex justify-center items-center`} target="_blank">
      <i className={icon}></i>
    </Link>
  );
};

export default FooterIcon;
