import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../../assets/bg-images/BG3.png";
import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button";
import { richTextReducer } from "helpers/utils";

const Hero = ({ heroBox }) => {
  return (
    <section className="w-full justify-center relative min-h-[100vh]">
      <div className="w-full xl:max-w-[1440px]   ">
        <div className={`img-container w-full h-[101%] absolute z-[-1]`}>
          {/* <Image src={heroImage} alt="img" /> */}
          {heroBox && (
            <Image
              src={heroBox?.attributes?.image?.data?.attributes?.url}
              alt="img"
              height={heroBox?.attributes?.image?.data?.attributes?.height}
              width={heroBox?.attributes?.image?.data?.attributes?.width}
            />
          )}
        </div>

        <div className=" pt-[160px] lg:pt-[220px] flex flex-col justify-center gap-y-[24px] lg:gap-y-[15px] md:gap-y-[27px] w-[81%] lg:w-[70%] 3xl:mx-auto z-[11] px-[30px] md:px-[100px] xl:px-[140px] pb-[180px]">
          <span
            className="font-bold text-[48px] md:text-[64px] tracki ng-[1px] leading-[55px] md:leading-[73px]"
            dangerouslySetInnerHTML={{
              __html: richTextReducer(heroBox?.attributes?.heading || ""),
            }}
          >
            {/* We help you drive your business to{" "} */}
            {/* <span className="text-[#136C2C]">success</span> */}
          </span>
          <p className="text-white text-[16px] font-medium font-jakarta hidden lg:block lg:w-[500px]">
            {heroBox?.attributes?.sub_heading}
            {/* We construct comprehensive customer experience by fusing technology
            and innovation together. We create a fully-integrated customer
            experience by incorporating the latest technology and innovative
            thinking */}
          </p>
          <p className="text-white text-[15px] lg:hidden font-medium font-jakarta">
            {heroBox?.attributes?.sub_heading}
            {/* Driving innovation, one solution at a time. The drive to succeed is
            powered by its people and advanced technology. */}
          </p>
          {heroBox?.attributes?.btn_text && (
            <Button className="border-[2px] border-black w-fit px-[32px] py-[16px] text-[18px] ">
              <Link href={"/startproject"}>
                {" "}
                {heroBox?.attributes?.btn_text}
                {/* Achieve Your Goals Faster With Us{" "} */}
              </Link>
            </Button>
          )}{" "}
          {/* <button className="border-black border-[2px] bg-[transparent] text-[20px] px-[40px] py-[10px] w-fit text-black font-bold lg:hidden font-oswald mb-[100px] sm:mb-[20px]">
            <Link href={"/startproject"}> Start a Project </Link>
          </button> */}
        </div>
        <div className={`${styles.box}`}></div>
      </div>
    </section>
  );
};

export default Hero;
