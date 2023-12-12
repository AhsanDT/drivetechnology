// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../assets/logo1.png";
// import Button from "../UI/Button";
// import FooterIcon from "./FooterIcon";
// import MobileFooter from "./MobileFooter";

// const Footer = ({ services, developments }) => {
//   return (
//     <footer className="z-[22] w-full bg-[#20274D] md:px-[80px] px-[30px] lg:px-[80px] py-[40px] lg:py-[10px] lg:pb-[30px]  2xl:grid justify-center relative z-[1] ">
//       <div className="w-full xl:ma x-w-[1440px] ">
//         <div className="pt-[83px]  gap-x-[32px]  xl:gap-x-[40px] hidden lg:flex min-h-[298px]  border-b border-b-[#6F6F6F] pb-[20px]">
//           <div className="flex flex-col gap-y-[16px] items-center">
//             <div className="flex gap-x-[16px] items-center">
//               <FooterIcon
//                 icon="fa-brands fa-facebook-f"
//                 link="https://www.facebook.com/drivetechnologiesuae?_rdc=1&_rdr"
//                 className="bg-[#3B5998] text-[18px] "
//               />
//               <FooterIcon
//                 icon="fa-brands fa-twitter"
//                 link="https://twitter.com/DriveTechuae"
//                 className="bg-[#2DAAE1] text1814]"
//               />
//               <FooterIcon
//                 icon="fa-brands fa-linkedin-in"
//                 link="https://www.linkedin.com/company/drivetechnologiesuae/"
//                 className="bg-[#007BB6] text-[18px] "
//               />
//               {/* <FooterIcon icon="fa-brands fa-instagram" link="#" className="icon-grad" />
//               <FooterIcon
//                 icon="fa-brands fa-pinterest"
//                 link="#"
//                 className="bg-[#CD1E25] text-[18px]  text-[#37373B]"
//               /> */}
//             </div>
//             <Link href={"/"} className="flex gap-x-2 items-end">
//               <div className="mt-2 w-[135.61px]">
//                 <Image src={logo} alt="img" className=""/>
//               </div>
//             </Link>
//           </div>
//           <div className="flex flex-col gap-y-[24px] text-white text-[14px] font-roboto">
//             <span>
//               Email:{" "}
//               <span className="text-[#4169E1] hover:underline">
//                 <a href="mailto:info@drivetechnology.co">
//                   info@drivetechnology.co
//                 </a>
//               </span>
//             </span>
//             <span className="w-[230px]">
//               Phone:{" "}
//               <span>
//                 <a
//                   href="tel:+1 (888) 910 8298 92188"
//                   className=" text-gray-200 hover:underline"
//                 >
//                   +1 (888) 910 8298 92188{" "}
//                 </a>
//               </span>
//             </span>
//             <Link href={"/startproject"}>
//               <Button className="w-fit font-roboto">Start a Project</Button>
//             </Link>
//           </div>
//           <div className="flex gap-x-[32px]  xl:gap-x-[64px] text-white text-[12px] font-roboto">
//             <div className="">
//               <ul className="flex flex-col gap-y-[24px]">
//                 <Link href={"/services"}>
//                   {" "}
//                   <li className="font-poppins text-[16px]">
//                     Services
//                   </li>
//                 </Link>
//                 {services?.slice(0, 10)?.map((service, ind) => (
//                   <Link
//                     href={`/services/#${service?.attributes?.title?.replaceAll(
//                       " ",
//                       "-"
//                     )}`}
//                     key={ind}
//                   >
//                     <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
//                       {service?.attributes?.title}
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             </div>

//             <div className="xl:w-[150px]">
//               <ul className="flex flex-col gap-y-[24px]">
//                 <Link href={"/development"}>
//                   {" "}
//                   <li className="font-poppins text-[16px]">
//                     Development
//                   </li>
//                 </Link>
//                 {developments?.slice(0, 10)?.map((development, ind) => (
//                   <Link
//                     href={`/development/#${development?.attributes?.title?.replaceAll(
//                       " ",
//                       "-"
//                     )}`}
//                     key={ind}
//                   >
//                     <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
//                       {development?.attributes?.title}
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <ul className="flex flex-col gap-y-[24px]">
//                 <Link href={"/blogs"}>
//                   {" "}
//                   <li className="font-poppins text-[16px]">
//                     Resources
//                   </li>
//                 </Link>

