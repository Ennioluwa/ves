import Image from "next/image";
import gallery1 from "../public/princify-6.png";
import gallery2 from "../public/princify-3.png";
import gallery3 from "../public/princify-5.png";
import gallery4 from "../public/princify-4.png";
import gallery5 from "../public/princify-2.png";
import gallery6 from "../public/princify-7.png";

const PastEvents = () => {
  return (
    <div className=" p-5 container mx-auto">
      <h6 className=" text-sm font-medium text-[#6E796F] mb-2">PAST EVENTS</h6>
      <h3 className=" sm:leading-[44px] font-extrabold text-2xl sm:text-4xl mb-10 text-[#222823]">
        Explore moments <br />
        we helped make
      </h3>
      <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
        <div className="flex-1 h-[612px]">
          <Image
            src={gallery1}
            alt="gallery"
            className=" object-cover w-full h-full rounded object-top"
          />
        </div>
        <div className="flex-[1.6] h-full space-y-3">
          <Image
            src={gallery2}
            alt="gallery"
            className=" object-cover w-full h-[300px] rounded object-top "
          />
          <div className=" flex flex-col md:flex-row gap-3">
            <Image
              src={gallery3}
              alt="gallery"
              className=" object-cover w-full h-[300px] rounded object-center"
            />
            <Image
              src={gallery4}
              alt="gallery"
              className=" object-cover w-full h-[300px] rounded object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 px-5">
        <div className="flex-[1.6]">
          <Image
            src={gallery5}
            alt="gallery"
            className=" object-cover w-full h-[300px] rounded object-center"
          />
        </div>
        <div className="flex-[1]">
          <Image
            src={gallery6}
            alt="gallery"
            className=" object-cover w-full h-[300px] rounded object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
