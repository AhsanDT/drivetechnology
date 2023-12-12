import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../../assets/bg-images/Hero-section.png";
import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button";
import { richTextReducer } from "helpers/utils";

const Hero = ({ heroBox }) => {
  return (
    <section
      data-aos="flip-up"
      className="w-full justify-center relative min-h-[100vh]"
    >
      <div className="w-full xl:max-w-[] min-h-[100vh]  ">
        <div className={`img-container w-full h-[100%] absolute z-[-1]`}>
          <Image src={heroImage} alt="img" />
          {/* {heroBox && (
            <Image
              src={heroBox?.attributes?.image?.data?.attributes?.url}
              // unoptimized={true}
              // src="http://localhost:1337/uploads/Hero_section_3f5d56bbb9.png"
              alt="img"
              // width={400}
              // height={400}
              height={heroBox?.attributes?.image?.data?.attributes?.height}
              width={heroBox?.attributes?.image?.data?.attributes?.width}
            />
          )} */}
        </div>

        <div
          className="min-h-[100vh] lg:pt-[150px] p-[30px] flex justify-between  flex-col items-center
         3xl:mx-auto z-[11] pt-[200px] pb-[60px]"
        >
          <div className="flex justify-center flex-col items-center gap-[10px] mb-[40px]">
            <span
              data-aos="fade-up"
              style={{
                textShadow: "0px 4px 70px #FFF",
                textAlign: "justify",
                textAlignLast: "center",
              }}
              className="font-poppins text-white font-bold text-shadow-lg text-[25px] sm:text-[33px] text-center lg:text-[50px] tracking-[0] sm:tracking-[1px] sm:leading-[35px] lg:leading-[73px] lg:w-[1000px]"
              // dangerouslySetInnerHTML={{
              //   __html: richTextReducer(heroBox?.attributes?.heading || ""),
              // }}
            >We help you drive your business to <br className="hidden sm:block" /> success</span>
            <p
              data-aos="fade-down"
              className="font-roboto text-white text-center
              leading-snug font-normal text-[16px] w-full mb-[20px] hidden lg:block lg:w-[920px]"
            >
              {heroBox?.attributes?.sub_heading}
            </p>
            <p className="text-white text-[15px] text-center lg:hidden font-normal font-roboto">
              {heroBox?.attributes?.sub_heading}
            </p>
          </div>
          <div>
            {heroBox?.attributes?.btn_text && (
                <Link href={"/startproject"}>
              <Button className="w-fit sm:px-[40px] font-semibold text-blue-950 py-[8px] text-[18px] font-roboto">
                  {" "}
                  {heroBox?.attributes?.btn_text}
              </Button>
                </Link>
            )}{" "}
          </div>
            {/* Achieve Your Goals Faster With Us{" "} */}
             {/* <a */}
            {/* //   href="#" */}
            {/* //   className="bg-[white] px-[18px] py-[4px] text-[16px] md:px-[28px] md:py-[8px] md:text-[20px] text-[#20274D]" */}
            {/* // > */}
            {/* //   Start a project */}
            {/* // </a> */}
          {/* <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
            <Link href={"/startproject"}> Start a Project </Link>
          </button> */}
        </div>
        {/* <div className={`${styles.box}`}></div> */}
      </div>
    </section>
  );
};

export default Hero;
