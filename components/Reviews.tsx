import Image from "next/image";
import React, { use, useState } from "react";
import bridePicture from "../public/princify-1.png";
import { reviews } from "../data/reviews";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="container mx-auto text-center p-5">
      <h6 className=" text-sm font-medium text-[#6E796F]">REVIEWS</h6>
      <h3 className=" leading-[44px] font-extrabold text-4xl mb-10 text-[#222823]">
        Our clients make <br />
        moments matter
      </h3>
      <div>
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`${
              index === i ? "block" : "hidden"
            } w-full sm:w-2/3 mx-auto space-y-3 max-w-[400px] min-h-[250px] sm:h-[200px]`}
          >
            <p className=" text-[#535353] text-base font-normal">
              {review.content}
            </p>
            <p className=" font-bold mt-2">{review.name}</p>
            <p>{review.title}</p>
          </div>
        ))}
      </div>
      <div className="z-30 flex justify-center space-x-3 mt-5 ">
        {reviews.map((review, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i
                ? "bg-[#DF4D31] border border-[#DF4D31]"
                : "border border-gray-600"
            }`}
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
        ))}
      </div>
      <div className=" relative">
        <Image
          src={bridePicture}
          alt="bride picture"
          className=" object-cover w-full h-[200px] lg:h-[500px] mt-10 object-center rounded"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full flex items-center">
          <div className="flex text-white text-left p-5 md:p10 items-center gap-5 md:gap-10">
            <h3 className="  font-extrabold text-2xl md:text-7xl">
              Everything <br />
              event for you
            </h3>
            <button className=" h-10 w-10 md:h-20 md:w-20 border-[5px] grid place-items-center text-[#DF4D31] text-3xl md:text-7xl border-[#DF4D31] rounded-full">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
