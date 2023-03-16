import Image from "next/image";
import gallery1 from "../public/gallery/img17.png";
import gallery2 from "../public/gallery/img13.png";
import gallery3 from "../public/gallery/img16.png";
import gallery4 from "../public/gallery/img15.png";
import gallery5 from "../public/gallery/img14.png";
import Link from "next/link";

const PastEvents = () => {
  return (
    <section className="px-5 sm:px-10">
      <div className="container  xl:max-w-7xl mx-auto mt-20 md:mt-[144px] ">
        <h6 className="leading-[24px] text-[16px] font-medium text-[#6E796F] mb-[16px]">
          PAST EVENTS
        </h6>
        <h3 className="leading-[50px] font-extrabold text-[43px] mb-10 md:mb-20 text-[#222823] md:leading-[88px] md:text-[81px] ">
          Explore moments <br />
          we helped make
        </h3>
        <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
          <div className="relative flex-1 h-[350px] md:h-[452px] lg:grow lg:h-[708px]">
            <Image
              quality={30}
              src={gallery2}
              alt="gallery"
              // style={{ objectPosition: "center 20%" }}
              className=" object-cover w-full h-[350px]  md:h-full rounded-lg object-center-top md:object-center-left"
            />
            <div className="flex flex-col justify-end  pl-5 xl:pl-10 pb-10 md:pb-20 lg:pb-[104px] absolute inset-0 hover:bg-primary hover:opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white">
              {/* <p>Frame 12360</p> */}
              <p className=" text-6xl md:text-4xl lg:text-5xl lg:mb-2 font-extrabold tracking-tight">
                Christianna &<br />
                Palmer Wedding
              </p>
              <Link href="/gallery/christianna-and-palmer">
                <p className=" text-5xl">&rarr;</p>
              </Link>
            </div>
          </div>
          <div className="flex-[1.41] h-full space-y-3">
            <div className=" relative">
              <Image
                quality={30}
                src={gallery1}
                alt="gallery"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center-top "
              />
            </div>
            <div className=" flex flex-col md:flex-row gap-3">
              <Image
                quality={30}
                src={gallery3}
                alt="gallery"
                className=" object-cover w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] rounded-lg"
              />
              <Image
                quality={30}
                src={gallery4}
                alt="gallery"
                className=" object-cover w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center-top"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="flex-[1.5]">
            <Image
              quality={30}
              src={gallery5}
              alt="gallery"
              className=" object-cover w-full h-[250px] md:h-[220px] lg:h-[348px] rounded-lg object-center"
            />
          </div>
          <div className="md:flex-[1] h-[250px] md:h-[220px] lg:h-[348px] bg-primary flex flex-col justify-end px-5 pb-5 lg:px-10 lg:pb-10 rounded-lg text-white">
            <p className=" text-5xl md:text-4xl lg:text-[54px] lg:leading-[64px] mb-2 font-extrabold ">
              Explore more
              <br />
              moments
            </p>
            <Link href="/gallery">
              <p className=" text-5xl">&rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
