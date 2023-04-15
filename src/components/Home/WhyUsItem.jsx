import Image from 'next/image'
import React from 'react'

const WhyUsItem = ({data}) => {
  return (
    <>
    <div className='bg-[#444444] w-[121px] h-[121px] flex justify-center items-center'>
    <div className='img-container w-[78px]'>
        <Image src={data.img} alt="img" /> 

    </div>
    </div>
    <p className='text-[16px] font-roboto font-normal lg:text-center'>{data.content}</p>
    </>
  )
}

export default WhyUsItem