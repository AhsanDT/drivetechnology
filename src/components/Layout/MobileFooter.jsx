import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterIcon from "./FooterIcon";
import logo from "../../assets/logo1.png";

const MobileFooter = () => {
  return (
    <>
      <div className="flex flex-col gap-y-[17px]">
        <h3>Social Media</h3>
        <div className="flex gap-x-[16px] items-center">
          <FooterIcon icon="fa-brands fa-facebook-f" link="https://www.facebook.com/drivetechnologiesuae?_rdc=1&_rdr" className="bg-[#3B5998]" />
          <FooterIcon icon="fa-brands fa-twitter" link="https://twitter.com/DriveTechuae" className="bg-[#2DAAE1]" />
          <FooterIcon
            icon="fa-brands fa-linkedin-in"
            link="https://www.linkedin.com/company/drivetechnologiesuae/"
            className="bg-[#007BB6]"
          />

        </div>
      </div>
      <div className="flex flex-col gap-y-[17px]">
        <h3>Contact us</h3>
        <span className="font-normal text-white text-[14px]">
          Email: <span className="text-[#4169E1]"><a href="mailto:info@drivetechnology.co">info@drivetechnology.co</a></span>
        </span>
        <span className="font-light text-white text-[14px]">
          Phone: <span><a href="tel:+1 (888) 910 8298 92188">+1 (888) 910 8298 92188 </a></span>
        </span>
      </div>
      <div className="border-b-[2px] border-b-[#A3A3A3]">
        <ul className="flex flex-col gap-y-[25px]">
          <Link href={"/services"}><li>Services</li></Link>
          <Link href={"/development"}><li>Development</li></Link>
          <Link href={"/blogs"}><li>Resources</li></Link>
          <li className="pb-[25px]">Legal</li>
        </ul>
      </div>
      {/* <div className="flex justify-start gap-x-[40px]">
        <Link href={"/termsandconditions"}><h4>Terms of use</h4></Link>
        <Link href={"/privacypolicy"}><h4>Privacy</h4></Link>
      </div> */}
      <div className="flex gap-x-2 justify-start items-center">
        <Link href={"/"}>
          <Image src={logo} className="my-4" />
        </Link>
      </div>
      <div>
        {" "}

      </div>
    </>
  );
};

export default MobileFooter;
