import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import ImageBook from "../../assets/bg-images/Book-Img-2.png";
import Link from "next/link";
function Bookconsultation() {
  const { route } = useRouter();
  return (
    <div
      data-aos="flip-down"
      className={`  relative h-[200px] lg:h-[320px] z-[999] w-[100vw]  flex flex-col gap-y-[24px] justify-center items-center px-[30px]   ${
        route == "/" && "mt-[-139px] md:mt-[-30px]"
      } ${route == "/development" && "mb-[-4px] md:mb-[-5px]"} ${
        route == "/services" && "mb-[-4px] md:mb-[-5px]"
      }`}
    >
      <Image
        src={ImageBook}
        alt="img"
        className="h-[100%] w-[100%] absolute z-[-1]"
      />
      <div data-aos="fade-up" className=" bg-[] flex flex-col gap-y-[22px] justify-center items-center">
        <p className="font-['Poppins'] w-[100%] md:w-[700px] text-[15px] 
        sm:text-[18px] lg:text-[25px] font-sm text-white text-center tracking-[2.20px]">
          ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL MARKETING
          SERVICES{" "}
        </p>
        <Link href={"/startproject"}>
          <Button className={`${
                  route == "/"
                    ? "bg-[white] text-slate-900"
                    : "bg-transparent text-white"
                } button2 w-[242px] md:w-fit  font-semibold
           text-base mt-[0px] lg:mt-[20px] px-[0px] py-[9px] md:px-[45px] text-sm font-['Roboto']`}>
            BOOK A FREE CONSULTATION
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Bookconsultation;
