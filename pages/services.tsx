import Image from "next/image";
import {
  EverythingEvent,
  Footer,
  Gallery,
  Navbar,
  ServicePage,
} from "../components";
// todo
import heroImage from "../public/gallery/img14.png";

const services = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <div className="relative text-white">
        <div className=" -z-10">
          <Image
            quality={30}
            className=" -z-10 w-full brightness-50 object-cover min-h-[60vh] md:min-h-screen max-h-[100vh]"
            src={heroImage}
            alt={"hero image"}
            priority
          />
        </div>
        <div className=" absolute inset-0 w-full h-full grid place-items-center">
          {/* <p className="  font-extrabold text-7xl leading-[100px] md:text-[140px] md:leading-[150px] lg:text-[182.25px] lg:leading-[184px] text-center">
              Explore the
              <br />
              moments
            </p> */}
        </div>
        <div className=" absolute top-0 left-0 right-0 w-full ">
          <Navbar text="services" />
        </div>
      </div>
      <ServicePage />
      <div className=" px-5 sm:px-10">
        <div className=" xl:max-w-7xl mx-auto container mt-20">
          <EverythingEvent />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default services;
