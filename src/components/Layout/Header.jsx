import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Searchicon from "../../assets/Search.png";
import dtlogo from "../../assets/dt-Logo.png";
import Button from "../UI/Button";
import Reviewbg from "../../assets/bg-images/Partner-ship.png";
import MobileHeader from "./MobileHeader";
import dtlogo2 from "../../assets/logo1.png";

const Header = ({ services, developments }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { route } = useRouter();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoWidth = route === "/" ? "w-48" : "w-28";
  const logoToShow = route === "/" ? dtlogo : dtlogo2;

  const allPages = [
    { title: "HOME", path: "/" },
    { title: "SERVICES", path: "/services" },
    { title: "DEVELOPMENT", path: "/development" },
    { title: "PORTFOLIO", path: "/portfolio" },
    // { title: "PARTNERSHIP", path: "/partnership" },
    { title: "BLOG", path: "/blogs" },
    { title: "CONTACT", path: "/startproject" },

    // Add other pages from your navbar here
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      // Filter pages based on 'value' in title
      const filteredPages = allPages.filter((page) =>
        page.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredPages);
    } else {
      setSuggestions([]); // Clear suggestions if search term is empty
    }
  };

  const handleSuggestionClick = (path) => {
    // Logic to handle click on a suggestion
    // Redirect the user to the relevant page based on the path clicked
    // You can use Next.js router to redirect
    router.push(path);
  };
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span className="search-span">
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="text-[yellow]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      {/* <div className="lg:py-0 relative flex items-center justify-center"> */}
      

      <header
        className={`w-full dt-nav px-[30px] xl:px-[80px] lg:px-[60px] ${
          route == "/" ? " z-10" : ""
        }  md:px-[25px] py-[10px] md:py-[10px] fixed top-0 z-[2000000] flex justify-center ${
          isSticky ? "bg-[#20274D] shadow-md" : ""
        }`}
      >
        <Image
          src={Reviewbg}
          className={` 
          ${
            route == "/services"  ? "hidden" : ""
          }
          ${
            route == "/development"  ? "hidden" : ""
          }
          
          ${
            route == "/"  ? "hidden" : ""
          } absolute top-0 left-0 w-full h-full object-cover z-[-1]`}
        />
        {isActive && (
          <div className="absolute left-0 top-[100px] w-full h-screen bg-[#20274DE5] backdrop-blur-[5px] z-[99]"></div>
        )}
        <div className="w-full h-[auto] lg:h-[80px] flex flex-wrap
         md:flex-nowrap items-center justify-center gap-x-[0px]">

          <div className="md:flex items-center justify-between">
            <div className="flex gap-x-4 md:mx-auto  items-center w-28 lg:w-48 h-[45px]">
              <Link href="/">
                <Image src={logoToShow} className={logoWidth} alt="img"/>
              </Link>
              <Link href="/"> </Link>
            </div>

            <div className="xl:mx-10">
              <ul
                className="gap-x-[12px] xl:gap-x-[40px] items-center hidden md:flex justify-center font-poppins"
                id="navbar-example2"
              >
                <Link href="/">
                  <li
                    className={`${
                      route == "/" 
                        ? "text-[#ffffff] border-b-[white]"
                        : "text-[white] "
                    }  lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent hover:border-b-[white] hover:text-white`}
                  >
                    HOME
                  </li>
                </Link>
                <div
                  className="flex gap-x-2 items-center cursor-pointer group relative z-[111] h-[90px]"
                  onMouseOver={() => setIsActive(true)}
                  onMouseOut={() => setIsActive(false)}
                >
                  <Link href="/services">
                    <li
                      className={`${
                        route == "/services"
                          ? "text-[#ffffff] border-b-[white]"
                          : "text-[white] "
                      }  lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent  group-hover:border-b-[white] group-hover:text-white`}
                    >
                      SERVICES
                    </li>
                  </Link>
                  <i
                    className={`${
                      route == "/services" && "rotate-[180deg] text-white border-b-[white]"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[259.23px] absolute top-[82px] p-[16px] z-10 bg-[#020C22] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      {services?.slice(0, 10)?.map((service, ind) => (
                        <Link
                          href={`/services/#${service?.attributes?.title?.replaceAll(
                            " ",
                            "-"
                          )}`}
                          key={ind}
                        >
                          <li className="lg:text-[14px] text-[10px] font-roboto text-white border-b-[1px] border-transparent hover:border-b-[white] w-fit">
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
                  <Link href="/development">
                    <li
                      className={`${
                        route == "/development"
                          ? "text-[#ffffff] border-b-[white]"
                          : "text-[white] "
                      } lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent group-hover:border-b-[white] group-hover:text-white`}
                    >
                      DEVELOPMENT
                    </li>
                  </Link>
                  <i
                    className={`${
                      route == "/development" && "rotate-[180deg] text-white border-b-[white]"
                    } fa-solid fa-chevron-down text-[#808080] text-[12px] group-hover:rotate-[180deg] group-hover:text-white font-bold`}
                  ></i>
                  <div className="w-[275.23px] absolute top-[82px] p-[16px] z-10 bg-[#020C22] hidden group-hover:block">
                    <ul className="flex flex-col gap-y-[17px]">
                      {developments?.slice(0, 10)?.map((development, ind) => (
                        <Link
                          href={`/development/#${development?.attributes?.title?.replaceAll(
                            " ",
                            "-"
                          )}`}
                          key={ind}
                        >
                          <li className="lg:text-[14px] text-[10px] font-roboto text-white border-b-[1px] border-transparent hover:border-b-[white] w-fit">
                            {development?.attributes?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* ... (similar modifications for the "DEVELOPMENT" section) */}
                <Link href="/portfolio">
                  <li
                    className={`${
                      route == "/portfolio" || route == "/portfolio/[projectId]"
                        ? "text-[#ffffff] border-b-[white]"
                        : "text-[white] "
                    }  lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent hover:border-b-[white] hover:text-white`}
                  >
                    PORTFOLIO
                  </li>
                </Link>
                {/* <Link href="/partnership">
                  <li
                    className={`${
                      route == "/partnership" ||
                      route == "/partnership/ecological"
                        ? "text-[#ffffff] border-b-[white]"
                        : "text-[white] "
                    }  lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent hover:border-b-[white] hover:text-white`}
                  >
                    PARTNERSHIP
                  </li>
                </Link> */}
                <Link href="/blogs">
                  <li
                    className={`${
                      route == "/blogs" || route == "/blogs/[blogId]"
                        ? "text-[#ffffff] border-b-[white]"
                        : "text-[white] "
                    }  lg:text-[14px] text-[10px] border-b-[1px] tracking-widest border-transparent hover:border-b-[white] hover:text-white`}
                  >
                    BLOG
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {!openMobileMenu ? (
            <i
              className="fa-solid ml-auto mr-4 -4 fa-bars md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(true)}
            ></i>
          ) : (
            <i
              className="fa-solid ml-auto mr-4 fa-xmark md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(false)}
            ></i>
          )}

          {/* Conditionally render the search input based on openMobileMenu */}
          <div className="flex md:ml-10  w-[100%] md:w-[200px] relative ">
            {openMobileMenu ? null : (
              <div className="w-[100%] flex items-center  mt-4 md:mt-0 justify-between border px-4 border-white rounded-[10px]">
                <input
                  type="text"
                  placeholder="Search"
                  style={{ color: "white" }}
                  className="w-[90%] bg-transparent outline-none py-[8px]"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <Image src={Searchicon} alt="" className="w-6 h-6 text-white" />
                {searchTerm.trim() !== "" && suggestions.length === 0 && (
                  <div className="absolute right-[0px] top-[60px] md:top-[40px] w-[100%]  mt-2 bg-[#20274D] border border-white text-white rounded-md shadow-md">
                    <p className="p-2">No Results Found</p>
                  </div>
                )}
                {suggestions.length > 0 && searchTerm.trim() !== "" && (
                  <div className="absolute right-[0px] top-[60px] md:top-[40px] w-[100%]  mt-2 text-white border border-white bg-[#20274D] rounded-md shadow-md">
                    <ul className="py-2">
                      {suggestions.map((page, index) => (
                        <li
                          key={index}
                          className="cursor-pointer  p-2 hover:bg-[#3A4969]"
                          onClick={() => handleSuggestionClick(page.path)}
                        >
                          {highlightText(page.title, searchTerm)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
      {openMobileMenu && <MobileHeader />}
    </>
  );
};

export default Header;
