import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import ServiceItem from "./ServiceItem";
import Button from "../UI/Button";
import Loader from "../UI/Loader";

const Services = ({ services, name, image }) => {
  const { route } = useRouter();
  return (
    <>
      {/* {route == "/" && (
        <div className="w-full  border border-t-[10vh] border-t-[white] relative z-[2] top-[8px]  border-l-[100vw]  border-l-[#424248]"></div>
      )} */}

      <section
        className={`w-full linear-grad relative z-[3] ${
          route == "/" && "top-[-3px]"
        } top-[6px] md:px-[90px]  `}
      >
        <div
          className={`w-full xl:max-[1440px] relative ${
            route == "/" ? "top-[-30px]" : ""
          }   flex justify-center`}
        >
          <div
            className={`absolute ${route == "/" && "top-[680px]"}  ${
              route == "/services" && "top-[100px]"
            } ${route == "/development" && "top-[100px]"}  `}
          >
            <Image src={image} alt="image" />
          </div>
          <div
            className={`relative ${
              route == "/" ? "top-[116px] md:top-[100px]" : "top-[130px]"
            } `}
          >
            {route == "/" && (
              <div className="bg-[#4D4D53] text-white  flex flex-col gap-y-[30px] md:flex-row gap-x-[32px] px-[30px] md:px-[100px] py-[50px] lg:py-[75px] justify-center mx-[30px] md:mx-[unset]   xl:max-w-[1100px] mb-[100px]">
                <div className="flex flex-col  gap-y-[25px] lg:gap-y-[55px] md:w-[50%] font-roboto">
                  <h1 className="text-[32px] md:text-[48px] font-poppins font-bold">
                    Mission
                  </h1>
                  <div className="flex items-center">
                    <div className=" bg-[white] w-[68px] h-[2px]"></div>
                    <div className=" bg-[white] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <p className="font-jakarta text-[16px]">
                    At drive Technology, we strive to be a trusted partner to
                    our clients by understanding their unique needs and
                    delivering cutting-edge technology solutions that drive
                    their success.
                  </p>
                </div>
                <div className="flex flex-col gap-y-[25px] lg:gap-y-[55px] md:w-[50%] font-roboto">
                  <h1 className="text-[32px] md:text-[48px] font-poppins font-bold">Vision</h1>
                  <div className="flex items-center">
                    <div className=" bg-[white] w-[68px] h-[2px]"></div>
                    <div className=" bg-[white] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <p className="font-jakarta text-[16px]">
                    Our vision is to become the leading provider of technology
                    solutions for businesses of all sizes,known for our ability
                    to understand and meet the unique needs of each client and
                    to foster a culture of creativity and innovation within our
                    team.
                  </p>
                </div>
              </div>
            )}
            <h1 className="text-[32px] lg:text-[32px] md:text-[48px] font-bold text-white lg:text-center px-[30px] md:px-[0px] font-poppins">
              {name}
            </h1>
            <div
              className="flex flex-col gap-y-[48px] xl:gap-y-[158px] pt-[45px] xl:pt-[158px] px-[30px] md:px-[0px]"
              data-spy="scroll"
              data-target="#navbar-example2"
              data-offset="0"
            >
              {services?.length ? (
                services?.map((service, ind) => {
                  return (
                    <div
                      className={`flex flex-col gap-y-[16px] md:flex-row justify-center gap-x-[95px] scroll-mt-28 ${
                        ind == 1 && "md:flex-row-reverse"
                      } ${ind == 3 && "md:flex-row-reverse"} w-full`}
                      key={service?.attributes?.id}
                      id={service?.attributes?.title?.replaceAll(" ", "-")}
                    >
                      <ServiceItem
                        service={service?.attributes}
                        id={service?.id}
                      />
                    </div>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
            <div
              className={`bg-[#ffffff] bg-opacity-[10%] lg:h-[168px] w-full mt-[45px] lg:mt-[150px] flex flex-col gap-y-[24px] justify-center items-center px-[30px] py-[20px]  ${
                route == "/" && "mb-[88px] "
              } ${route == "/development" && "mb-[200px] md:mb-[381px]"} ${
                route == "/services" && "mb-[200px] md:mb-[381px]"
              }`}
            >
              <p className="font-oswald text-[16px] lg:text-[20px] font-medium text-[#ffffff] text-opacity-[60%] text-center">
                ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL
                MARKETING SERVICES{" "}
              </p>
              <Link href={"/startproject"}>
                <Button className="w-[242px] md:w-fit">
                  BOOK A FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {route == "/" && (
        <div className="hidden lg:block w-full  border-t-[16vw] border-t-[#313131] relative top-[4px] border-l-[50vw] border-l-[transparent] border-r-[50vw] border-r-[transparent] "></div>
      )}
    </>
  );
};

export default Services;
