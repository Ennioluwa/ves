import Image from "next/image";
import React from "react";
import quoteImage from "../public/princify-7.png";

const Quote = () => {
  return (
    <div className="container mx-auto p-5 sm:p-10 mt-10">
      <h3 className=" font-bold text-xl text-center mb-10">
        We commit to making every moment unforgettable - <br /> capturing
        memories and turning them into stories
      </h3>
      <div className="flex gap-10 flex-col md:flex-row justify-between items-center">
        <div className=" flex flex-col gap-5 flex-1 order-2 md:order-1">
          <p className=" font-bold">
            We specialize in creating unforgettable experiences for any
            occasion. Whether you're planning a corporate event, wedding,
            conference, or birthday party, we're here to help you bring your
            vision to life.
          </p>
          <p>
            Our team of experienced event planners, designers, and coordinators
            are dedicated to making your event a success. We offer a wide range
            of services, including venue selection, decor, catering,
            entertainment, and more. From concept to execution, we make your
            vision a reality
          </p>
          <button className=" text-white px-5 py-2 rounded bg-[#DF4D31] self-start">
            Get a Quote &rarr;
          </button>
        </div>
        <div className=" flex-1 order-1 md:order-2">
          <Image
            src={quoteImage}
            alt="quote image"
            className=" w-full object-cover rounded max-h-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
