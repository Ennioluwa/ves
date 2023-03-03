import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" container mx-auto absolute top-0 left-0 right-0 w-full p-10 xl:p-[48px] flex justify-between items-center z-10 text-white">
      {/* <button className="block md:hidden"></button> */}
      <h1 className=" text-3xl h-16 w-32 lg:h-[96px] lg:w-[250px] grid place-items-center bg-gray-300 rounded-lg ">
        Logo
      </h1>
      <ul className=" md:flex gap-5 lg:gap-10 xl:gap-[32px] items-center hidden xl:text-[24px] leading-[32px]">
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/company">Company</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <button className="xl:ml-[16px] ml-3 xl:px-[63.5px] p-5 lg:px-10  py-[16px] bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] font-bold ">
          Get Started
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
