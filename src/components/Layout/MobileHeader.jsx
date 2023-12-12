import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MobileHeader = () => {
  const { route } = useRouter();

  return (
    <div className='fixed top-[0px] z-[170000] bg-[#20274D] flex items-center justify-center w-full h-[100vh] backdrop-blur-[5px] pt-[115px]'>
      <div className=' '>
        <ul className='flex flex-col gap-y-[24px] justify-center items-center text-[26px] font-poppins sm:tracking-widest font-medium" text-white'>
          <Link href={"/"}>
            <li className={`${
              (route === "/" && route !== "/startproject") ? "text-[#ffffff] border-b-2 border-white" : "text-white border-b-[1px] border-transparent"
            }`}>Home</li>
          </Link>

          <Link href={"/services"}>
            <li className={`${route == "/services" ? "text-[#ffffff] border-b-2 border-white" : "text-white"}`}>Services</li>
          </Link>

          <Link href={"/development"}>
            <li className={`${route == "/development" ? "text-[#ffffff] border-b-2 border-white" : "text-white"}`}>Development</li>
          </Link>

          <Link href={"/portfolio"}>
            <li className={`${route == "/portfolio" || route == "/portfolio/[projectId]" ? "text-[#ffffff] border-b-2 border-white" : "text-white"}`}>Portfolio</li>
          </Link>

          {/* Commented out link example */}
          {/* <Link href={"/partnership"}>
            <li className={`${route == "/partnership/core" || route == "/partnership/ecological" ? "text-[#ffffff] border-b-2 border-white" : "text-white"}`}>Partnership</li>
          </Link> */}

          <Link href={"/blogs"}>
            <li className={`${route == "/blogs" || route == "/blogs/[blogId]" ? "text-[#ffffff] border-b-2 border-white" : "text-white"}`}>Blogs</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileHeader;

