import Image from "next/image";
import { EverythingEvent, Footer, Gallery, Navbar } from "../components";
import heroImage from "../public/princify-8.png";

const gallery = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <div className="relative text-white">
        <div className=" -z-10">
          <Image
            className=" -z-10 w-full brightness-50 object-cover min-h-[60vh]"
            src={heroImage}
            alt={"hero image"}
            priority
            quality={30}
          />
        </div>
        <div className=" absolute inset-0 w-full h-full grid place-items-center">
          <p className="  font-extrabold text-7xl leading-[100px] md:text-[140px] md:leading-[150px] lg:text-[182.25px] lg:leading-[184px] text-center">
            Explore the
            <br />
            moments
          </p>
        </div>
        <div className=" absolute top-0 left-0 right-0 w-full ">
          <Navbar text="gallery" />
        </div>

        {/* <div className=" w-full h-full bg-yellow-50"></div> */}
      </div>
      <Gallery />
      <div className=" xl:max-w-7xl container mx-auto mt-20 px-5 sm:px-10 ">
        <EverythingEvent />
      </div>
      <Footer />
    </div>
  );
};

export default gallery;
