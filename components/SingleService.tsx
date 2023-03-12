import React, { useEffect, useState } from "react";
interface Event {
  title: string;
  content: string;
  icon: string;
  index: number;
}
const SingleService = ({ title, content, icon, index }: Event) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (index === 2) {
      setOpen(true);
    }
  }, []);
  return (
    <div className="flex items-start gap-12 mb-5 ">
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="flex flex-col gap-5 grow">
        <h4
          className=" text-4xl leading-10 font-semibold text-white"
          onClick={() => setOpen(!open)}
        >
          {title}
        </h4>
        {open && <p className=" text-base text-[#A7AEA8] ">{content}</p>}
        <hr className=" w-full text-[#535353]" />
      </div>
    </div>
  );
};

export default SingleService;