//                 <Link href={"/blogs"}>
//                   {" "}
//                   <li className="text-[#ffffff] text-opacity-[50%] hover:underline font-normal">
//                     Blogs
//                   </li>
//                 </Link>
//               </ul>
//             </div>

//             <div>
//               <ul className="flex flex-col gap-y-[24px]">
//                 <li className=" font-poppins text-[16px]">Legal</li>
//                 <Link href={"/privacypolicy"}>
//                   {" "}
//                   <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
//                     Privacy Policy
//                   </li>
//                 </Link>
//                 <Link href={"/termsandconditions"}>
//                   {" "}
//                   <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
//                     Terms & Condition
//                   </li>
//                 </Link>
//                 <Link href={"/cookiepolicy"}>
//                   {" "}
//                   <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
//                     Cookie Policy
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* <div className="text-[12px] text-[#6F6F6F] font-jakarta font-medium hidden lg:flex justify-end gap-x-[160px] py-[30px]">
//           <Link href={"/privacypolicy"} className="hover:underline">
//             <span> Privacy Policy</span>
//           </Link>
//           <Link href={"/termsandconditions"} className="hover:underline">
//             <span>Terms of Use</span>
//           </Link>
//           <span>Copyright 2023 DriveTech. All Rights Reserved.</span>
//         </div> */}
//       </div>

//       {/* mobile footer */}
//       <div className="lg:hidden text-[16px] flex flex-col gap-y-[20px] text-[#A3A3A3] font-jakarta">
//         <MobileFooter />
//       </div>

//       <div className="md:flex gap-8 lg:gap-12 xl:gap-20 mt-4 sm:justify-end">

//         <Link href={"/termsandconditions"}>
//           <li className="text-[#ffffff] list-none hover:underline mb-4  lg:mb-0 md:text-right text-white text-base font-roboto leading-[18.67px]">
//           Privacy Policy
//           </li>
//         </Link>

//         <Link href={"/termsandconditions"}>
//           <li className="text-[#ffffff]  list-none hover:underline mb-4 lg:mb-0  md:text-right text-white text-base font-roboto leading-[18.67px]">
//           Terms of Use
//           </li>
//         </Link>

//         <Link href={"/termsandconditions"}>
//           <li className="text-[#ffffff]  list-none hover:underline mb-4 lg:mb-0  md:text-right text-white text-base font-roboto leading-[18.67px]">
//           Copyright 2023 DriveTech. All Rights Reserved.
//           </li>
//         </Link>

//       </div>

//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo1.png";
import Button from "../UI/Button";
import FooterIcon from "./FooterIcon";
import MobileFooter from "./MobileFooter";

