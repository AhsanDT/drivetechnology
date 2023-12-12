// import Image from "next/image";
// import { useRouter } from "next/router";
// import WhiteLoader from "../UI/WhiteLoader";
// import bgImage from '../../assets/bg-images/service.png'

// const Partnership = ({ partners, className, getPartners, partnerType }) => {
//   const { route } = useRouter();
//   return (
//     <section
//       data-aos="flip-up"
//       className={`bg-[#1C274D] ${
//         route === "/" ? "py-[50px] pb-[40px]" : "mb-[105px] md:mb-[70px] lg:mb-[30px] pt-10 lg:pt-32"
//       } w-full relative flex justify-center z-[1] ${className}`}
//     >
//            <div className={`absolute top-[-600px]`}>
//             <Image src={bgImage} alt="image" />
//           </div>
//       <div className="w-full xl:max-w-[1440px] flex flex-col gap-y-[16px]  px-[30px]  md:px-[80px]">
//         <h1
//           data-aos="fade-left"
//           className="text-[32px] text-white lg:text-[48px] font-['Poppins'] font-bold text-[#282829] md:text-center"
//         >
//           Partnership
//         </h1>

//         <p
//           data-aos="fade-right"
//           className="mt-4 text-white text-[16px] font-['Roboto'] text-[#000000] text-opacity-[70%] md:text-center mx-auto lg:w-[800px]"
//         >
//           The best thing about DriveTech is it values its partnership with the
//           intention of making everyone <br className="hidden md:block"/>succeed.
//         </p>
//         <div className="mt-[30px] w-full">
//           <ul className="text-[10px] sm:text-[14px] md:text-[16px] font-oswald font-bold gap-x-[8px] flex lg:gap-x-[40px] justify-center items-center">
//             <button className="md:w-[280px] bg-white button w-full">
//             <li
//               data-aos="fade-left"
//               // className={`${
//               //   partnerType == "core"
//               //     ? "text-white bg-black"
//               //     : "text-black bg-white hover:text-white  hover:bg-black"
//               // }  w-full md:w-[208px]  text-center px-[2 0px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}

//               className="font-['Roboto'] text-[#20274D] py-[12px] hover:text-white duration-300 ease-in-out 
//                                w-full   text-center sm:px-[20px] cursor-pointer"
//               onClick={() =>  getPartners("core")}
//             >
//               CORE PARTNERS
//             </li>
//             </button>
//             <button  className="bg-none w-full hover:text-[#20274D] button2 md:w-[280px]">
//             <li
//               data-aos="fade-right"
//               // className={`${
//               //   partnerType == "ecological"
//               //     ? "text-white bg-black"
//               //     : "text-black bg-white hover:text-white  hover:bg-black"
//               // }   w-full md:w-[208px] text-center  px-[8px] lg:px-[16px] py-[8px] cursor-pointer border border-black`}
//               onClick={() => getPartners("ecological") }
//               className="font-['Roboto'] text-[white] sm:px-[20px] hover:text-[#20274D] py-[12px] w-[280px] w-full text-center px-[] lg:px-[] py-[] ease-in-out duration-300 cursor-pointer"
//             >
//               ECOLOGICAL PARTNERS
//             </li>
//             </button>
//           </ul>
//         </div>
//         <div
//           className={`flex gap-x-[80px] flex-wrap justify-center gap-y-[21px] lg:gap-y-[40px] mt-[30px]  ${className}`}
//         >
//           {/* <Partnercard/>  */}
//           {partners !== undefined ? (
//             partners?.length ? (
//               partners
//                 .slice(0, route === "/" ? 3 : partners.length)
//                 .map((partner, ind) => {
//                   return (
//                     <div>
//                       <div
//                         key={ind}
//                         className="flex-wrap sm:flex-nowrap flex gap-8 justify-center items-center mt-20"
//                       >
//                         <div data-aos="zoom-out">
//                           <Image
//                             className=""
//                             // unoptimized={true}
//                             // src={`http://localhost:1337${partner?.attributes?.thumbnail?.data?.attributes?.url}`}
//                             src={partner?.attributes?.thumbnail?.data?.attributes?.url}
//                             alt="img"
//                             width={300}
//                             height={100}
//                           />

//                           <h1 className="text-white text-center py-4 text-2xl font-['Poppins']">
//                             {partner?.attributes?.title}
//                           </h1>
//                           <div className="flex items-center justify-center">
//                             <div className=" bg-[white] w-[68px] h-[2px] "></div>
//                             <div className=" bg-[white] w-[12px] h-[12px] rounded-full"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//             ) : (
//               <p className="text-center text-[red] my-[3rem]">
//                 !No data Founds
//               </p>
//             )
//           ) : (
//             <WhiteLoader />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partnership;
