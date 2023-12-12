// import React from "react";
// import Image from "next/image";

// function DualImageSectionTow({ backGroundImg, Img1, Img2, oneHeading, paraOne, paraTow, reverse }) {
//   return (
//     <div data-aos="zoom-in" className={` w-full flex items-center justify-center flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
//       <div className="bg-white w-[100%] h-[100%] md:h-[500px] lg:h-[640px]">
//         <div className="w-[100%] h-[100%] flex items-center justify-center flex-col p-[20px]">
//           <Image data-aos="flip-left" src={Img2} alt="" className="mb-[20px]" />
//           <div>
//           <div className="">
//             <h1 data-aos="flip-down" className="font-['Poppins'] w-[100%] md:w-[420px] sm:p-[10px] text-[#20274D] font-bold tracking-wide text-[30px] md:text-[40px] lg:text-[50px] mb-[10px]">
//                 {oneHeading}
//             </h1>
//         </div>
//             <p data-aos="flip-down" className="font-['Roboto'] text-[#20274D] text-sm mb-[10px] w-[320px]">{paraTow}</p>
//           </div>
//         </div>
//       </div>

//       <div className="relative w-[100%] h-[400px] md:h-[500px] lg:h-[640px]">
//         <Image src={backGroundImg} alt="img" className=" w-[100%] h-[100%]" />
//         <div className="absolute top-[0] flex items-center justify-center h-[100%] w-[100%] flex-col p-[20px]">
//           <Image data-aos="flip-right" src={Img1} alt="" className="my-[20px] h-[200px] sm:h-[300px] object-contain	" />
//           <p data-aos="fade-up" className="text-white font-['Roboto'] text-sm mb-[10px] w-[320px]">{paraOne}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DualImageSectionTow;

import React, { useState, useEffect } from "react";
import Image from "next/image";

function DualImageSectionTow({
  firstImg,
  backGroundImg,
  Img1,
  Img2,
  oneHeading,
  secHeading,
  paraOne,
  paraTow,
  reverse,
  marginBottom,
}) {
  const [isAfterSmBreakpoint, setIsAfterSmBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAfterSmBreakpoint(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const margin = {
    marginBottom: isAfterSmBreakpoint ? "0px" : marginBottom,
  };

  return (
    <div
      className={` w-full flex items-center justify-center flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div data-aos="flip-right" className="cardMedia bg-white  relative w-[100%] z-[22] h-[100%] md:h-[500px] lg:h-[640px] ">
        <Image src={firstImg} alt="img" className=" w-[100%] h-[100%]" />
        <div className="absolute top-[0] w-[100%] h-[100%] flex items-center justify-end flex-col p-[20px]">
          <div className="relative h-full w-full flex items-center justify-center flex-col">
            <div className="w-full md:w-[99%] lg:w-full xl:w-[85%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1
                className="font-['Poppins'] sm:p-[10px] text-[#20274D]
                 font-bold tracking-wide text-[25px] md:text-[30px] lg:text-[45px]"
              >
                {oneHeading}
              </h1>
              <h1
                className="font-['Poppins'] w-full sm:p-[10px] text-[#20274D]
                 font-bold tracking-wide text-[25px] md:text-[30px] lg:text-[45px]"
              >
                {secHeading}
              </h1>
            </div>
            {/* <div style={margin} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
            mb-[0px] sm:mb-[] bg-[black] w-full sm:w-fit"> */}
                  <div style={margin} className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isAfterSmBreakpoint ? 'mb-0 sm:mb-4' : ''} w-full lg:w-fit`}>
              <p data-aos="fade-right" className="font-roboto text-[#fff] text-sm mb-[10px] lg:w-[400px] tracking-widest">
                {paraTow}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="flip-left" className="cardMedia relative z-[22] w-[100%] h-[400px] md:h-[500px] lg:h-[640px]">
        <Image src={backGroundImg} alt="img" className=" w-[100%] h-[100%]" />
        <div className="absolute top-[0] flex items-center justify-end h-[100%] w-[100%] flex-col p-[20px] ">
          <p
            data-aos="fade-left"
            className="text-white font-roboto tracking-widest text-sm mb-[10px] w-[100%] lg:w-[410px] mb-[0px] sm:mb-[50px]"
          >
            {paraOne}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DualImageSectionTow;
