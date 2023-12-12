import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import ServiceItem from "./ServiceItem";
import Button from "../UI/Button";
import Loader from "../UI/Loader";



const Services = ({ services, name, image, count1, count2 }) => {
  const { route } = useRouter();
  return (
    <>
      {/* {route == "/" && (
        <div className="w-full  border border-t-[10vh] border-t-[white] relative z-[2] top-[8px]  border-l-[100vw]  border-l-[#424248]"></div>
      )} */}

      <section

        className={`relative z-[3] ${
          route == "/" && "top-[-30px]"
        } top-[-39px] md:top-[70px]`}
      >
        <div
          className={`w-[100%] xl:max-[100%] relative ${
            route == "/" ? "top-[-100px]" : ""
          }   flex justify-center`}
        >
          <div
            className={`absolute overflow-hidden ${route == "/" && "top-[680px]"}  ${
              route == "/services" && "top-[100px]"
            } ${route == "/development" && "top-[100px]"}  `}
          >
            <Image src={image} alt="image" />
          </div>
          <div
            className={` ${
              route == "/" ? "" : "relative top-[40px] md:top-[-70px]"
            } `}
          >
            <div
              className="flex flex-col gap-y-[] xl:gap-y-[] pt-[] xl:pt-[] px-[] md:px-[0px]"
              data-spy="scroll"
              data-target="#navbar-example2"
              data-offset="0"
            >
           
              {services !== undefined ? (
                services?.length ? (
                  services?.map((service, ind) => (
                    <div
                      key={service?.attributes?.id} // Move the key to this div
                      className={`flex flex-col gap-y-[] lg:flex-row justify-center gap-x-[] scroll-mt-28 ${ 
                        ind == count1 && "lg:flex-row-reverse"
                      } ${ind == count2 && "lg:flex-row-reverse"} w-full`}
                      id={service?.attributes?.title?.replaceAll(" ", "-")}
                      // data-aos={`flip-${service % 3 === 0 ? "up" : "down"}`}
                    >
                    {/* <div
                      key={service?.attributes?.id} // Move the key to this div
                      className={`flex flex-col gap-y-[] md:flex-row justify-center gap-x-[] scroll-mt-28 ${ 
                        ind == {count1} && "md:flex-row-reverse"
                      } ${ind == {count2} && "md:flex-row-reverse"} w-full`}
                      id={service?.attributes?.title?.replaceAll(" ", "-")}
                      // data-aos={`flip-${service % 3 === 0 ? "up" : "down"}`}
                    > */}
                      <ServiceItem
                        service={service?.attributes}
                        id={service?.id}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-[red] my-[3rem]">!No data Founds</p>
                )
              ) : (
                <Loader />
              )}
            </div>
            
            {/* <Bookconsultation /> */}
          </div>
        </div>
      </section>
      {/* {route == "/" && (
        <div className="hidden lg:block w-full  border-t-[16vw] border-t-[#313131] relative top-[4px] border-l-[50vw] border-l-[transparent] border-r-[50vw] border-r-[transparent] "></div>
      )} */}
    </>
  );
};

export default Services;
