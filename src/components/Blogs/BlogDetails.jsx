import Image from "next/image";
import Link from "next/link";

import Layout from "../Layout/Layout";
import Loader from "../UI/Loader";
import WhiteLoader from "../UI/WhiteLoader";

const BlogDetails = ({ blog, onLike }) => {
  return (
    <Layout>
      <section className="flex justify-center py-[50px] px-[30px] md:px-[130px]  relative top-[50px]">
        <div className="pt-[50px] pb-[92px] w-full xl:max-w-[1440px]">
          {!blog?.attributes ? (
            <WhiteLoader />
          ) : (
            <>
              <div className=" font-jakarta">
                <Link href="/blogs">
                  <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                    Blog &nbsp;/&nbsp;&nbsp;
                  </span>
                </Link>
                <span className="text-[#1D356A] text-[14px] font-bold">
                  {blog?.attributes?.title}
                </span>
              </div>
              <div>
                <div className="pt-[20px]  flex flex-col gap-y-[21px] justify-center md:items-center">
                  <div className="flex items-center  mt-[21px]">
                    <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                    <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <h1 className="text-[32px] font-poppins font-bold text-[#00000S0] lg:text-[48px]  md:text-center">
                    {blog?.attributes?.title}
                  </h1>
                  <span className="font-roboto">
                    {blog?.attributes?.count} Reads
                  </span>
                </div>
                <div className="img-container py-[48px]">
                  {blog?.attributes && (
                    <Image
                      src={blog?.attributes?.thumbnail?.data?.attributes?.url}
                      alt="img"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <div className=" md:px-[120px]  flex flex-col gap-y-[32px] font-jakarta">
                  <div className="flex gap-x-[9px] justify-center items-center">
                    <i
                      className="fa-solid fa-thumbs-up cursor-pointer text-[20px]"
                      onClick={onLike}
                    ></i>
                    <span className="text-[14px] font-roboto">
                      {blog?.attributes?.likes}
                    </span>
                  </div>
                  <p
                    className="font-roboto"
                    dangerouslySetInnerHTML={{
                      __html: blog?.attributes?.description,
                    }}
                  ></p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetails;
