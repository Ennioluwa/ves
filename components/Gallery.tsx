import gallery1 from "../public/gallery/img17.png";
import gallery2 from "../public/gallery/img13.png";
import gallery3 from "../public/gallery/img16.png";
import gallery4 from "../public/gallery/img15.png";
import gallery5 from "../public/gallery/img14.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Gallery = () => {
  const [show, setShow] = useState(0);
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto mt-20 md:mt-[100px] ">
        <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
          <div className="relative flex-1 h-[350px] md:h-[452px] lg:grow lg:h-[708px]">
            <Image
              quality={30}
              src={gallery2}
              alt="gallery"
              // style={{ objectPosition: "center 20%" }}
              className=" object-cover w-full h-[350px]  md:h-full rounded-lg object-center-top md:object-center-left"
            />
            <div
              onMouseEnter={() => setShow(1)}
              onMouseLeave={() => setShow(0)}
              className="flex flex-col justify-center items-center absolute p-5 inset-0 hover:bg-primary hover:bg-opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white"
            >
              {show === 1 && (
                <div className=" flex flex-col gap-2 items-center">
                  <p className=" text-4xl md:text-2xl lg:text-4xl lg:mb-2 font-extrabold tracking-tight">
                    Christianna &<br />
                    Palmer Wedding
                  </p>
                  <Link href="/gallery/christianna-and-palmer">
                    <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                      &rarr;
                    </p>
                  </Link>
                </div>
              )}
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
              <div
                onMouseEnter={() => setShow(2)}
                onMouseLeave={() => setShow(0)}
                className="flex flex-col justify-center items-center absolute p-5 inset-0 hover:bg-primary hover:bg-opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white"
              >
                {show === 2 && (
                  <div className=" flex flex-col gap-2 items-center">
                    <p className=" text-4xl md:text-2xl lg:text-4xl lg:mb-2 font-extrabold tracking-tight">
                      Christianna &<br />
                      Palmer Wedding
                    </p>
                    <Link href="/gallery/christianna-and-palmer">
                      <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                        &rarr;
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className=" flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] relative">
                <Image
                  quality={30}
                  src={gallery3}
                  alt="gallery"
                  className=" object-cover rounded-lg h-full"
                />
                <div
                  onMouseEnter={() => setShow(3)}
                  onMouseLeave={() => setShow(0)}
                  className="flex flex-col justify-center items-center absolute p-5 inset-0 hover:bg-primary hover:bg-opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white"
                >
                  {show === 3 && (
                    <div className=" flex flex-col gap-2 items-center">
                      <p className=" text-4xl md:text-2xl lg:text-4xl lg:mb-2 font-extrabold tracking-tight">
                        Christianna &<br />
                        Palmer Wedding
                      </p>
                      <Link href="/gallery/christianna-and-palmer">
                        <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                          &rarr;
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] relative">
                <Image
                  quality={30}
                  src={gallery4}
                  alt="gallery"
                  className=" object-cover  rounded-lg object-center-top h-full"
                />
                <div
                  onMouseEnter={() => setShow(4)}
                  onMouseLeave={() => setShow(0)}
                  className="flex flex-col justify-center items-center absolute p-5 inset-0 hover:bg-primary hover:bg-opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white"
                >
                  {show === 4 && (
                    <div className=" flex flex-col gap-2 items-center">
                      <p className=" text-4xl md:text-2xl lg:text-4xl lg:mb-2 font-extrabold tracking-tight">
                        Christianna &<br />
                        Palmer Wedding
                      </p>
                      <Link href="/gallery/christianna-and-palmer">
                        <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                          &rarr;
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="flex-1 relative">
            <Image
              quality={30}
              src={gallery5}
              alt="gallery"
              className=" object-cover w-full h-[350px] md:h-[220px] lg:h-[348px] rounded-lg object-center"
            />
            <div
              onMouseEnter={() => setShow(5)}
              onMouseLeave={() => setShow(0)}
              className="flex flex-col justify-center items-center absolute p-5 inset-0 hover:bg-primary hover:bg-opacity-[0.88] z-20 rounded-lg text-transparent hover:text-white"
            >
              {show === 5 && (
                <div className=" flex flex-col gap-2 items-center">
                  <p className=" text-4xl md:text-2xl lg:text-4xl lg:mb-2 font-extrabold tracking-tight">
                    Christianna &<br />
                    Palmer Wedding
                  </p>
                  <Link href="/gallery/christianna-and-palmer">
                    <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                      &rarr;
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
