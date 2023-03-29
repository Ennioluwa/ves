import Image from "next/image";
import { About, EverythingEvent, Footer, Navbar } from "../components";
import heroImage from "../public/gallery/img10.png";

const about = () => {
  return (
    <div className=" flex flex-col">
      <div className="relative text-white">
        <div className="relative -z-10 h-[60vh] w-full">
          <Image
            quality={30}
            placeholder="blur"
            className=" -z-10 w-full brightness-50 object-cover"
            src={heroImage}
            alt={"hero image"}
            fill
            priority
          />
        </div>
        <div className=" absolute top-0 left-0 right-0 w-full ">
          <Navbar text="gallery" />
        </div>
      </div>
      <About />
      <div className=" px-5 sm:px-10">
        <div className=" xl:max-w-7xl mx-auto container mt-20">
          <EverythingEvent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
