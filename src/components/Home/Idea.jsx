import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Idea = ({ title }) => {
  return (
    <section data-aos="flip-up" className="w-full border-b border-b-[#20274D] lg:border-none  bg-[#20274D] flex justify-center px-[30px] md:px-[80px] xl:px-[250px] py-[38px] h-[223px] top-[4px] relative z-[122]">
      <div className={`box linear-grad hidden lg:block `}></div>
      <div className=" w-full xl:max-w-[1140px] flex flex-col gap-y-[14px] lg:flex-row justify-between lg:items-center ">
        <div className="flex flex-col ">
          <span data-aos="fade-right" className="font-['Poppins'] text-[24px] lg:text-[50px] font-bold text-[#ffffff] uppercase">
            Have an idea?
          </span>
          <span data-aos="fade-left" className="font-poppins text-[24px] lg:text-[50px] font-light text-[#ffffff] uppercase">
            Tell us about it.
          </span>
        </div>
        <div>
          <Link href="/startproject">
            <Button data-aos="flip-right" className="hidden md:block w-fit py-[7px] font-medium">{title}</Button>
          </Link>
          <Link href="/startproject">
            <Button className=" md:hidden w-fit py-[6px] font-medium" data-aos="flip-right">Start a Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Idea;