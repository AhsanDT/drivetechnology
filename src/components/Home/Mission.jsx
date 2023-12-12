import React from "react";
import Image from "next/image";
import missionImg from "../../assets/services/FrameMission.png";
import visionImg from "../../assets/services/vision-img.png";
import missionBackgroundImg from "../../assets/bg-images/missionBackground-img.png";

function Mission() {
  const missionData = [
    {
      title: "Mission",
      imgSrc: missionImg,
      description:
        "At Drive Technology, we strive to be a trusted partner to our clients by understanding their unique needs and delivering cutting-edge technology solutions that drive their success",
    },
    {
      title: "Vision",
      imgSrc: visionImg,
      description: "Our vision is to become the leading provider of technology solutions for businesses of all sizes, known for our ability to understand and meet the unique needs of each client and to foster a culture of creativity and innovation within our team."},
    // Add more data items as needed
  ];

  return (
    <>
      <div
       data-aos="zoom-in"
       className="relative h-[1550px] mt-[20px] mb-[60px] md:h-[600px] py-[30px]">
        <Image src={missionBackgroundImg} alt="" className="w-[100%] h-[100%]" />
        <div className="absolute top-[0] flex flex-col items-center justify-center px-[15px]
         h-[100%] py-[20px] md:flex-row gap-[10px]">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="flex items-center my-[20px] gap-[20px] basis-[50%] w-[100%] h-[100%] flex-col"
              data-aos={`flip-${index % 2 === 0 ? "up" : "down"}`}
            >
              <h1 className="text-[#161B36] text-4xl font-semibold font-['Poppins']">
                {item.title}
              </h1>
              <Image
                src={item.imgSrc}
                alt={item.title}
                className="h-[350px] w-[350px] object-contain"
              />
              <p className="text-[#161B36] font-normal w-[100%] sm:w-[90%] lg:w-[80%] tracking-widest font-['Roboto']">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mission;
