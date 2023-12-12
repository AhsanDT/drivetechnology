import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { richTextReducer } from "helpers/utils";
import image from "../../assets/ourwork/design.png";
import Button from "../UI/Button";
import blogimg from '../../assets/blogs/image6.png'

const Blogs = ({ blogs }) => {
  const { route } = useRouter();
  return (
    <>
      {route == "/" && (
        <div className="w-full hidden border-b-[7vh] lg:border-b-[10vh] border-b-[white]  border-t-[white] relative top-[8px] xl:top-[8px] left-0 border-r-[100vw] border-r-[transparent]"></div>
      )}
      <section className="z-[2] w-full flex justify-center linear-grad relative top-[6px] pt-[120px] md:pt-[100px]">
        <div className="w-full h-full xl:max-w-[1440px] relative top-[-144px] overflow w-hidden">
          <div className="absolute h-[1100px top-[-270px] overflow-hidden">
            {/* <Image src={image} alt="image" /> */}
          </div>
          <div className="relative top-[60px] flex flex-col gap-y-[70px] px-[30px] md:px-[80px]">
            <h1 className="text-[32px] lg:text-[48px] font-['poppins'] font-bold text-slate-900 xl:text-center pt-[50px] md:pt-0 ">
              Blogs
            </h1>

            <div className="flex gap-x-[32px] xl:justify-center overflow-scroll xl:overflow-hidden">
              {blogs.map((blog, ind) => {
                return (
                  <div
                  data-aos="flip-left"
                  className="relative w-full bg-[#20274D] md:w-[230px] flex flex-col gap-y-[18px]"
                  key={ind}
                >
                  <div className="img-container w-[230px] h-[210px]">
                    {blog?.attributes && (
                      <Image
                        src={
                          blog?.attributes?.thumbnail?.data?.attributes?.url
                        }
                        alt="img"
                        width={900}
                        height={900}
                        // src={blogimg}
                      />
                    )}
                  </div>
                  <div className="px-[18px] flex-1 flex flex-col justify-between">
                    <span className="text-[17px] text-white font-bold font-poppins">
                      {/* {blog?.attributes?.title} */}Seven lessons on how technology transformations can deliver value
                    </span>
                    {/* <span
                      className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]"
                      dangerouslySetInnerHTML={{
                        __html: richTextReducer(
                          blog?.attributes?.description.slice(0, 60)
                        ),
                      }}
                    ></span> */}
                    <div className="mt-auto">
                      <Link href={`/blogs/${blog?.attributes?.slug}`}>
                        <button className="button border border-white bg-white text-[#20274D] font-medium font-['Roboto'] w-full my-[20px] px-[20px] py-[10px]">
                          View Blog
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>                
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