const Footer = ({ services, developments }) => {
  return (
    <footer className="z-[22] w-full bg-[#20274D] md:px-[80px] px-[30px] lg:px-[80px] py-[40px] lg:py-[10px] lg:pb-[30px]  2xl:grid justify-center relative z-[1] ">
      <div className="w-full xl:ma x-w-[1440px] ">
        <div className="pt-[83px]  gap-x-[32px]  xl:gap-x-[40px] hidden lg:flex min-h-[298px]  border-b border-b-[#6F6F6F] pb-[20px]">
          <div className="flex flex-col gap-y-[16px] items-center">
            <div className="flex gap-x-[16px] items-center">
              <FooterIcon
                icon="fa-brands fa-facebook-f"
                link="https://www.facebook.com/drivetechnologiesuae?_rdc=1&_rdr"
                className="bg-[#3B5998] text-[18px] "
              />
              <FooterIcon
                icon="fa-brands fa-twitter"
                link="https://twitter.com/DriveTechuae"
                className="bg-[#2DAAE1] text1814]"
              />
              <FooterIcon
                icon="fa-brands fa-linkedin-in"
                link="https://www.linkedin.com/company/drivetechnologiesuae/"
                className="bg-[#007BB6] text-[18px] "
              />
              {/* <FooterIcon icon="fa-brands fa-instagram" link="#" className="icon-grad" />
              <FooterIcon
                icon="fa-brands fa-pinterest"
                link="#"
                className="bg-[#CD1E25] text-[18px]  text-[#37373B]"
              /> */}
            </div>
            <Link href={"/"} className="flex gap-x-2 items-end">
              <div className="mt-2 w-[135.61px]">
                <Image src={logo} alt="img" className="" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-y-[24px] text-white text-[14px] font-roboto">
            <span>
              Email:{" "}
              <span className="text-[#4169E1] hover:underline">
                <a href="mailto:info@drivetechnology.co">
                  info@drivetechnology.co
                </a>
              </span>
            </span>
            <span className="w-[230px]">
              Phone:{" "}
              <span>
                <a
                  href="tel:+1 (888) 910 8298 92188"
                  className=" text-gray-200 hover:underline"
                >
                  +1 (888) 910 8298 92188{" "}
                </a>
              </span>
            </span>
            <Link href={"/startproject"}>
              <Button className="w-fit font-roboto py-[6px]">Start a Project</Button>
            </Link>
          </div>
          <div className="flex gap-x-[32px]  xl:gap-x-[64px] text-white text-[12px] font-roboto">
            <div className="xl:w-[112px]">
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"/services"}>
                  {" "}
                  <li className="font-poppins text-[16px]">Services</li>
                </Link>
                {/* <Link href={"/service"}>
                  <li className="w-[95px] text-[#ffffff] text-opacity-[50%] hover:underline">
                    Digital Marketing Services
                  </li>
                </Link>
                <Link href={"/service"}>
                <ul>
                  <li className="w-[70px] text-[#ffffff] text-opacity-[50%] hover:underline">
                    Back Office Services
                  </li>
                  </ul>
                </Link> */}
                {services?.slice(0, 10)?.map((service, ind) => (
                  <Link
                    href={`/services/#${service?.attributes?.title?.replaceAll(
                      " ",
                      "-"
                    )}`}
                    key={ind}
                  >
                    <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                      {service?.attributes?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="xl:w-[112px]">
              <ul className="flex flex-col gap-y-[24px]">
                 <Link href={"/development"}>
                  {" "}
                  <li className="font-poppins text-[16px]">Development</li>
                </Link>
                {/* <Link href={"/development"}>
                  <li className="w-[80px] text-[#ffffff] text-opacity-[50%] hover:underline">
                    Mobile & Web Development
                  </li>
                </Link>
                <Link href={"/development"}>
                  <li className="w-[80px] text-[#ffffff] text-opacity-[50%] hover:underline">
                    AI & Machine Learning
                  </li>
                </Link>  */}
                {developments?.slice(0, 10)?.map((development, ind) => (
                  <Link
                    href={`/development/#${development?.attributes?.title?.replaceAll(
                      " ",
                      "-"
                    )}`}
                    key={ind}
                  >
                    <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                      {development?.attributes?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <Link href={"/blogs"}>
                  {" "}
                  <li className="font-poppins text-[16px]">Resources</li>
                </Link>

                <Link href={"/blogs"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline font-normal">
                    Blogs
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-y-[24px]">
                <li className=" font-poppins text-[16px]">Legal</li>
                <Link href={"/privacypolicy"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Privacy Policy
                  </li>
                </Link>
                <Link href={"/termsandconditions"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Terms & Condition
                  </li>
                </Link>
                <Link href={"/cookiepolicy"}>
                  {" "}
                  <li className="text-[#ffffff] text-opacity-[50%] hover:underline">
                    Cookie Policy
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-[12px] text-[#6F6F6F] font-jakarta font-medium hidden lg:flex justify-end gap-x-[160px] py-[30px]">
          <Link href={"/privacypolicy"} className="hover:underline">
            <span> Privacy Policy</span>
          </Link>
          <Link href={"/termsandconditions"} className="hover:underline">
            <span>Terms of Use</span>
          </Link>
          <span>Copyright 2023 DriveTech. All Rights Reserved.</span>
        </div> */}
      </div>

      {/* mobile footer */}
      <div className="lg:hidden text-[16px] flex flex-col gap-y-[20px] text-[#A3A3A3] font-roboto">
        <MobileFooter />
      </div>

      <div className="md:flex gap-8 lg:gap-12 xl:gap-20 mt-4 sm:justify-end">
        <Link href={"/termsandconditions"}>
          <li className="text-[#ffffff list-none hover:underline mb-4  lg:mb-0 md:text-right text-white text-base font-roboto leading-[18.67px]">
            Privacy Policy
          </li>
        </Link>

        <Link href={"/termsandconditions"}>
          <li className="text-[#ffffff] list-none hover:underline mb-4 lg:mb-0  md:text-right text-white text-base font-roboto leading-[18.67px]">
            Terms of Use
          </li>
        </Link>

        <Link href={"/termsandconditions"}>
          <li className="text-[#ffffff] list-none hover:underline mb-4 lg:mb-0  md:text-right text-white text-base font-roboto leading-[18.67px]">
            Copyright 2023 DriveTech. All Rights Reserved.
          </li>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
