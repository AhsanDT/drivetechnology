import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../assets/logo.png";
import Button from "../UI/Button";
import MobileHeader from "./MobileHeader";

const Header = ({ services, developments }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { route } = useRouter();
  return (
    <>
      <header className="w-full bg-[#36373A] px-[30px]  md:px-[80px] py-[4px] md:py-[10px] fixed top-0 z-[200] flex justify-center">
        {isActive && (
          <div className="absolute left-0 top-[100px] w-full h-screen bg-[#1F1F22ED] backdrop-blur-[5px] z-[99]"></div>
        )}
        <div className="w-full  h-[64px] lg:h-[80px]  flex items-center justify-between  gap-x-[6 4px]">
          <div className="flex items-center gap-x-[64px] ">
            <div className="flex gap-x-2 items-center">
              <Link href={"/"}>
                <Image src={logo} width={33} height={45} alt="img" />
              </Link>
              <Link href={"/"}>
                {" "}
                <span className="text-[13px] sm:text-[20px] text-white font-bold  md:hidden lg:block">
                  Drive Technology
                </span>
              </Link>
            </div>

            <div>
              <ul
                className="gap-x-[32px] xl:gap-x-[64px] items-center hidden md:flex font-roboto"
                id="navbar-example2"
              >
                <Link href={"/"}>
                  <li
                    className={`${
                      route == "/"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/startproject"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Home
                  </li>
                </Link>
                <div
                  className="flex gap-x-2 items-center cursor-pointer group relative z-[111] h-[90px]"
                  onMouseOver={() => setIsActive(true)}
                  onMouseOut={() => setIsActive(false)}
                >
                  <Link href={"/services"}>
                    <li
                      className={`${
                        route == "/services"
                          ? "text-[#ffffff] border-b-[#136C2C]"
                          : "text-[#808080] "
                      }  text-[14px] font-bold border-b-[4px] border-transparent  group-hover:border-b-[#136C2C] group-hover:text-white`}
                    >
                      Services
                    </li>
                  </Link>
                  <i
                    className={`${
                      route == "/services" && "rotate-[180deg] text-white"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[342px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      {services?.slice(0, 10)?.map((service, ind) => (
                        <Link
                          href={`/services/#${service?.attributes?.title?.replaceAll(' ', '-')}`}
                          key={ind}
                        >
                          <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C] w-fit">
                            {service?.attributes?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="flex gap-x-2 items-center cursor-pointer group relative z-[111] h-[90px]"
                  onMouseOver={() => setIsActive(true)}
                  onMouseOut={() => setIsActive(false)}
                >
                  <Link href={"/development"}>
                    <li
                      className={`${
                        route == "/development"
                          ? "text-[#ffffff] border-b-[#136C2C]"
                          : "text-[#808080] "
                      } text-[14px] font-bold border-b-[4px] border-transparent group-hover:border-b-[#136C2C] group-hover:text-white`}
                    >
                      Development
                    </li>
                  </Link>

                  <i
                    className={`${
                      route == "/development" && "rotate-[180deg] text-white"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[342px] absolute top-[82px] font-jakarta p-[16px] z-10 bg-[#36373A] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      {developments?.slice(0, 10)?.map((development, ind) => (
                        <Link
                          href={`/development/#${development?.attributes?.title?.replaceAll(' ', '-')}`}
                          key={ind}
                        >
                          <li className="text-[14px] text-white border-b-[4px] border-transparent hover:border-b-[#136C2C] w-fit">
                            {development?.attributes?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href={"/portfolio"}>
                  {" "}
                  <li
                    className={`${
                      route == "/portfolio"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/portfolio/[projectId]"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Portfolio
                  </li>
                </Link>
                <Link href={"/partnership"}>
                  <li
                    className={`${
                      route == "/partnership"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/partnership/ecological"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Partnership
                  </li>
                </Link>
                <Link href={"/blogs"}>
                  {" "}
                  <li
                    className={`${
                      route == "/blogs"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : route == "/blogs/[blogId]"
                        ? "text-[#ffffff] border-b-[#136C2C]"
                        : "text-[#808080] "
                    }  text-[14px] font-bold border-b-[4px] border-transparent hover:border-b-[#136C2C] hover:text-white`}
                  >
                    Blog
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <Link href={"/startproject"}>
            <Button className="hidden xl:block">Start a Project</Button>{" "}
          </Link>
          {!openMobileMenu ? (
            <i
              className="fa-solid fa-bars md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(true)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(false)}
            ></i>
          )}
        </div>
      </header>

      {openMobileMenu && <MobileHeader />}
    </>
  );
};

export default Header;
