import gallery1 from "../public/princify-9.png";
import gallery2 from "../public/princify-10.png";
import gallery3 from "../public/princify-5.png";
import gallery4 from "../public/princify-4.png";
import gallery5 from "../public/princify-2.png";
import gallery6 from "../public/princify-7.png";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto mt-20 md:mt-[100px] ">
        <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
          <div className="relative flex-1 h-[350px] md:h-[452px] lg:grow lg:h-[708px]">
            <Image
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
                src={gallery1}
                alt="gallery"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center-top "
              />
            </div>
            <div className=" flex flex-col md:flex-row gap-3">
              <Image
                src={gallery3}
                alt="gallery"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg"
              />
              <Image
                src={gallery4}
                alt="gallery"
                className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="flex-1">
            <Image
              src={gallery5}
              alt="gallery"
              className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
