import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import heroImage from "../public/gallery/img14.png";
// import heroVideo from "../public/hero-video.";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (event: any) => {
    const time = event.target.currentTime;
    setCurrentTime(time);
    if (time >= 180) {
      event.target.pause();
      if (videoRef?.current) {
        videoRef.current.currentTime = 0;
        // videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative text-white">
      <div className=" -z-10 w-full brightness-50 object-cover min-h-[60vh] md:min-h-screen max-h-[100vh] hero-section">
        {/* <Image
          quality={30}
          className=" -z-10 w-full brightness-50 object-cover min-h-[60vh] md:min-h-screen max-h-[100vh]"
          src={heroImage}
          alt={"hero image"}
          priority
        /> */}
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          autoPlay
          loop
          muted
          className=" -z-10 w-full brightness-50 object-cover min-h-[60vh] md:min-h-screen max-h-[100vh]"
        >
          <source src="/vee-1min.mp4" type="video/mp4" />
        </video>
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
