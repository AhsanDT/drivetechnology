import React from 'react'
import Image from "next/image";
function Peacemaker({ data }) {

  const logoStyle = {
    width: data.logoWidth,
    height: data.logoHeight,
  }

  const backColor = {
    background: `var(--Background-Peacemaker, ${data.backgroundColor})`, // Use the passed background color prop
  };

  const backImg = {
    backgroundImage: `url(${data.backGroundImg})`,
  }

  const NumbersMain = {
    backgroundImage: `${data.numberColor}`,
    "background-clip": "text",
    "-webkit-background-clip": "text",
    color: "transparent",
  };

  const textColor = {
    color: data.textColor,
    // paddingLeft: "30px",
  };

  return (
    <div className='peacemaker-main lg:h-[800px]' style={backColor}>
      <div className=''>

        {/* goole play and app store structure starts here */}
        <div className='flex h-[0px] justify-center items-end bottom-[-950px] lg:bottom-[-720px] gap-4 relative ml-auto z-[4] hidden lg:flex'>
        <a data-aos="flip-down" href='#'><Image src={data.googlePlayImage} className='w-32 xl:w-[250px]' /></a>
          <a data-aos="flip-up" href='#'><Image src={data.appStoreImage} className='w-32 xl:w-[250px]' /></a>
        </div>
        {/* goole play and app store structure Ends here */}

        <div className='lg:flex'>

          {/* Peacemaker content structure starts here */}
          <div className='Peacemaker-main w-[full]  lg:w-[40%] py-4 lg:py-0'>

            <div className='h-[800px] absolute  lg:flex  items-center lg:w-[40%]  w-[100%]   '>
              <h1
               data-aos="zoom-in"
               className='text-[250px]  text-cyan-700  font-bold tracking-[5.85px] lg:text-[400px] xl:text-[500.03px]  ' style={NumbersMain}>{data.headerText}</h1>
            </div>


            <div className='relative font-bold lg:h-[800px] px-4 lg:px-12 flex flex-wrap items-center'>
              <Image data-aos="flip-down" src={data.peaceMakerLogo} style={logoStyle}/>

              <div className='ml-auto'>
                <h1 data-aos="fade-left" className="font-bold font-poppins font-bold text-4xl lg:text-5xl xl:text-6xl tracking-widest pt-8 lg:pt-0" style={textColor}>{data.heddingText}</h1>
               <p data-aos="fade-right" className={`${ data.description4Style}  font-gilroy font-medium text-xl leading-normal tracking-widest pt-8`} style={textColor}>{data.paraText}</p>
              </div>
              <div>
                  <a data-aos="flip-up" href='#'><u className='' style={textColor}><p className={`${ data.description4Style1}  opacity-80 font-thin py-4 lg:pt-0 font-gilroy lg:text-2xl`} style={textColor}>{data.websiteLink}</p></u></a>
              </div>
            </div>

          </div>
          {/* Peacemaker content structure Ends here */}

          {/* Line Images Structure starts here */}
          <div className=''>
            <Image data-aos="fade-up" src={data.lineImg1} className='mt-8 h-[300px] hidden lg:block' />
            <Image data-aos="flip-up" src={data.lineImg2} className='mt-10 hidden lg:block' />
            <Image data-aos="fade-down" src={data.lineImg3} className='mt-28 hidden lg:block' />
          </div>
          {/* Line Images Structure starts here */}

          {/* Peacemaker Image Structure starts here */}
          <div data-aos="zoom-in" className='w-[full] relative lg:w-[60%] flex justify-end pt-8 pr-8 hidden'>
            <Image
              src={data.Peacemaker2img}
              className="absolute top-0 left-0 w-full lg:h-[750px] object-cover  md:z-[1]"
            />
            <p data-aos="fade-down" className="text-white text-5xl font-semibold font-gilroy z-[1000000] tracking-wide">{data.year}</p>
          </div>


          <div data-aos="zoom-in" className='w-[full] h-[400px] relative lg:w-[60%] gird grid-cols-1 lg:flex justify-end pt-8 px-2 lg:pr-8'>
            <Image
              src={data.Peacemaker2img}
              className="absolute top-0 left-0 w-full h-[400px] lg:h-[800px] object-cover"
            />
            <p data-aos="fade-down" className="text-white text-5xl font-bold text-end font-gilroy z-[1000000] tracking-wide">{data.year}</p>
            <div className='flex h-[0px] justify-center items-end gap-4 relative ml-auto z-[4] top-[150px] lg:hidden'>
          <a data-aos="flip-down" href='#'><Image src={data.googlePlayImage} className='w-52 xl:w-[333px]' /></a>
          <a data-aos="flip-up" href='#'><Image src={data.appStoreImage} className='w-52 xl:w-[333px]' /></a>
        </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Peacemaker