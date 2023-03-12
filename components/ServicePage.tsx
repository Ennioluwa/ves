import React from "react";
import EventServices from "./EventServices";

const ServicePage = () => {
  return (
    <section className="relative">
      <div className=" px-5 sm:px-10">
        <div className=" xl:max-w-7xl container mx-auto mt-20 md:mt-[144px] flex flex-col md:flex-row items-stretch justify-between gap-10">
          <div className="md:flex-1 flex flex-col gap-9 text-[#535353]">
            <h1 className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823]  ">
              Capturing moments, making stories
            </h1>
            <p>
              Every moment is a chance to create a unique and memorable
              experience. With our attention to detail and creative vision, any
              event can be made into a true masterpiece.
            </p>
            <p>
              Trust us to handle every aspect of your event planning from venue
              selection to vendor coordination and everything in between. Let us
              make your next event a story worth telling. Get a quote today
            </p>
            <div className="flex justify-start font-bold text-[#535353] gap-5">
              <div className=" flex flex-1  flex-col items-start">
                <span className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823] ">
                  +40
                </span>
                <span>Events Planned</span>
              </div>
              <div className=" flex flex-1  flex-col text-md lg:text-base">
                <span className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823]  ">
                  100%
                </span>
                <span>Customer Satisfaction</span>
              </div>
              <div className=" flex flex-1  flex-col">
                <span className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823]  ">
                  +20
                </span>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full h-[400px] bg-gray-400"></div>
        </div>
      </div>

      <div className=" mt-20 md:mt-[144px] bg-gray-700 w-screen px-5 sm:px-10 py-20 md:py-[104px] ">
        <div className="container xl:max-w-7xl mx-auto flex flex-col gap-6 ">
          <h3 className="header text-white">
            <span className=" text-white">Don't just dream. </span>
            <span className=" text-primary">Create that Event!</span>
          </h3>
          <p className="text-xl leading-8 md:text-2xl md:leading-8 text-[#A7AEA8]">
            Don't just sit back and imagine{" "}
            <span className=" text-white">your perfect event</span> - let us
            help you bring it to life! We make it all possible at VES.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-10 mt-20">
            <div className="md:flex-1 bg-white h-[400px]"></div>
            <div className="md:flex-1">
              <EventServices />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
