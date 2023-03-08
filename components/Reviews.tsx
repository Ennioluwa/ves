import Image from "next/image";
import React, { use, useState } from "react";
import bridePicture from "../public/princify-1.png";
import { reviews } from "../data/reviews";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" xl:max-w-7xl mx-auto text-center px-5 sm:px-10 mt-20 md:mt-[144px]">
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
      <div className=" relative -mb-28 md:-mb-[204px] ">
        <Image
          src={bridePicture}
          alt="bride picture"
          className=" object-cover w-full brightness-50 h-[200px] md:h-[300px] lg:h-[480px] mt-20 md:mt-[144px] object-center rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex items-center">
          <div className="flex text-white text-left items-center gap-[16px]">
            <h3 className="ml-5 sm:ml-[40px]  font-extrabold text-4xl leading-[50px] md:text-[80px] md:leading-[90px] lg:text-[121.5px] lg:leading-[128px]">
              Everything <br />
              event for you
            </h3>
            <button className="hidden md:block">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M108.536 133.536L138.536 103.536C140.488 101.583 140.488 98.4171 138.536 96.4645L108.536 66.4645C106.583 64.5118 103.417 64.5118 101.464 66.4645C99.5118 68.4171 99.5118 71.5829 101.464 73.5355L122.929 95H65C62.2386 95 60 97.2386 60 100C60 102.761 62.2386 105 65 105H122.929L101.464 126.464C99.5118 128.417 99.5118 131.583 101.464 133.536C103.417 135.488 106.583 135.488 108.536 133.536ZM180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100C20 55.8172 55.8172 20 100 20C144.183 20 180 55.8172 180 100ZM100 170C138.66 170 170 138.66 170 100C170 61.3401 138.66 30 100 30C61.3401 30 30 61.3401 30 100C30 138.66 61.3401 170 100 170Z"
                  fill="#DF4D31"
                />
              </svg>
            </button>
            <button className=" md:hidden h-10 w-10 border-4 border-[#DF4D31] text-[#DF4D31] text-3xl rounded-full grid place-items-center">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
