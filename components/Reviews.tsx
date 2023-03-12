import React, { useState } from "react";
import { reviews } from "../data/reviews";
import EverythingEvent from "./EverythingEvent";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto text-center mt-20 md:mt-[144px]">
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
        <EverythingEvent />
      </div>
    </section>
  );
};

export default Reviews;
