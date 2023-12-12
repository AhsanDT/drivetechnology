import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 md:w-14 md:h-14 rounded-full text-white  bg-[#20274D] bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[25%] right-2 items-center absolute z-10 top-[25%] right-2 right-[-40px] md:right-[-60px] xl:right-[-70px]"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default SampleNextArrow;