// // import React from "react";
// // import Image from "next/image";

// // function Footer({ footData }) {

// //   const backColor = {
// //     background: `var(--Background-Peacemaker, ${footData.backgroundColor})`, // Use the passed background color prop
// //   };

// //   const fbackColor = {
// //     background: `var(--Background-Peacemaker, ${footData.backgroundColor})`, // Use the passed background color prop
// //   };

// //   const textColor = {
// //     color: footData.footertextColor,
// //   };

// //   return (
// //     <div className='Footer-main lg:pt-2' style={backColor}>
// //       <div >

// //         <div className='md:flex py-10 lg:py-2 lg:h-80 xl:h-52  px-2 '>

// //           <div className='md:block justify-center'>
// //             <Image data-aos="flip-left" src={footData.Dtlogo} className='w-[70px]  md:pt-16 lg:pt-32 lg:w-[150px] md:ml-20 mx-auto lg:ml-20' />
// //             <div className='relative h-[0px] top-[-20px] lg:top-[-100px]'>
// //               <Image src={footData.circle} className='h-[200px] object-contain' />
// //             </div>
// //           </div>

// //           <div className="w-[100%] flex justify-center lg:justify-start lg:pt-16 z-[9999]">
// //             <div>
// //               <Image data-aos="fade-up" src={footData.PMlogo} className='flex mx-auto object-contain my-4' style={logoStyle} />
// //               <p data-aos="fade-down" style={textColor} className="font-inter text-xl lg:text-3xl leading-normal font-['Inter'] tracking-wide text-center">Book a meeting to learn more about our services</p>
// //               <u data-aos="fade-down" style={textColor} className="flex justify-center lg:text-lg lg:pt-1 font-['Inter']"><a href="#">https://calendly.com/dtdesign</a></u>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="">
// //           <div className="h-[0px]">
// //             <Image src={footData.layer1} className="w-[100%]" />
// //           </div>

// //           <div className='w-[100%] relative bottom-[-17px]   sm:bottom-[-30px] lg:bottom-[-50px] 2xl:bottom-[-80px]'>
// //             <Image src={footData.layer2} className='w-[100%] object-contain'/>
// //             <div className='h-[0px] text-white relative pr-2 top-[-37px] xl:pr-12 sm:top-[-60px] md:top-[-90px] lg:top-[-130px] md:pr-4'>
// //               <p className='text-end text-[12px] sm:font-medium md:text-2xl lg:text-4xl font-gilroy font-bold'>www.@drivetechnology.co</p>
// //               <p className="text-end text-[12px] lg:text-xl lg:pt-1 font-['Inter']">Phone: +1 (888) 910 8298 92188</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Footer;

// import React from 'react'

// function Footer({ footData }) {
//   return (
//       <div className={`${footData.footerMain}   relative  overflow-hidden `} 
//       style={backColor}
//       >

//         <div className='md:flex '>

//           <div className='md:flex ml-[90px]  items-center absolute h-[100%] z-[99]'>
//             <Image 
//             data-aos="flip-left" 
//             src={footData.Dtlogo} className='' />
//             {/* src={footData.Dtlogo} className='w-[70px]  md:pt-16 lg:pt-32 lg:w-[150px] md:ml-20 mx-auto lg:ml-20' /> */}
//           </div>
//             <div className={`${footData.circleStyle}  `}>
//               <Image src={footData.circle} className='h-[100%] object-contain' />
//             </div>

//             <div className={`${footData.content} absolute flex flex-col items-center     w-[100%] z-[99]`} >
//               <Image 
//               data-aos="fade-up" 
//               src={footData.PMlogo} className=' mb-[16px]  object-contain' />
//               <p 
//               data-aos="fade-down" 
//               style={textColor} className="font-inter text-xl lg:text-[35px] leading-normal font-['Inter'] ">Book a meeting to learn more about our services</p>
//               <u 
//               data-aos="fade-down" 
//               style={textColor} className=" lg:text-[32px] font-normal lg:mt-[15px] font-['Inter'] tracking-tight  "><a href="#">https://calendly.com/dtdesign</a></u>
//             </div>
//         </div>
        

//           <div className={`${footData.footerImg} `} >
//             <Image src={footData.layer2} className='w-[100%]'/>
//             <div className={` ${footData.hidden}   h-[0px]  text-white relative pr-2 top-[-37px] xl:pr-12 sm:top-[-60px] md:top-[-90px] lg:top-[-130px] md:pr-4`}>
//               <p className='text-end text-[12px] sm:font-medium md:text-2xl lg:text-4xl drop-shadow-lg font-gilroy font-bold'>www.@drivetechnology.co</p>
//               <p className="text-end text-[12px] lg:text-xl lg:pt-1 font-['Inter']">Phone: +1 (888) 910 8298 92188</p>
//             </div>
//           </div>
//       </div>
//   );
// }

// export default Footer


import React from "react";
import Image from "next/image";

function Footer({ footData }) {

  const backColor = {
    background: `var(--Background-Peacemaker, ${footData.backgroundColor})`, // Use the passed background color prop
  };

  const fbackColor = {
    background: `var(--Background-Peacemaker, ${footData.backgroundColor})`, // Use the passed background color prop
  };

  const textColor = {
    color: footData.footertextColor,
  };

  return (
      <div className={`${footData.footerMain}  relative overflow-hidden `} 
      style={backColor}
      >

        <div className='flex '>

          <div className='flex ml-[90px] items-center absolute h-[100%] z-[99]'>
            <Image 
            // data-aos="flip-left" 
            src={footData.Dtlogo} className={`${footData.fLogo}`} />
            {/* src={footData.Dtlogo} className='w-[70px]  md:pt-16 lg:pt-32 lg:w-[150px] md:ml-20 mx-auto lg:ml-20' /> */}
          </div>
            <div className={`${footData.circleStyle}  `}>
              <Image src={footData.circle} className='h-[100%] object-contain' />
            </div>

            <div className={`${footData.content} absolute flex flex-col items-center     w-[100%] z-[99]`} >
              <Image 
              // data-aos="fade-up" 
              src={footData.PMlogo} className={ `${footData.logo1} mb-[16px]  object-contain`} />
              <p 
              // data-aos="fade-down" 
              style={textColor} className={ `${footData.paragraph} font-inter xl:text-[35px] leading-normal font-['Inter'] `}>Book a meeting to learn more about our services</p>
              <u 
              // data-aos="fade-down" 
            style={textColor} className={` ${footData.pLink } xl:text-[32px] font-normal lg:mt-[15px] font-['Inter'] tracking-tight `} ><a href="#">https://calendly.com/dtdesign</a></u>
            </div>
        </div>
        

          <div className={`${footData.footerImg} `} >
            <Image src={footData.layer2} className='w-[100%] 2xl:h-[400px]'/>
            <div className={` ${footData.hidden}   h-[0px]  text-white relative pr-2 top-[-37px] xl:pr-12 sm:top-[-60px] md:top-[-90px] lg:top-[-130px] md:pr-4`}>
              <p className={`text-end text-[12px] sm:font-medium md:text-2xl lg:text-4xl drop-shadow-lg font-gilroy font-bold ${footData.link}`}>www.@drivetechnology.co</p>
              <p className= {`text-end text-[12px] lg:text-xl lg:pt-1 font-['Inter']${footData.num}`} >Phone: +1 (888) 910 8298 92188</p>
            </div>
          </div>
      </div>
  );
}

export default Footer;