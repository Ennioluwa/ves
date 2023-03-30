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
            placeholder="blur"
            className=" -z-10 w-full brightness-50 object-cover h-[60vh]"
            src={heroImage}
            alt={"hero image"}
            priority
          />
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
