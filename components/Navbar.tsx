import Link from "next/link";
import React, { useState } from "react";
interface Props {
  text?: string;
}
const Navbar = ({ text }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative mx-auto xl:max-w-7xl p-5 md:p-10 xl:p-[48px] flex gap-3 justify-between items-center z-10 ${
        text ? "text-black" : "text-white"
      }`}
    >
      <h1 className=" text-3xl h-16 w-32 lg:h-[56px] lg:w-[250px] grid place-items-center bg-gray-300 rounded-lg ">
        <Link href="/">Logo</Link>
      </h1>
      <ul className=" ml-auto md:flex gap-5 lg:gap-10 xl:gap-[32px] items-center hidden xl:text-[16px] leading-[24px]">
        <li className={`${text === "services" && "text-primary"} nav-links`}>
          <Link href="/services">Services</Link>
        </li>
        <li className={`${text === "gallery" && "text-primary"} nav-links`}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={`${text === "company" && "text-primary"} nav-links`}>
          <Link href="/company">Company</Link>
        </li>
        <li className={`${text === "contact" && "text-primary"} nav-links`}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <button className="xl:ml-[16px] ml-3 xl:px-[63.5px] p-5 lg:px-10  py-[16px] bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] font-bold text-white ">
          Get Started
        </button>
      </ul>
      {open ? (
        <button onClick={() => setOpen(false)} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button onClick={() => setOpen(true)} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      {open && (
        <ul className=" absolute inset-x-0  top-20 mt-5 ml-5 mr-5 sm:ml-auto rounded-lg p-5 flex flex-col justify-center items-center gap-5 sm:w-[300px] text-white bg-gray-400 md:hidden z-50 ">
          <li className={`${text === "services" && "text-primary"} nav-links`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`${text === "gallery" && "text-primary"} nav-links`}>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className={`${text === "company" && "text-primary"} nav-links`}>
            <Link href="/company">Company</Link>
          </li>
          <li className={`${text === "contact" && "text-primary"} nav-links`}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <button className=" px-3 py-2 bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] font-bold ">
            Get Started
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
