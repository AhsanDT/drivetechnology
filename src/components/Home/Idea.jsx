import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Idea = ({ title }) => {
  return (
    <section className="w-full border-b border-b-[#747474] lg:border-none  bg-[#37373B] flex justify-center px-[30px] md:px-[80px] xl:px-[250px] py-[38px] h-[223px] top-[4px] relative z-[122]">
      <div className={`box linear-grad hidden lg:block `}></div>
      <div className=" w-full xl:max-w-[1140px] flex flex-col gap-y-[14px] lg:flex-row justify-between lg:items-center ">
        <div className="flex flex-col ">
          <span className="font-oswald text-[24px] lg:text-[50px] font-bold text-[#ffffff] uppercase">
            Have an idea?
          </span>
          <span className="font-oswald text-[24px] lg:text-[50px] font-light text-[#ffffff] uppercase">
            Tell us about it.
          </span>
        </div>
        <div>
          <Link href="/startproject">
            <Button className="hidden md:block w-fit">{title}</Button>
          </Link>
          <Link href="/startproject">
            <Button className=" md:hidden w-fit">Start a Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Idea;
