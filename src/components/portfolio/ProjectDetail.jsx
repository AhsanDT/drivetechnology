import Layout from "../Layout/Layout";
import Button from "../UI/Button";
import styles from "../../styles/Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ portfolio }) => {
  return (
    <Layout>
      <section className="w-full xl:max-w-[1640px] xl:mx-auto py-[50px]  relative top-[50px]">
        {/* {DATA.map((data) => {
          return ( */}
        <div className="pt-[50px] pb-[92px] font-jakarta  ">
          <div className="px-[30px] md:px-[130px] font-jakarta">
            <Link href="/portfolio">
              <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                Portfolio &nbsp;/&nbsp;&nbsp;
              </span>
            </Link>
            <span className="text-[#1D356A] text-[14px] font-bold">
              {portfolio?.title}
            </span>
          </div>
          <div>
            <div className="pt-[20px]  flex flex-col gap-y-[21px] justify-center md:items-center">
              <div className="flex items-center px-[30px] md:px-[130px] mt-[21px]">
                <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
              </div>
              <h1 className="text-[32px] font-poppins font-bold text-[#3F3F3F] lg:text-[48px] px-[30px] md:px-[130px]">
                {portfolio?.title}
              </h1>
              <div className="font-roboto text-[15px] px-[30px] md:px-[130px] flex gap-x-[10px] md:gap-x-[40px]">
                <span>{portfolio?.sub_title}</span>
                <span className="text-[black]  w-[2px]">|</span>

                <span>Founder: {portfolio?.founder}</span>
              </div>
              <Link href={portfolio?.link || ""} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Button className="mx-[30px] w-fit md:mx-[130px] px-[16px] border-black py-[8px] font-jakarta text-[14px] hover:bg-black hover:text-white">
                    View Website
                  </Button>
                </a>
              </Link>
            </div>
            <div className="img-container py-[48px]">
              <div className={`${styles.parallax}`}></div>
            </div>
            <div
              className="px-[30px] md:px-[120px] font-roboto xl:px-[300px] flex flex-col gap-y-[32px]"
              dangerouslySetInnerHTML={{ __html: portfolio?.description }}
            >
              {/* <h3 className="text-[32px] text-[#3F3F3F] font-oswald font-bold">
                The Project Sub Title
              </h3>
              <span>{data.subTitle.substring(0, 244)}</span>
              <span>{data.subTitle.substring(244, 600)}</span>
              <span>{data.subTitle.substring(600, 1000)}</span>
              <span>{data.subTitle.substring(1000, 1600)}</span>
            </div> */}
            </div>
            {/* <div className="flex flex-col gap-y-[20px] md:flex-row justify-center gap-x-[10px] xl:gap-x-[180px] px-[30px] md:px-[130px] py-[40px]">
            <div className="img-container w-full md:w-[366px] md:h-[261px]">
              <Image src={data.img} alt="img" />
            </div>
            <div className="img-container w-full md:w-[366px] md:h-[261px]">
              <Image src={data.img} alt="img" />
            </div>
          </div>
          <div className="px-[30px] md:px-[120px] xl:px-[300px] flex flex-col gap-y-[32px]">
            <h3 className="text-[32px] text-[#3F3F3F] font-oswald font-bold">
              The Project Sub Title
            </h3>
            <span>{data.subTitle.substring(0, 244)}</span>
            <span>{data.subTitle.substring(244, 600)}</span>
            <span>{data.subTitle.substring(600, 1000)}</span>
            <span>{data.subTitle.substring(1000, 1600)}</span>
          </div> */}
          </div>
        </div>
        {/* );
        })} */}
      </section>
    </Layout>
  );
};

export default ProjectDetail;
