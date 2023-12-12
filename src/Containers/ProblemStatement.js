import React from "react";
import Image from "next/image";

function ProblemStatement({ data }) {
  const backColor = {
    background: `var(--Background-Peacemaker, ${data.backgroundColor})`, // Use the passed background color prop
  };

  const NumbersMain = {
    backgroundImage: `${data.numberColor}`,
    "background-clip": "text",
    "-webkit-background-clip": "text",
    color: "transparent",
  };

  const textColor = {
    color: data.textColor,
  };
  const  textColor2 = {
    color: data.textColor,
    textAlign: data.alignment,
  };

  return (
    <div className="w-[100%] py-4 xl:py-10 px-[20px] lg:px-20 Problemstatement-main" style={backColor}>


      <div className={`${data.display} hidden md:block mr-auto mr-20`}>
      <Image src={data.logo} className={`h-[${data.height}] w-[${data.width}]`}/>
     </div>


      <div className="h-[0px] bg-red-900">
        <h1 
        // data-aos="zoom-in" 
        className="lg:text-[350px] relative top-[-100px] tracking-[5.85px] font-gilroy text-cyan-700 font-bold bottom-[20px] text-[250px]  " style={NumbersMain}>
          {data.sectionNumber}
        </h1>
        <div className="relative h-[0px] top-[-300px]">
          <Image src={data.circle1} className="w-[30%] 2xl:w-[300px] mx-auto" />
        </div>
      </div>
      <div className="flex items-center md:mt-8 justify-between flex-col lg:flex-row gap-[70px] w-[100%]">
        <div data-aos="fade-left">
          <h1 className=" text-3xl font-bold font-gilroy" style={textColor}>
            {data.title}
          </h1>
          <i>
            <p className="text-lg xl:w-[] pt-2 font-gilroy tracking-tight" style={textColor}>{data.description1}</p>
          </i>
        </div>
          <Image data-aos="fade-right" src={data.image1} className="w-[auto] h-[auto] lg:w-[300px] lg:h-[300px] object-contain" />
      </div>

      <div className="flex items-center flex-col-reverse justify-between flex-col lg:flex-row gap-[60px] mt-[50px]">
          <Image data-aos="fade-left" src={data.image2} className="w-[auto] h-[auto] lg:w-[300px] lg:h-[300px] object-contain" />
        <div data-aos="fade-right" className="">
          <h1 className="text-3xl mt-4 lg:mt-0 lg:text-right font-bold font-gilroy" style={textColor}>{data.title2}</h1>
          <i>
            <p className={`${ data.description4Style} font-medium font-gilroy tracking-tight text-lg pt-2 `} style={textColor2}>{data.description2}</p>
            <p className={`${ data.description4Style} font-medium font-gilroy tracking-tight text-lg pt-2 `} style={textColor2}>{data.description3}</p>
            <p className={`${ data.description4Style} font-medium font-gilroy tracking-tight text-lg pt-2 `} style={textColor2}>{data.description4}</p>
          </i>
        </div>
      </div>

    </div>
  );
}

export default ProblemStatement;