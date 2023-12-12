// DigitalServicesTow.js
import React from "react";
// import digital from "../../assets/bg-images/digital-img.png";
import lessTen from "../../assets/services/Frame2.png";
import micImg from "../../assets/services/Frame3.png";
import DualImageSectionTow from "./DualImageSection";
import handShake from "../../assets/services/hand-shake 1.png";
import frame1 from "../../assets/services/Frame5.png";
import frame2 from "../../assets/services/Frame6.png";
import bg1 from "../../assets/services/new-service-1.png";
import bg2 from "../../assets/services/new-service-2.png";
import bg3 from "../../assets/services/new-service-3.png";
import bg4 from "../../assets/services/new-service-4.png";
import bg5 from "../../assets/services/new-service-5.png";
import bgone from "../../assets/services/new-service-one.jpg";

function DigitalServicesTow() {
  const sectionsData = [
    {
      backGroundImg: bg1,
      firstImg: bgone,
      Img1: handShake,
      paraOne: "Our approach is focused on creating long-term partnerships with our clients, rather than simply completing one-off projects.",
      oneHeading: "Why",
      secHeading: "Drive Technologies?",
    },
    {
      backGroundImg: bg2,
      firstImg: bg3,
      marginBottom: "50px",
      Img1: lessTen,
      Img2: micImg,
      paraOne: "We take a holistic approach to software development, ensuring that the end product not only meets the technical requirements, but also aligns with the overall business strategy and goals.",
      paraTow: "Our digital marketing strategies are tailored to each individual client, taking into account their unique target audience, industry, and competitors",
      reverse: true,
    },
    {
      firstImg: bg4,
        backGroundImg: bg5,
        marginBottom: "5px",
        Img1: frame2,
        Img2: frame1,
        paraOne: "We have a proven track record of delivering results, with a strong portfolio of successful projects and satisfied clients.",
        paraTow: "Our team of experts stays up-to-date with the latest trends and technologies in software development, digital marketing, and marketing automation to ensure that our clients are always at the forefront of their industries.",
    },
    
  ];

  return (
    <div>
      {sectionsData.map((section, index) => (
        <DualImageSectionTow key={index} {...section} />
      ))}
    </div>
  );
}

export default DigitalServicesTow;
