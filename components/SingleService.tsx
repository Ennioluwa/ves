import React, { useEffect, useState } from "react";
import { events } from "../data/events";
interface Event {
  title: string;
  content: string;
  icon: string;
  index: number;
  active: number;
  setActive: any;
}
const SingleService = ({
  title,
  content,
  icon,
  index,
  setActive,
  active,
}: Event) => {
  return (
    <div className="flex items-start gap-12 mb-5 ">
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="flex flex-col gap-5 grow">
        <h4
          className=" cursor-pointer text-4xl leading-10 font-semibold text-white"
          onClick={() => {
            setActive(index);
          }}
        >
          {title}
        </h4>
        {active === index && (
          <p className=" text-base text-[#A7AEA8] ">{content}</p>
        )}
        <hr className=" w-full text-[#535353]" />
      </div>
    </div>
  );
};

export default SingleService;
