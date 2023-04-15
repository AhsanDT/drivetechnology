import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../UI/Button";

const ServiceItem = ({ service, id }) => {
  return (
    <>
      <div className="img-container w-full  sm:min-w-[200px] sm:h-[218px]  lg:w-[371px] lg:h-[384px]">
        <Image
          src={service?.thumbnail?.data?.attributes?.url}
          width={100}
          height={100}
          alt="img"
        />
      </div>
      <div className="flex flex-col  gap-y-[21px] lg:gap-y-[55px]  lg:w-[495px]">
        <h1 className="text-[20px] lg:text-[40px] font-poppins font-bold text-white">
          {service?.title}
        </h1>
        <div className="flex items-center">
          <div className=" bg-white w-[68px] h-[2px]"></div>
          <div className=" bg-white w-[12px] h-[12px] rounded-full"></div>
        </div>
        <p
          className=" text-[15px] lg:text-[16px] text-white font-roboto"
          dangerouslySetInnerHTML={{ __html: service?.description }}
        >
        </p>
        <Link href={`/startproject`}>
          <Button className="bg-transparent text-white text-[16px] px-[40px] py-1 font-oswald font-medium w-fit hidden md:block">
            Learn More
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ServiceItem;
