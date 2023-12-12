// ServiceItemTow.js
import React from "react";
import Image from "next/image";

function ServiceItemTow(props) {
  return (
    <div className={`w-full flex items-center justify-center flex-col md:flex-row ${props.reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="relative w-[100%] h-[400px] md:h-[500px] ">
        <Image src={props.backGroundimg} alt="img" className="w-[100%] h-[100%]" style={{ backgroundColor: "white" }} />
        <div className="absolute top-[0] flex items-center justify-center h-[100%] w-[100%] flex-col p-[20px]">
          <div className="flex flex-col w-[280px] sm:w-[330px] lg:w-[400px]">
            <h1 className="text-white font-['Poppins'] py-[2px] font-bold text-4xl">{props.firstTitle}</h1>
            <h1 className="text-white font-['Poppins'] py-[2px] font-bold text-4xl">{props.secTitle}</h1>
            <h1 className="text-white font-['Poppins'] py-[2px] font-bold text-4xl mb-[10px]">{props.threeTitle}</h1>
            <p className="text-white text-sm mb-[10px] tracking-[1px] font-normal font-['Roboto']">
              {props.paraTitle}
            </p>
            <p className="text-white text-sm mb-[10px] tracking-[1px] font-normal font-['Roboto']">
              {props.paraTitleTow}
            </p>
            <a href="#" className="bg-white py-[5px] px-[20px] w-fit font-['Roboto']">
              {props.btnTitle}
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] md:h-[500px]">
        <Image src={props.meainImg} alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}

export default ServiceItemTow;