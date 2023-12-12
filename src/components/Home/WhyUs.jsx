import React from "react";
import WhyUsItem from "./WhyUsItem";

import img1 from "../../assets/whyus/img1.png";
import img2 from "../../assets/whyus/img2.png";
import img3 from "../../assets/whyus/img3.png";
import img4 from "../../assets/whyus/img4.png";
import img5 from "../../assets/whyus/img5.png";
import img6 from "../../assets/whyus/img6.png";
import img7 from "../../assets/whyus/img7.png";

const DATA = [
  {
    id: "d1",
    content:
      "Our approach is focused on creating long-term partnerships with our clients, rather than simply completing one-off projects.",
    img: img1,
  },
  {
    id: "d2",
    content:
      "We take a holistic approach to software development, ensuring that the end product not only meets the technical requirements, but also aligns with the overall business strategy and goals.",
    img: img3,
  },
  {
    id: "d3",
    content:
      "Our digital marketing strategies are tailored to each individual client, taking into account their unique target audience, industry, and competitors",
    img: img2,
  },
  {
    id: "d4",
    content:
      "Our team of experts stays up-to-date with the latest trends and technologies in software development, digital marketing, and marketing automation to ensure that our clients are always at the forefront of their industries.",
    img: img4,
  },
  {
    id: "d5",
    content:
      "We have a proven track record of delivering results, with a strong portfolio of successful projects and satisfied clients.",
    img: img5,
  },
  {
    id: "d6",
    content:
      "We utilize marketing automation tools to streamline and optimize lead generation, email marketing, and other marketing efforts.",
    img: img6,
  },
  {
    id: "d7",
    content:
      "Wherever you are in the world, you’ll feel like we’re right around the corner. With 10 years of experience, our business processes are seamless and time differences don’t matter.",
    img: img7,
  },
];

const WhyUs = () => {
  return (
    <section className="w-full flex justify-center items-center ">
      <div className="w-full xl:max-w-[1440px] relative z-[11]">
        <div className="flex flex-col gap-y-[40px] lg:gap-y-[76px] md:items-center justify-center pt-[40px]  md:px-[120px] md:py-[180px] pb-[70px]">
          
          <h1 className="text-[24px] lg:text-[48px] font-poppins font-bold px-[30px] ">
            Why Drive Technology
          </h1>
          <div className="flex gap-x-[80px] flex-wrap justify-center gap-y-[40px] px-[30px] lg:gap-y-[108px]">
            {DATA.map((data) => {
              return (
                <div
                  className="w-full lg:w-[401px] lg:h-[268px] flex flex-col  md:items-center gap-y-[32px]"
                  key={data.id}
                >
                  <WhyUsItem data={data} />
                </div>
              );
            })}
          </div>
          <div className="bg-[#5E5E5E] bg-opacity-[10%] lg:h-[168px] flex flex-col gap-y-[24px]  px-[30px] py-[20px]  justify-center items-center ">
            <p className="font-oswald text-[16px] font-bold text-[#1D1D1D] text-opacity-[60%] lg:text-center">
              In a crowded market of software development, digital marketing,
              and marketing automation services, what makes Drive Technology
              stand out as the right choice for you?
            </p>
            <p className="font-oswald text-[16px]  text-[#1D1D1D] text-opacity-[60%]">
              Our Distinctive Approach to Software Development, Digital
              Marketing, and Marketing Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
