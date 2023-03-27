import Image from "next/image";
import React, { useState } from "react";
import { reviews } from "../data/reviews";
import EventServices from "./EventServices";
import gallery1 from "../public/gallery/img13.png";
import gallery2 from "../public/gallery/img17.png";

const ServicePage = () => {
  const [index, setIndex] = useState(0);
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
                <span className="flex flex-col xl:flex-row gap-x-1">
                  Events <span>Planned</span>
                </span>
              </div>
              <div className=" flex flex-1  flex-col text-md lg:text-base">
                <span className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823]  ">
                  100%
                </span>
                <span className="flex flex-col xl:flex-row gap-x-1">
                  Customer <span>Satisfaction</span>
                </span>
              </div>
              <div className=" flex flex-1  flex-col">
                <span className=" text-4xl lg:text-[54px] lg:leading-[64px] font-extrabold text-[#222823]  ">
                  +20
                </span>
                <span className="flex flex-col xl:flex-row gap-x-1">
                  Happy <span>Clients</span>
                </span>
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
            <div className="md:flex-1 bg-white h-[400px] rounded-lg"></div>
            <div className="md:flex-1">
              <EventServices />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-10">
        <div className=" mt-20 md:mt-[144px] text-center container xl:max-w-7xl mx-auto ">
          <h6 className="leading-[24px] text-[16px] font-medium text-[#6E796F] mb-[16px]">
            REVIEWS
          </h6>
          <h3 className="leading-[50px] font-extrabold text-[43px] mb-10 md:mb-20 text-[#222823] md:leading-[88px] md:text-[81px] ">
            Our clients make <br />
            moments matter
          </h3>
          <div>
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`${
                  index === i ? "block" : "hidden"
                } w-full sm:w-2/3 mx-auto max-w-[400px] lg:max-w-[50%] min-h-[250px] sm:h-[200px] md:h-[350px] lg:h-[300px] `}
              >
                <p className=" text-[#535353] text-md md:text-[24px] md:leading-[32px] font-normal">
                  {review.content}
                </p>
                <p className=" font-bold mt-[24px] text-[16px] leading-[24px]">
                  {review.name}
                </p>
                <p className="mt-[8px] text-[12px] leading-[16px] text-[#6E796F] italic">
                  {review.title}
                </p>
              </div>
            ))}
          </div>
          <div className="z-30 flex justify-center space-x-3 mt-[30px] ">
            {reviews.map((review, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-6 h-6 rounded-full ${
                  index === i
                    ? "bg-[#DF4D31] border border-[#DF4D31]"
                    : "border border-gray-600"
                }`}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className=" px-5 sm:px-10 bg-[#F0F0F0] ">
        <div className=" mt-20 md:mt-[144px] container mx-auto xl:max-w-7xl py-20 md:py-[104px] ">
          <h4 className=" text-center text-2xl mb-20 text-[#222823] font-bold">
            Explore moments we've helped make
          </h4>
          <div className="flex gap-5 flex-col sm:flex-row">
            <div className="sm:flex-1 bg-black rounded-lg w-full">
              <Image
                quality={30}
                placeholder="blur"
                src={gallery1}
                alt="service image"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg "
              />
            </div>
            <div className="sm:flex-1 bg-black rounded-lg w-full">
              <Image
                quality={30}
                placeholder="blur"
                src={gallery2}
                alt="service image"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
