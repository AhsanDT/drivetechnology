import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MobileHeader = () => {
    const {route} = useRouter()
  return (
    <div className='fixed top-[68px] z-40 bg-[#1F1F22ED] w-full h-[100vh] backdrop-blur-[5px] pt-[20px] '>
    <div className=' '>
        <ul className='flex flex-col gap-y-[24px] justify-center items-center text-[36px] font-oswald font-bold text-white'>
        <Link href={"/"}><li className={`${ route == "/" ? "text-[#ffffff]" : route == "/startproject" ?"text-[#ffffff]": "text-[#808080] " }`}>Home</li></Link>
            <Link href={"/services"}><li className={`${ route == "/services" ? "text-[#ffffff]" : "text-[#808080] " }`}>Services</li></Link>
            <Link href={"/development"}><li className={`${ route == "/development" ? "text-[#ffffff]" : "text-[#808080] " }`}>Development</li></Link>
            <Link href={"/portfolio"}><li className={`${ route == "/portfolio" ? "text-[#ffffff]" : route == "/portfolio/[projectId]" ?"text-[#ffffff]": "text-[#808080] " }`}>Portfolio</li></Link>
            <Link href={"/partnership/core"}><li className={`${ route == "/partnership/core" ? "text-[#ffffff]" : route == "/partnership/ecological" ?"text-[#ffffff]": "text-[#808080] " }`}>Partnership</li></Link>
            <Link href={"/blogs"}><li className={`${ route == "/blogs" ? "text-[#ffffff]" : route == "/blogs/[blogId]" ?"text-[#ffffff]": "text-[#808080] " }`}>Blogs</li></Link>
        </ul>
    </div>
    </div>
  )
}

export default MobileHeader