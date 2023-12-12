import React, { useState } from "react";
import Reviewbg from "../../assets/bg-images/bg-img1.png";
import Reviewimg2 from "../../assets/Review/BG1.png";
import Reviewimg3 from "../../assets/Review/BG.png";
import Reviewimg4 from "../../assets/Review/star 5.png";
import Image from "next/image";
import Reviewback from "../../assets/bg-images/Testimonial.png";
import "react-phone-number-input/style.css";
import Contactform from './Contactform'
import Contactsec from "./Contactform";

function Review() {


  return (
    <div>
      {/* <div className="lg:py-0 relative items-center justify-center"> */}
        {/* <Image
          src={Reviewback}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        /> */}

        {/* <div
          data-aos="flip-down"
          className="lg:py-0 py-10 mb-20 h-[70px] lg:h-[309px] relative flex items-center justify-center"
        >
          <Image
            src={Reviewbg}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          />
          <h1
            data-aos="fade-up"
            className="text-white text-center font-poppins font-bold leading-normal tracking-wider text-xl md:text-2xl lg:text-[64px] relative z-10"
          >
            Don’t just take our words!
          </h1>
        </div> */}

        {/* Review section 1 Ens here */}

        {/* <div className="lg:flex justify-center gap-12 pb-20 mx-2 lg:mx-20 Reveiwsection-banner2">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 items-center">
            <div data-aos="fade-left">
              <Image className="z-[99999]" src={Reviewimg2} alt="img" />
            </div>

            <div data-aos="fade-right">
              <div className="flex gap-4">
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
              </div>

              <p className="text-sm xl:text-[17px] xl:leading-[33.60px] sm:text-[auto] py-4 font-medium font-['Poppins'] text-[#20274D]">
                LoremloremLoremloremLoremlorem
                <br />
                loremLoremloremLoremloremLorem
                <br />
                LoremloremLoremloremLore
                <br />
                mlorem
              </p>
              <p className="text-md sm:text-[auto] text-[#20274D] font-medium font-['Poppins']">
                Loremlorem<span className="pl-4 font-normal text-sm">Loremlorem</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center mt-10 lg:mt-0 gap-8 items-center">
            <div data-aos="fade-left">
              <Image className="" src={Reviewimg3} alt="img" />
            </div>

            <div data-aos="fade-right">
              <div className="flex gap-4">
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
                <Image className="" src={Reviewimg4} alt="img" />
              </div>

              <p className="text-sm xl:text-[17px] xl:leading-[33.60px] sm:text-[auto] py-4 font-medium font-['Poppins'] text-[#20274D]">
                LoremloremLoremloremLoremlorem
                <br />
                loremLoremloremLoremloremLorem
                <br />
                LoremloremLoremloremLore
                <br />
                mlorem
              </p>
              <p className="text-md sm:text-[auto] text-[#20274D] font-medium font-['Poppins']">
                Loremlorem<span className="pl-4 font-normal text-sm">Loremlorem</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
<Contactsec/>
    </div>
  );
}

export default Review;
