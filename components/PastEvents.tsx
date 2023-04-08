import Image from "next/image";
import gallery1 from "../public/gallery/img17.png";
import gallery2 from "../public/gallery/img13.png";
import gallery3 from "../public/gallery/img16.png";
import gallery4 from "../public/gallery/img15.png";
import gallery5 from "../public/gallery/img14.png";
import Link from "next/link";
import { useState } from "react";
import Gallery from "./Gallery";

const PastEvents = () => {
  const [show, setShow] = useState(0);
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
        <Gallery full="false" />
      </div>
    </section>
  );
};

export default PastEvents;
