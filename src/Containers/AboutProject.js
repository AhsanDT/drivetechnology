import React from "react";
import Image from "next/image";

function AboutProject({ data }) {
  const backColor = {
    background: `var(--Background-Peacemaker, ${data.backgroundColor})`, // Use the passed background color prop
  };

  const NumbersMain = {
    backgroundImage: `${data.numberColor}`,
    "background-clip": "text",
    "-webkit-background-clip": "text",
    color: "transparent",
  };

  const textColors = {
    color: data.textColor,
  };

  const logoStyle = {
    width: data.logoWidth,
    height: data.logoHeight,
  };
  const aboutStyle = {
    justifyContent: data.aboutjustify,
  };

  return (
    <div className="AboutProject-main 3xl:pb-12 lg:px-4" style={backColor}>
      <div className="lg:flex lg:gap-4 lg:pt-[0px] py-0 items-center">
        {/* About Project Mobile Section Structure Starts Here */}
        <div className="w-[full] lg:w-[50%] ">
          <div className="flex justify-center">
            <Image
              data-aos="flip-up"
              src={data.mobileImage}
              className="pt-8 mx-2 h-[300px]  lg:h-[600px] z-[96] object-contain"
            />
          </div>
        </div>
        {/* About Project Mobile Section Structure Ends Here */}

        {/* Line Images Structure starts here */}
        <div className="hidden lg:flex flex-col pt-12  3xl:pb-20 3xl:h-[auto] h-[100vh]">
          <div className="">
            <Image
              data-aos="fade-up"
              src={data.lineImg1}
              className="h-[180px]"
            />
          </div>
          <div className="mt-[70px]">
            <Image
              data-aos="flip-up"
              src={data.lineImg2}
              className=" h-[33.33px]"
            />
          </div>
          <div className="mt-[131.75px]">
            <Image
              data-aos="flip-up"
              src={data.lineImg2}
              className=" h-[33.33px]"
            />
          </div>
          {/* <Image 
          data-aos="fade-down" 
          src={data.lineImg3} className='mt-28' /> */}
        </div>
        {/* Line Images Structure starts here */}

        {/* AboutProject content structure starts here */}
        <div className=" relative  w-[full] lg:w-[50%]">
          <div className="">
            {/* <h1  className='lg:text-[350px] text-end text-[230px] lg:ml-12 xl:ml-52  font-bold bottom-[20px] Numbers-main' style={NumbersMain}>{data.sectionNumber}</h1> */}
            <h1
               data-aos="zoom-in"
              // className='lg:text-[350px] text-center font-gilroy text-cyan-700 font-bold bottom-[40px] text-[240px] bg-red-300 ' style={NumbersMain}>{data.sectionNumber}</h1>
              className="lg:text-[400px] xl:text-[485.73px] tracking-[5.85px] text-center font-gilroy text-cyan-700 font-bold  text-[240px]   w-[100%]  absolute top-[-9%]"
              style={NumbersMain}
            >
              {data.sectionNumber}
            </h1>
          </div>

          <div className="relative font-bold pt-6">
            <div
              // className='flex md:justify-end justify-start lg:ml-auto lg:pr-8 my-4 w-[245px]'>
              className={` ${data.peaceMakerLogoStyle} flex w-[100%]`}
            >
              <Image
                data-aos="flip-right"
                src={data.peaceMakerLogo}
                className="mt-0 object-contain"
                style={logoStyle}
              />
            </div>
            <div className="mt-8 pb-9">
              <div className="" >
                <h1
                  data-aos="fade-right"
                  className={` ${data.aboutHeadingStyle} text-white font-gilroy font-bold text-3xl sm:text-6xl tracking-wide` }
                  style={textColors}
                >
                  {data.heddingText1}
                  <br className="hidden sm:block" /> {data.heddingText2}
                </h1>
              </div>
              <i>
                <p
                  data-aos="fade-left"
                  className={` ${data.descriptionStyle} font-medium pt-4 `}
                  style={textColors}
                >
                  {data.description}
                </p>
              </i>

              <div className={` ${data.toolStyle} flex gap-1 items-center  pt-[40px] `}>
                <h1
                  data-aos="fade-right"
                  style={textColors}
                  className="text-white text-[20px] font-bold font-gilroy tracking-tight"
                >
                  {data.tools} :
                </h1>

                {data.toolLogos &&
                  data.toolLogos.map((logo, index) => (
                    <Image
                      src={logo}
                      alt={`Tool ${index + 1}`}
                      className="h-[20px] sm:w-[auto] w-[21px] lg:h-[40px] mx-2 object-contain"
                      key={index}
                      data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} // Example: alternating fade-right and fade-left
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* AboutProject content structure Ends here */}
      </div>
    </div>
  );
}

export default AboutProject;
