import Image from "next/image";
import React from "react";
import ServiceItem from "./ServiceItemDefault";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import design from "../../assets/bg-images/design.png";

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
            route == "/" ? "top-[-47px]" : ""
          }   flex justify-center`}
        >
          <div
            className={`absolute ${route == "/services" && "top-[100px]"} ${
              route == "/development" && "top-[100px]"
            }  `}
          >
            <Image src={image} alt="image" />
          </div>
          <div
            className={`relative ${
              route == "/" ? "top-[100px] md:top-[100px]" : "top-[130px]"
            } `}
          >
            <h1 className="text-[32px] lg:text-[48px] font-oswald font-bold text-white lg:text-center px-[30px] md:px-[0px]">
              {name}
            </h1>
            <div className="flex flex-col gap-y-[48px] xl:gap-y-[158px] pt-[45px] xl:pt-[158px] px-[30px] md:px-[0px]">
              {services.map((service, index) => {
                return (
                  <div
                    className={`flex flex-col gap-y-[16px] md:flex-row justify-center gap-x-[95px] ${
                      index == 1 && "md:flex-row-reverse"
                    } ${index == 3 && "md:flex-row-reverse"} w-full`}
                    key={service.id}
                  >
                    <ServiceItem service={service} />
                  </div>
                );
              })}
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
        <div className="hidden lg:block w-full  border-t-[16vw] border-t-[#313131] relative top-[3px] border-l-[50vw] border-l-[transparent] border-r-[50vw] border-r-[transparent] "></div>
      )}
    </>
  );
};

export default Services;
