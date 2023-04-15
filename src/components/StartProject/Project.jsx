import { addEvent } from "api";
import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Project = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => {},
    onDateAndTimeSelected: () => {},
    onEventTypeViewed: () => {},
    onEventScheduled: (e) => onCreateEvent(e.data.payload),
  });

  const onCreateEvent = async (data) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${
          process.env.NEXT_PUBLIC_CALENDLY_API_TOKEN ||
          "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgwMDQ0Mzc1LCJqdGkiOiIzZDdkOTU3Mi04MGYzLTQ2ZjEtYmZmMi02ZTFmZTllNjY0NzYiLCJ1c2VyX3V1aWQiOiIyZjNlMjc3Ny05NDdmLTQwNmEtOTMwYi1jNThjYThlNzZkMDkifQ.lD_H94LahLJ6bywDroJ7E7Futm5ScvW1OD4I6bjcWC4InkMrg1DoeOWblPKrrVDax13K0HUPKjl1CKTGTR6hDg"
        }`
      );
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let data1 = await fetch(data?.invitee?.uri, requestOptions);
      data1 = await data1.json();
      let data2 = await fetch(data?.event?.uri, requestOptions);
      data2 = await data2.json();
      let obj = {
        name: data1?.resource?.name,
        email: data1?.resource?.email,
        number:
          data1?.resource?.questions_and_answers?.find(
            (num) => num?.question === "Phone Number"
          )?.answer || "",
        sms_number: data1?.resource?.text_reminder_number,
        description:
          data1?.resource?.questions_and_answers?.find(
            (num) =>
              num?.question ===
              "Please share anything that will help prepare for our meeting."
          )?.answer || "",
        timezone: data1?.resource?.timezone,
        guests: JSON.stringify(data2?.resource?.event_guests),
        datetime: data2?.resource?.start_time,
        meet_link: data2?.resource?.location?.join_url,
      };
      await addEvent({
        data: obj,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full top-[120px] flex justify-center  relative pb-[120px] overflow-hidden">
      <div className="w-full xl:max-w-[1540px] h-full px-[30px] lg:px-[130px]">
        <div className="flex flex-col gap-y-[20px] lg:flex-row justify-center items-center">
          <h1 className="text-[24px] font-oswald font-bold xl:w-[320px]">
            Book a call with us by selecting any of the dates that your are
            available on.
          </h1>
          <div className="w-full overflow-hidden pb-[50px]">
            <InlineWidget
              url="https://calendly.com/drivetechandy/30min"
              styles={{ height: "750px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
