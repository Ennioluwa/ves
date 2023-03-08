import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import heroImage from "../public/princify-8.png";

const Hero = () => {
  return (
    <div className="relative text-white">
      <div className=" -z-10">
        <Image
          className=" -z-10 w-full brightness-50 object-cover min-h-[60vh] md:min-h-screen max-h-[100vh]"
          src={heroImage}
          alt={"hero image"}
          priority
          quality={30}
        />
      </div>
      <div className=" absolute inset-0 w-full h-full grid place-items-center">
        <p className="  font-extrabold text-7xl leading-[100px] md:text-[140px] md:leading-[150px] lg:text-[182.25px] lg:leading-[184px] text-center">
          One-stop
          <br /> event shop
        </p>
      </div>
      <div className=" absolute top-0 left-0 right-0 w-full ">
        <Navbar />
      </div>

      {/* <div className=" w-full h-full bg-yellow-50"></div> */}
    </div>
  );
};

export default Hero;
