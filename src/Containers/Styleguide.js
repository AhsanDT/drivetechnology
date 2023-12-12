import { styleGuideData } from "@/Data/AceitData";
import React from "react";
import Image from "next/image";

function Styleguide({ styGuideData }) {
  const backColor = {
    background: `var(--Background-Peacemaker, ${styGuideData.backgroundColor})`, // Use the passed background color prop
  };

  const typographyColor = {
    color: styGuideData.typographyColor,
  };
  const paletteColor = {
    color: styGuideData.paletteColor,
  };

  const TypographyMain = {
    background: `var(--Background-Peacemaker, ${styGuideData.backgroudtypo})`,
  };

  const card = {
    background: `var(--Background-Peacemaker, ${styGuideData.cardBack})`,
  };
  const cardMain = {
    background: `var(--Background-Peacemaker, ${styGuideData.backCardMain})`,
  };

  const NumbersMain = {
    backgroundImage: `${styGuideData.numberColor}`,
  };

  const firstcolorAndback = {
    color: styGuideData.firstText,
    backgroundColor: styGuideData.firstBack,
  };

  const seccolorAndback = {
    color: styGuideData.secText,
    backgroundColor: styGuideData.secBack,
  };

  const threecolorAndback = {
    color: styGuideData.threeText,
    backgroundColor: styGuideData.threeBack,
  };
  const fourcolorAndback = {
    color: styGuideData.fourText,
    backgroundColor: styGuideData.fourBack,
  };

  const textColor = {
    color: styGuideData.textColor,
  };

  const astyle = {
    // background: "linear-gradient(180deg, #E86F42 0%, #FF9067 100%)",
    background: `${styGuideData.aStyleColor}`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: styGuideData.nexusText,

  }

  return (
    <div className="relative styleguide-main z-[22]" style={backColor}>
      <div className={`${styGuideData.logoheddenblock}`}>
        {/* <img src={styGuideData.logo} alt="img" /> */}
        <Image src={styGuideData.logoend} alt="img" className={`${styGuideData.hiddenblock}`} />
      </div>
      {/* component number structure starts here */}
      <div className="h-[0px]">
        <h1
          data-aos="zoom-in"
          className="lg:text-[350px] text-[250px] font-bold bottom-[20px] Numbers-main font-gilroy text-cyan-700"
          style={NumbersMain}
        >
          {styGuideData.numberTitle}
        </h1>
      </div>
      {/* component number structure Ends here */}


      <div className="relative lg:p-20 p-4 lg:flex justify-between 2xl:justify-around gap-8 items-center">
        {/* style guide heading and paragraph structure starts here */}
        <div className="lg:w-[40%] w-[90%] 2xl:w-[500px]">

          <div className="flex gap-2 sm:block">
          <h1
            data-aos="fade-left"
            className="font-gilroy text-3xl sm:text-6xl font-bold leading-none tracking-wider"
            style={textColor}
          >
            {styGuideData.styleTitle}
          </h1>
          <h1
            data-aos="fade-right"
            className={`${ styGuideData.description1Style} font-gilroy text-3xl sm:text-6xl font-bold leading-none tracking-wider`}
            style={textColor}
          >
            {styGuideData.guideTitle}
          </h1>

          </div>

          <p
            data-aos="flip-up"
            className={`${ styGuideData.description4Style}  pt-4 font-gilroy text-lg font-medium leading-normal tracking-[0.32px]`}
            style={textColor}
          >
            {styGuideData.paraTitle}
          </p>
        </div>
        {/* style guide heading and paragraph structure Ends here */}

        {/* color plate structure starts here */}
        <div className="py-8 lg:p-4 lg:w-[50%]  2xl:w-[600px]">
          <p
            className="text-start font-gilroy lg:text-end text-lg font-bold leading-normal tracking-[0.32px]"
            style={paletteColor}
          >
            {styGuideData.colorPalette}
          </p>

          <div className="flex-wrap flex justify-start sm:justify-between gap-2 items-center mt-4">
            <div data-aos="flip-left" className="rounded-2xl xl:w-[22%]" style={cardMain}>
              <div className="pt-0 mt-1 ml-1 rounded-2xl" style={card}>
                <div
                  className="relative top-[4px] mt-1 ml-1 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl p-4 h-[110px]"
                  style={firstcolorAndback}
                >
                  <h1 className="font-gilroy">{styGuideData.firstColor}</h1>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" className="rounded-2xl xl:w-[22%]" style={cardMain}>
              <div className="pt-0 mt-1 ml-1 rounded-2xl" style={card}>
                <div
                  className="relative top-[4px] mt-1 ml-1 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl p-4 h-[110px]"
                  style={seccolorAndback}
                >
                  <h1 className="font-gilroy">{styGuideData.secondtColor}</h1>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" className="rounded-2xl xl:w-[22%]" style={cardMain}>
              <div className="pt-0 mt-1 ml-1 rounded-2xl" style={card}>
                <div
                  className="relative top-[4px] mt-1 ml-1 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl p-4 h-[110px]"
                  style={threecolorAndback}
                >
                  <h1 className="font-gilroy">{styGuideData.threeColor}</h1>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" className="rounded-2xl xl:w-[22%]" style={cardMain}>
              <div className="pt-0 mt-1 ml-1 rounded-2xl" style={card}>
                <div
                  className="relative top-[4px] mt-1 ml-1 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl p-4 h-[110px]"
                  style={fourcolorAndback}
                >
                  <h1 className="font-gilroy">{styGuideData.fourColor}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* color plate structure starts here */}

          {/* Typography structure starts here */}
          <p
            data-aos="fade-left"
            className="text-start lg:text-end pt-8 font-gilroy text-lg font-bold leading-normal tracking-[0.32px]"
            style={typographyColor}
          >
            {styGuideData.typography}
          </p>

            <div 
              data-aos="flip-up"
              className="relative rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl absolute top-[20px] opacity-2 bg-white sm:px-20 lg:px-8 xl:px-20 px-2 mt-4 flex-wrap lg:flex-nowrap flex items-center justify-between"
              style={TypographyMain}
            >

              <div
              style={astyle}
              className="absolute lg:top-[-170px] left-[23px] text-[310.07px] lg:text-[370.07px] font-bold
              font-['Inter'] tracking-[6.04px]"
            >
              A
            </div>
              <div className="z-[2]"
              data-aos="fade-right"
              >
                <h1
                  style={textColor}
                  className={`${ styGuideData.descriptionheadStyle} font-gilroy   text-center font-GeneralSansVariable text-[100px] font-bold leading-normal tracking-[2.327px]`}
                >
                  {styGuideData.AaTitle}
                </h1>
                <p className={`${ styGuideData.descriptionp6Style} pb-12 font-gilroy relative top-[-20px] font-semibold text-start sm:text-center`} style={textColor}>
                  {styGuideData.firstSans}
                </p>
              </div>

              <div data-aos="fade-left">
                <h1 className={`${ styGuideData.descriptionp5Style} font-semibold font-gilroy`} style={textColor}>
                  {styGuideData.secSans}
                </h1>

                <div className="flex gap-12 my-2">
                  <h1 className={`${ styGuideData.descriptionp3Style} font-light font-gilroy`} style={textColor}>
                    {styGuideData.light}
                  </h1>
                  <h1 className={`${ styGuideData.descriptionp4Style} font-medium font-gilroy `} style={textColor}>
                    {styGuideData.medium}
                  </h1>
                </div>

                <div className="flex gap-12 my-2">
                  <h1 className={`${ styGuideData.descriptionp1Style} font-regular font-gilroy `} style={textColor}>
                    {styGuideData.regular}
                  </h1>
                  <h1 className={`${ styGuideData.descriptionp2Style} font-bold font-gilroy`} style={textColor}>
                    {styGuideData.bold}
                  </h1>
                </div>
              </div>
            </div>



          {/* Typography structure Ends here */}
        </div>
      </div>
    </div>
  );
}

export default Styleguide;