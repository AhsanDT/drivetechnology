import React from 'react'
import Image from "next/image";
import serviceImg from "../../assets/bg-images/services-bg-img.png";

function Heading(props) {
  return (
    <div className='relative'>
        <Image src={serviceImg} alt="" className='w-[100%] h-[270px]' />
        <div className='absolute top-[0px] w-[100%] h-[100%] flex items-center justify-center'>
            <h1 class="text-center text-white text-[34px] sm:text-[54px] font-bold font-['Poppins'] tracking-wider mt-[70px]">
                {props.heading}
            </h1>
        </div>
    </div>
  )
}

export default Heading