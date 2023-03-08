import Image from "next/image";
import React from "react";
import quoteImage from "../public/princify-7.png";
import arrow from "../public/rarr.png";

const Quote = () => {
  return (
    <div className=" xl:max-w-7xl mx-auto px-5 sm:px-10 mt-20 md:mt-[144px]">
      <h3 className=" font-bold sm:text-3xl text-xl lg:text-[36px] lg:leading-[48px] text-center mb-20">
        We commit to making every moment unforgettable - <br /> capturing
        memories and turning them into stories
      </h3>
      <div className="flex gap-10 lg:gap-[110px] flex-col md:flex-row justify-between items-center">
        <div className=" flex flex-col gap-[24px] flex-1 order-2 md:order-1 text-[16px] leading-[24px] text-[#535353]">
          <p className=" font-bold ">
            We specialize in creating unforgettable experiences for any
            occasion. Whether you're planning a corporate event, wedding,
            conference, or birthday party, we're here to help you bring your
            vision to life.
          </p>
          <p className=" ">
            Our team of experienced event planners, designers, and coordinators
            are dedicated to making your event a success. We offer a wide range
            of services, including venue selection, decor, catering,
            entertainment, and more. From concept to execution, we make your
            vision a reality
          </p>
          <button className="px-[47.5px] h-[56px] flex items-center bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] self-start text-white ">
            Get a Quote
            <span className=" w-[20px] h-[20px] ml-[10px] text-xl align-baseline ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83334 10H17.1667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1667 5L17.1667 10L12.1667 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className=" flex-1 order-1 md:order-2">
          <Image
            src={quoteImage}
            alt="quote image"
            className=" w-[100vw] object-cover rounded max-h-[360px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
