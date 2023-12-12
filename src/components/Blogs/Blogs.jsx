import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogimg1 from '../../assets/blogs/image6.png'
import bgImage from "../../assets/bg-images/Contact sections.png";
import Loader from "../UI/Loader";
import Button from "../UI/Button";
// import bg from "../../assets/services/check.png";

const Blogs = ({ blogs, totalCount, onPageChange }) => {
  console.log(blogs)
  return (
    <>
      <section className="w-full flex items-center justify-center relative top-[5px] pt-[130px] pb-[10px] lg:py-[130px] blogs-page-main">
      {/* <div className={`absolute top-[-20px]`}>
            <Image src={bgImage} alt="image" className=""/>
          </div> */}
        <div className={`w-full min-h-[100vh] xl:max-w-[1240px] relative`}>

          <div className="relative top-[40px]  flex flex-col gap-y-[32px] px-[30px] xl:px-[40px]">
            <h1 className="text-[32px] lg:text-[48px] font-poppins font-bold text-[#161B36] xl:text-center">
              Blogs
            </h1>
            <div className="flex gap-x-[32px] justify-between xl:justify-center gap-y-[40px] overflow-scroll lg:overflow-hidden lg:flex-wrap">
              {blogs?.length ? (
                blogs?.map((blog, ind) => {
                  let today = new Date(blog?.attributes?.createdAt);
                  let options = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  let formattedDate = today.toLocaleDateString(
                    "en-US",
                    options
                  );
                  return (
                    <Link
                      href={`/blogs/${blog?.attributes?.slug}`}
                      className="w-full md:w-[260px] bg-[#20274d] pb-[20px] flex flex-col"
                      key={ind}
                      data-aos="flip-left"
                    >
                      <div className="img-container w-[full] h-[210px]">
                        <Image
                          unoptimized={true}
                          // src={`http://localhost:1337${blog?.attributes?.thumbnail?.data?.attributes?.url}`}
                          src={
                            blog?.attributes?.thumbnail?.data?.attributes?.url
                          }
                          alt="img"
                          width={1200}
                          height={1200}
                          // src={blogimg1}
                        
                        />
                      </div>
                      <div className="px-[10px] md:px-[27px] py-[20px] text-white xl:w-[auto] w-[200px] bg-[#20274d]">
                        <span className="text-[17px] font-['Poppins'] font-bold">
                          {blog?.attributes?.title}
                        </span>
                        {/* <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                          {formattedDate}
                        </p> */}
                      </div>
                    </Link>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
            {totalCount > blogs?.length ? (
              <Button
                className="w-fit px-[40px] mx-auto uppercase font-['Poppins'] py-[7px]"
                onClick={onPageChange}
              >
                Read More
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
