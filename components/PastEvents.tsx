import Image from "next/image";
import gallery1 from "../public/princify-9.png";
import gallery2 from "../public/princify-10.png";
import gallery3 from "../public/princify-5.png";
import gallery4 from "../public/princify-4.png";
import gallery5 from "../public/princify-2.png";
import gallery6 from "../public/princify-7.png";

const PastEvents = () => {
  return (
    <div className=" px-5 sm:px-10 container  xl:max-w-7xl mx-auto mt-20 md:mt-[144px] ">
      <h6 className="leading-[24px] text-[16px] font-medium text-[#6E796F] mb-[16px]">
        PAST EVENTS
      </h6>
      <h3 className="leading-[50px] font-extrabold text-[43px] mb-10 md:mb-20 text-[#222823] md:leading-[88px] md:text-[81px] ">
        Explore moments <br />
        we helped make
      </h3>
      <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
        <div className="flex-1 h-[250px] md:h-96 lg:h-[708px]">
          <Image
            src={gallery1}
            alt="gallery"
            className=" object-cover w-full h-full rounded-lg object-top"
          />
        </div>
        <div className="flex-[1.41] h-full space-y-3">
          <div className=" relative">
            <Image
              src={gallery2}
              alt="gallery"
              className=" object-cover w-full h-[250px] md:h-[186px] lg:h-[348px] rounded-lg object-top "
            />
            <div className="flex flex-col justify-end p-10 absolute inset-0 hover:bg-primary hover:opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white">
              <p>Frame 12360</p>
              <p className=" text-[54px] leading-[64px] mb-2 font-extrabold ">
                Christianna &<br />
                Palmer Wedding
              </p>
              <p className=" text-5xl">&rarr;</p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-3">
            <Image
              src={gallery3}
              alt="gallery"
              className=" object-cover w-full h-[250px] md:h-[186px] lg:h-[348px] rounded-lg object-center"
            />
            <Image
              src={gallery4}
              alt="gallery"
              className=" object-cover w-full h-[250px] md:h-[186px] lg:h-[348px] rounded-lg object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="flex-[1.41]">
          <Image
            src={gallery5}
            alt="gallery"
            className=" object-cover w-full h-[250px] md:h-[186px] lg:h-[348px] rounded-lg object-center"
          />
        </div>
        <div className="flex-[1]">
          <Image
            src={gallery6}
            alt="gallery"
            className=" object-cover w-full h-[250px] md:h-[186px] lg:h-[348px] rounded-lg object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
