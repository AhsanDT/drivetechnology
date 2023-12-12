import React from "react";
import Image from "next/image";

function Projecttimeline({ timeLine }) {
  const backColor = {
    background: `var(--Background-Peacemaker, ${timeLine.backgroundColor})`, // Use the passed background color prop
  };

  const NumbersMain = {
    backgroundImage: `${timeLine.numberColor}`,
    "background-clip": "text",
    "-webkit-background-clip": "text",
    color: "transparent",
  };

  const textColor = {
    color: timeLine.textColor,
  };

  const researchuiuxDesign = {
    color: timeLine.researchuiuxDesignTextColor,
    backgroundColor: timeLine.researchuiuxDesignBackgroundColor,
  };

  const researchuiresearch = {
    color: timeLine.researchuiresearchTextColor,
    backgroundColor: timeLine.researchuiresearchBackgroundColor,
  };

  const surveyStyleguide = {
    color: timeLine.surveyStyleguideTextColor,
    backgroundColor: timeLine.surveyStyleguideBackgroundColor,
  };

  const affinityMappingHighfidelity = {
    color: timeLine.affinityMappingHighfidelityTextColor,
    backgroundColor: timeLine.affinityMappingHighfidelityBackgroundColor,
  };

  const userFlowPrototype = {
    color: timeLine.userFlowPrototypeTextColor,
    backgroundColor: timeLine.userFlowPrototypeBackgroundColor,
  };

  const weekColor = {
    color: timeLine.Color,
  };

  return (
    <div
      className="Project-timeline-main 2xl:px-[120px] py-8 lg:pt-16 lg:pb-8 xl:relative z-[-999] "
      style={backColor}
    >
      <div
        className={`${timeLine.display} md:flex hidden justify-end   ml-auto mr-20`}
      >
        <Image
          src={timeLine.logo}
          className={`h-[${timeLine.height}] w-[${timeLine.width}]`}
          data-aos="fade-left"
        />
      </div>

      {/* <div className="bg-red-900"> */}
      {/* <div className="h-[0px] relative"> */}
      <h1
        data-aos="zoom-in"
        className={` ${timeLine.numberStyling} sm:text-[350px]  lg:text-[350px]  font-gilroy font-bold  text-[250px]  tracking-[5.85px] `}
        style={NumbersMain}
      >
        {timeLine.numberStyle}
      </h1>
      {/* </div> */}
      {/* </div> */}

      <div className="lg:w-[1000px]  xl:w-[1100px] mx-auto">
        <h1
          data-aos="fade-up"
          style={textColor}
          className="font-gilroy text-4xl font-semibold leading-normal tracking-wider text-center"
        >
          Project timeline
        </h1>

        <div className="flex justify-center xl:w-[1100px] items-center gap-1 py-[24px] md:mx-10 lg:mx-2 xl:mx-0">
          <div
            data-aos="fade-left"
            style={researchuiuxDesign}
            className="rounded-[100px] py-2 lg:py-6 text-center w-[100%] ml-1"
          >
            <h1
              style={researchuiuxDesign}
              className="font-gilroy  rounded-[100px] font-Roboto text-lg md:text-xl font-normal leading-[152.688%]"
            >
              Research
            </h1>
          </div>

          <div
            data-aos="fade-right"
            style={researchuiuxDesign}
            className="rounded-[100px] py-2 lg:py-6 text-center w-[100%] mr-1"
          >
            <h1
              style={researchuiuxDesign}
              className="font-gilroy  rounded-[100px] font-Roboto text-lg md:text-xl font-normal leading-[152.688%]"
            >
              UI / UX Design
            </h1>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="px-2 w-[1100px] mx-auto  z-[400]">
          <div className="flex justify-between pt-12 pb-4  z-[99999]">
            <div className="w-[0px]">
              <p
                data-aos="fade-left"
                style={researchuiresearch}
                className="font-gilroy relative z-[22] bottom-[-100px] rounded-[100px] w-[160px] lg:w-[150px] py-4 left-[20px] text-center"
              >
                Research
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-left"
                style={surveyStyleguide}
                className="font-gilroy relative z-[22] bottom-[-200px] rounded-[100px] w-[330px] py-4 left-[20px] text-center"
              >
                Survey, Interview, Competitive Analysis
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-left"
                style={affinityMappingHighfidelity}
                className="font-gilroy relative z-[22] bottom-[-300px] rounded-[100px] w-[348px] py-4 left-[174px] text-center"
              >
                Affinity Mapping
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-left"
                style={userFlowPrototype}
                className="font-gilroy relative z-[22] bottom-[-400px] rounded-[100px] w-[290px] py-4 left-[230px] text-center"
              >
                User Flow, sitemap
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-right"
                style={researchuiresearch}
                className="font-gilroy z-[22] relative  bottom-[-100px] rounded-[100px] w-[178px] lg:w-[170px] py-4 left-[525px] text-center"
              >
                UI Research
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-right"
                style={surveyStyleguide}
                className="font-gilroy z-[22] relative  bottom-[-200px] rounded-[100px] w-[200px] py-4 left-[600px] text-center"
              >
                Style guide
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-right"
                style={affinityMappingHighfidelity}
                className="font-gilroy z-[22] relative  bottom-[-300px] rounded-[100px] w-[350px] py-4 left-[620px] text-center"
              >
                High fidelity wireframe
              </p>
            </div>

            <div className="w-[0px]">
              <p
                data-aos="fade-right"
                style={userFlowPrototype}
                className="font-gilroy relative z-[22] bottom-[-400px] rounded-[100px] w-[170px] py-4 left-[875px] text-center"
              >
                Prototype
              </p>
            </div>

            <div data-aos="flip-up" className="mr-auto">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-lg font-normal leading-[152.688%] pt-4"
              >
                Start
              </p>
            </div>

            <div data-aos="flip-down" className="mx-auto">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%]  pt-4 "
              >
                1st Week
              </p>
            </div>

            <div className="mx-auto" data-aos="flip-up">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%]  pt-4 "
              >
                2nd Week
              </p>
            </div>

            <div className="mx-auto" data-aos="flip-down">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%]  pt-4 "
              >
                3rd Week
              </p>
            </div>

            <div className="mx-auto" data-aos="flip-up">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%]  pt-4 "
              >
                4th Week
              </p>
            </div>

            <div className="mx-auto" data-aos="flip-down">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%]  pt-4 "
              >
                5th Week
              </p>
            </div>

            <div className="ml-auto" data-aos="flip-up z-[22]">
              <Image
                src={timeLine.timelineimg}
                className="flex justify-center mx-auto"
              />
              <p
                style={weekColor}
                className="font-gilroy text-center font-Roboto text-sm lg:text-lg font-normal leading-[152.688%] pt-4"
              >
                6th Week
              </p>
            </div>
          </div>
        </div>
      </div>

{/* <div className=" bg-red-400 h-[0px] bottom-[350px] text-end z-[1] text-[250px] font-bold text-gilroy text-end xl:hidden">
  <h1 className=" relative h-[0px] text-end">04</h1>
</div> */}

    </div>
  );
}

export default Projecttimeline;
