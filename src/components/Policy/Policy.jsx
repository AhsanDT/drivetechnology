import React from "react";
import Link from "next/link";

import { richTextReducer } from "helpers/utils";

const Policy = ({ title, data }) => {
  if (!data) return null;
  return (

    <section className="py-[50px]  relative top-[50px]  px-[30px] md:px-[130px]">
      <div className="pt-[50px] pb-[92px]">
        <div className="font-jakarta">
          <Link href="/">
            <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
              Home &nbsp;/&nbsp;&nbsp;
            </span>
          </Link>
          <span className="text-[#1D356A] text-[14px] font-bold">{title}</span>
        </div>

        <div className="pt-[20px]  flex flex-col gap-y-[11px]">
          <div className="flex items-center md:justify-center px-[30px] md:px-[130px] mt-[21px]">
            <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
            <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
          </div>
          <h1 className="text-[32px] font-poppins font-bold text-[#3F3F3F] lg:text-[48px] md:text-center ">
            {title}
          </h1>

          <div
            className=" md:px-[120px] xl:px-[200px] xl:pt-[41px]  text-[15px] font-roboto"
            dangerouslySetInnerHTML={{
              __html: richTextReducer(data?.attributes?.description),
            }}
          >
            {/* <h2 className="text-[32px] font-oswald font-bold text-[#3F3F3F]">
              Welcome to Drive Tech
            </h2>
            <br /> <br />
            <p className="tracking-[0.57px]">
              {" "}
              These {title} outline the rules and regulations for the use of
              Drive Tech's Website, located at www.drivetech.com.
              <br /> <br />
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use DriveTech if you do not agree
              to take all of the terms and conditions stated on this page. The
              following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company’s terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client’s needs in respect of
              provision of the Company’s stated services, in accordance with and
              subject to, prevailing law of Netherlands. Any use of the above
              terminology or other words in the singular, plural, capitalization
              and/or he/she or they, are taken as interchangeable and therefore
              as referring to same. <br /> <br /> Cookies <br /> We employ the
              use of cookies. By accessing DriveTech, you agreed to use cookies
              in agreement with the Drive Tech's Privacy Policy. Most
              interactive websites use cookies to let us retrieve the user’s
              details for each visit. Cookies are used by our website to enable
              the functionality of certain areas to make it easier for people
              visiting our website. Some of our affiliate/advertising partners
              may also use cookies <br />
              License <br /> Unless otherwise stated, Drive Tech and/or its
              licensors own the intellectual property rights for all material on
              DriveTech. All intellectual property rights are reserved. You may
              access this from DriveTech for your own personal use subjected to
              restrictions set in these terms and conditions.
              <br /> You must not: <br />
              <ul className="list-disc pl-[20px]">
                <li>Republish material from DriveTech</li>{" "}
                <li>Sell, rent or sub-license material from DriveTech</li>{" "}
                <li> Reproduce, duplicate or copy material from DriveTech</li>{" "}
                <li> Redistribute content from DriveTech</li>
              </ul>
              This Agreement shall begin on the date hereof. Our Terms and
              Conditions were created with the help of the
              <span className="underline">
                {" "}
                Free Terms and Conditions Generator.
              </span>{" "}
              <br />
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Drive Tech does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of Drive Tech,its agents and/or affiliates.
              Comments reflect the views and opinions of the person who post
              their views and opinions. To the extent permitted by applicable
              laws, Drive Tech shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
              <br /> Drive Tech reserves the right to monitor all Comments and
              to remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
              <br /> You warrant and represent that:
              <br />
              <ul className="list-disc pl-[20px]">
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  {" "}
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </li>
                <li>
                  {" "}
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy The Comments will not be used to solicit
                  or promote business or custom or present commercial activities
                  or unlawful activity.
                </li>
              </ul>{" "}
              You hereby grant Drive Tech a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
              <br /> Hyperlinking to our Content <br /> The following
              organizations may link to our Website without prior written
              approval: <br />
              <ul className="list-disc pl-[20px]">
                {" "}
                <li>Government agencies;</li>
                <li> Search engines;</li>
                <li>News organizations;</li>
                <li>
                  {" "}
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and{" "}
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site.
                </li>
              </ul>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
