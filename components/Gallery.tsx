import gallery1 from "../public/gallery/img17.png";
import gallery2 from "../public/gallery/img13.png";
import gallery3 from "../public/gallery/img16.png";
import gallery4 from "../public/gallery/img15.png";
import gallery5 from "../public/gallery/img14.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  full: "true" | "false";
}

const Gallery = ({ full }: Props) => {
  const [show, setShow] = useState(0);
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto mt-20 md:mt-[100px] ">
        <div className=" flex flex-col md:flex-row justify-between gap-3 mb-3">
          <div className="relative flex-1 h-[350px] md:h-[452px] lg:grow lg:h-[708px] hover:scale-[1.02] duration-500">
            <Link href="/gallery/christianna-and-valmy">
              <Image
                quality={30}
                placeholder="blur"
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
                      Valmy's Wedding
                    </p>

                    <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                      &rarr;
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="flex-[1.41] h-full space-y-3">
            <div className=" relative hover:scale-[1.02] duration-500">
              <Link href="/gallery/40th-birthday">
                <Image
                  quality={30}
                  placeholder="blur"
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
                        40th Birthday
                        <br />
                        Party
                      </p>
                      <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                        &rarr;
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <div className=" flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] relative hover:scale-[1.02] duration-500">
                <Link href="/gallery/segun-at-40">
                  <Image
                    quality={30}
                    placeholder="blur"
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
                          Segun at 40
                          <br />
                          Birthday Party
                        </p>
                        <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                          &rarr;
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-[350px] md:h-[220px] lg:h-[348px] relative hover:scale-[1.02] duration-500">
                <Link href="/gallery/phoebe-and-frank-wedding">
                  <Image
                    quality={30}
                    placeholder="blur"
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
                          Phoebe and Frank's Wedding
                        </p>
                        <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                          &rarr;
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="md:flex-[1.5] relative hover:scale-[1.02] duration-500">
            <Link href="/gallery/val-day">
              <Image
                quality={30}
                placeholder="blur"
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
                      Val's Day
                    </p>
                    <p className="  text-5xl h-[50px] w-[50px] rounded-full grid place-items-center text-[#611A0C] border-4 border-[#611A0C] ">
                      &rarr;
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div
            className={`${
              full === "true" ? "hidden" : "flex"
            } md:flex-[1] h-[250px] md:h-[220px] lg:h-[348px] bg-primary flex-col justify-end px-5 pb-5 lg:px-10 lg:pb-10 rounded-lg text-white`}
          >
            <p className=" text-5xl md:text-2xl lg:text-[54px] lg:leading-[64px] mb-2 font-extrabold ">
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

export default Gallery;
