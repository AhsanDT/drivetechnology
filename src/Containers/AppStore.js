import React from "react";
import Image from "next/image";

function AppStore({ data }) {
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

  return (
    <div
      className="relative App-store-main h-min md:pb-10 pb-10 overflow-hidden pt-[30px]"
      style={backColor}
    >
      <div
        className={`${data.display}   flex justify-end relative  top-[20px] lg:top-[100px] z-[99999] hidden md:flex ml-auto mr-20`}
      >
        <Image
          src={data.logo}
          className={`h-[${data.height}] w-[${data.width}]`}
          data-aos="fade-up"
        />
      </div>
      {/* <div className=""> */}
      <h1
        // data-aos="zoom-in"
        className={`${data.numberStyling} xl:text-[580px] lg:text-[500px] md:text-[450.03px] text-[250px] font-bold tracking-[5.85px] font-gilroy text-cyan-700`}
        style={NumbersMain}
      >
        {data.numberStyle}
      </h1>
      {/* </div> */}

      <div className="h-[100%] z-[99]">
        <div className="flex justify-center flex-col items-center ">
          <div className="flex">
            <h1
              // data-aos="fade-up"
              className="lg:text-[60px] pb-10 z-[99] lg:pb-0 sm:text-[40px]  text-[27px] font-extrabold font-gilroy tracking-wide text-center"
              style={textColor}
            >
              {data.appStore}
            </h1>
          </div>

          <div className="flex items-center justify-center flex-wrap mt-4 md:flex-nowrap z-[99]  
           my-auto gap-[20px] w-5/6">
            {data.images.map((image, index) => (
              <div
                key={index}
                 data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
              >
                <Image src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
