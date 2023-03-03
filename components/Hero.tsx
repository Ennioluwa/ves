import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import heroImage from "../public/princify-8.png";

const Hero = () => {
  return (
    <div className="relative text-white">
      <div className=" -z-10">
        <Image
          className=" -z-10 h-full w-full  min-h-[70vh] filter: brightness-50 object-cover max-h-[100vh]"
          src={heroImage}
          alt={"hero image"}
        />
      </div>
      <div className=" absolute inset-0 w-full h-full grid place-items-center">
        <p className="  font-extrabold text-7xl text-center">
          One-stop
          <br /> event shop
        </p>
      </div>

      <Navbar />
      {/* <div className=" w-full h-full bg-yellow-50"></div> */}
    </div>
  );
};

export default Hero;
