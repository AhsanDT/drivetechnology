import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../UI/Button";
import bgImage from "../../assets/bg-images/service.png";
import bg from "../../assets/services/check5.png";

const ServiceItem = ({ service, id }) => {
  const { route } = useRouter();
  return (
    <>
      {/* <div className="w-[100vw]  items-center justify-center  bg-[black]"> */}
      {/* <div className="w-[100vw] flex items-center justify-center flex-col md:flex-row bg-[black]"> */}
      <div
        data-aos="fade-left"
        className="cardMedia w-[100vw] z-[22] h-[100%] lg:h-[600px]"
      >
        <Image
          // unoptimized={true}
          // src={`http://localhost:1337${service?.thumbnail?.data?.attributes?.url}`}
          // src={service?.thumbnail?.data?.attributes?.url}
          src={bg}
          // width={100}
          // height={100}
          alt="img"
          className="w-[100%] h-[100%]"
        />
      </div>
      
      <div
        data-aos="fade-right"
        className={` ${
          route == "/" ? "bg-[#20274D] text-white" : "bg-[white] text-[#161B36]"
        }   relative w-[100%] h-auto lg:h-[600px] flex py-[30px] items-center justify-center cardMedia`}
      >
        <Image
          unoptimized={true}
          src={bgImage}
          width={100}
          height={100}
          alt="img"
          className="absolute top-[0] lg:static w-[100%] h-[100%]"
        />
        <div className="static lg:absolute lg:top-[0] h-[100%] w-[100%] flex items-center 
         justify-center flex-col p-[20px]">
          <div className="flex flex-col w-[100%] lg:w-[400px]">
            <h1
              data-aos="flip-down"
              className="text-[30px] lg:text-[40px] font-['Poppins'] font-bold"
            >
              {service?.title}
            </h1>
            <p
              data-aos="flip-up"
              className="my-[6px] text-sm mb-[10px] tracking-[1px] font-normal font-['Roboto']"
              dangerouslySetInnerHTML={{ __html: service?.description }}
            >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam iusto nemo laboriosam odio commodi, amet animi incidunt quibusdam mollitia, recusandae earum? */}
            </p>
            <Link href={`/startproject`} className="mt-[15px] block w-fit z-[99999]">
              <Button
                className={`${
                  route == "/"
                    ? "text-[#161B36]"
                    : "text-[#161B36] border-1 border-slate-900"
                }      text-[#161B36] text-[16px] px-[26px] py-[4px] 
                font-['Roboto'] font-medium`}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ServiceItem;
