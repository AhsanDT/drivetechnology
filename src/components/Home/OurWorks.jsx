import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../UI/Loader";
import img1 from "../../assets/ourwork/image 322.png";
import img2 from "../../assets/ourwork/image 333.png";
import img3 from "../../assets/ourwork/image 344.png";
import img4 from "../../assets/ourwork/image 355.png";
import img5 from "../../assets/ourwork/image 366.png";
import img6 from "../../assets/ourwork/image 377.png";
import img7 from "../../assets/ourwork/Portfolio1.png";
import img8 from "../../assets/ourwork/Portfolio2.png";
import img9 from "../../assets/ourwork/Portfolio3.png";
import img10 from "../../assets/ourwork/Portfolio4.png";
import img11 from "../../assets/ourwork/Portfolio5.png";
import img12 from "../../assets/ourwork/Portfolio6.png";
import img13 from "../../assets/ourwork/image 38.png";
import img14 from "../../assets/ourwork/image 39.jpg";
import img15 from "../../assets/ourwork/Portfolio9.png";
import bgimage from "../../assets/bg-images/bg-img2.png";

import PeaceMakerPage from "@/Containers/PeaceMakerPage";
import AllCookPage from '@/Containers/AllCookPage'
import FitCirclePage from '@/Containers/FitCirclepage'
import QotPage from '@/Containers/QotPage'
import AceitPage from '@/Containers/AceitPage'
import StorytimePage from '@/Containers/StorytimePage'
import TellMeTxPage from '@/Containers/TellMeTxPage'
import BeastioPage from '@/Containers/BeastioPage'
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Nexusonepage from "@/Containers/Nexusonepage";
const OurWorks = ({
  loading = false,
}) => {
  const { route } = useRouter();
  const { query } = useRouter();
 
  const [selectedCategory, setSelectedCategory] = useState(query.category || "Peace Maker");
 
  const categories = [
    {
      id: "Peace Maker",
      image: img1, // Specify the image path directly
    },
    {
      id: "All Cooks",
      image: img2, // Specify the image path directly
    },
    {
      id: "Fit Circle",
      image: img3, // Specify the image path directly
    },
    {
      id: "Queens of Tens",
      image: img4, // Specify the image path directly
    },

    {
      id: "Ace It",
      image: img5, // Specify the image path directly
    },
    {
      id: "Story Time",
      image: img6, // Specify the image path directly
    },
    {
      id: "Peace Maker",
      image: img7, // Specify the image path directly
    },
    {
      id: "All Cooks",
      image: img8, // Specify the image path directly
    },
    {
      id: "Fit Circle",
      image: img9, // Specify the image path directly
    },
    {
      id: "Queens of Tens",
      image: img10, // Specify the image path directly
    },

    {
      id: "Ace It",
      image: img11, // Specify the image path directly
    },
    {
      id: "Story Time",
      image: img12, // Specify the image path directly
    },
    {
      id: "TellMe TX",
      image: img13, // Specify the image path directly
    },
    {
      id: "Beast.io",
      image: img14, // Specify the image path directly
    },
    {
      id: "Nexxus One",
      image: img15, // Specify the image path directly
    },
  ];
  // Check if selectedCategory exists and has a length
  const isCategorySelected = selectedCategory && selectedCategory.length;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <i className="fa-solid fa-arrow-up bg-red-900"></i> ,
    // prevArrow: <i className="fa-solid fa-arrow-up"></i> ,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
 

 
  // Initialize a variable to store the component to be displayed
  let selectedCategoryComponent;
  // Conditionally assign the component based on the selected category
  if (isCategorySelected) {
    categories.forEach((category) => {
      if (selectedCategory === category.id) {
        switch (selectedCategory) {
          case "Peace Maker":
            selectedCategoryComponent = <PeaceMakerPage />;
            break;
          case "All Cooks":
            selectedCategoryComponent = <AllCookPage />;
            break;
          case "Fit Circle":
            selectedCategoryComponent = <FitCirclePage />;
            break;
          case "Queens of Tens":
            selectedCategoryComponent = <QotPage />;
            break;
          case "Ace It":
            selectedCategoryComponent = <AceitPage />;
            break;
          case "Story Time":
            selectedCategoryComponent = <StorytimePage />;
            break;
          case "TellMe TX":
            selectedCategoryComponent = <TellMeTxPage />;
            break;
          case "Beast.io":
            selectedCategoryComponent = <BeastioPage />;
            break;
          case "Nexxus One":
            selectedCategoryComponent = <Nexusonepage />;
            break;
          // Add more cases for additional categories
          default:
            selectedCategoryComponent = null; // Handle default case
        }
      }
    });
  } else {
    // Handle case when no category is selected
    selectedCategoryComponent = (
      <span className="text-[20px] text-black bg-white font-poppins px-[30px] py-[10px]">
        Not Available
      </span>
    );
  }
  const getAnimationType = (index) => {
    // Assign animations based on the index
    if (index % 3 === 0) {
      return "fade-left";
    } else if (index % 3 === 1) {
      return "flip-up";
    } else {
      return "fade-right";
    }
  };


  return (
    <>
      {route == "/" && (
        // <div className="w-full border-b-[7vh]  lg:border-b-[15vh] xl:border-b-[15vh] border-b-[#424248] relative  left-0  border-t-[white] border-l-[100vw] border-l-[transparent]"></div>
        <div className="Home_Page_component">
          <div
            data-aos="flip-down"
            className="lg:py-0 mb-0 h-[50px] lg:h-[200px] relative flex items-center justify-center"
          >
            <Image
              src={bgimage}
              className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />
            <h1
              data-aos="fade-down"
              className="text-white text-xl md:text-2xl lg:text-[64px] font-['Poppins'] font-bold"
            >
              Our Works
            </h1>
          </div>

          <div className="flex justify-center py-[10px] items-center flex-wrap">
          {categories?.slice(0, 6).map((category, ind) => (

        <div
          key={ind}
          // onClick={() => setSelectedCategory(category?.id)}
          className="query w-[40%] md:w-[31%] z-[22] flex
           justify-center my-[10px] mx-[10px] lg:pr-3"
          data-aos={getAnimationType(ind)}
        >
          <Link href={`/portfolio?category=${category.id}`}>
            <Image src={category?.image} alt="image" className=""/>
          </Link>
        </div>


      ))}
          </div>
        </div>
      )}
      <section
        className={` w-full flex justify-center relative  ${
          route == "/portfolio"
            ? ""
            : " hidden"
        } pt-[100px]   md:pt-[80px]`}
      >
        <div
          // className={`w-full h-full xl:max-w-[1440px] relative ${
          className={`w-[100%] relative ${route == "/" && "top-[-154px]"} ${
            route == "/portfolio" && ""
          }  `}
        >
          <div
            className={`relative pt-[60px] flex flex-col         
            ${route == "/" ? "top-[80px]  " : ""} `}
            //  gap-y-[70px] pl-[30px] md:pl-[80px] top-[60px]
          >

            <div className=" pl-[60px] pb-[50px] font-jakarta">
              <Link href="/">
                <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                  Home &nbsp;/&nbsp;&nbsp;
                </span>
              </Link>
              <span className="text-[#1D356A] text-[14px] font-bold">
                {selectedCategory}
              </span>
            </div>


          <div className="px-4 md:w-[700px] md:px-[5rem] w-[250px] lg:w-[900px]
           xl:w-[1200px] w-[100%] mx-auto lg:mx-auto " >
            <Slider {...settings}>
            {categories?.slice(6).map((category, ind) => (
                <div className="px-2 outline-none"
                  // className={`flex-shrink-0 bg-red-400`}
                  key={ind}
                  onClick={() => setSelectedCategory(category?.id)}
                >
                  
                  <Image
                    src={category?.image}
                    alt="image"
                    width={200}
                    className={`rounded-lg opacity-50 bg-red-400
                    ${
                      selectedCategory === category?.id
                        ? "opacity-95 shadow-lg w-[230px]"
                        : "hover:bg-white hover:opacity-100 hover:w-[250px] ease-in-out duration-500"
                    }   cursor-pointer`}
                  />
                </div>
              ))}
            </Slider>
            </div>
            <div>
              {selectedCategory?.length && !loading ? (
                <>
                  <div className="pt-[100px]">{selectedCategoryComponent}</div>
                </>
              ) : !selectedCategory?.length && !loading ? (
                <>
                  <span className="text-[20px] text-black bg-white font-poppins px-[30px] py-[10px]">
                    Not Avaliable
                  </span>
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
