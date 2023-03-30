import Image from "next/image";
import React, { useState } from "react";
import { events } from "../data/events";
import SingleService from "./SingleService";
import gallery1 from "../public/gallery/img-26.png";
import gallery2 from "../public/gallery/img-25.png";
import gallery3 from "../public/gallery/img-24.png";
import gallery4 from "../public/gallery/img-23.png";

const EventServices = () => {
  const [active, setActive] = useState(2);
  const number = () => {
    let img = gallery3;
    if (active === 0) {
      img = gallery1;
    } else if (active === 1) {
      img = gallery2;
    } else if (active === 2) {
      img = gallery3;
    } else if (active === 3) {
      img = gallery4;
    } else {
      img = gallery3;
    }
    return img;
  };
  return (
    <>
      <div className="md:flex-1 bg-white h-[400px] relative rounded-lg overflow-clip">
        <Image src={number()} alt="services" fill className=" object-cover" />
      </div>
      <div className="md:flex-1">
        <div>
          {events.map((event, index) => {
            return (
              <SingleService
                key={index}
                {...event}
                index={index}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventServices;
