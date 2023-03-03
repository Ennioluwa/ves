import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" container mx-auto absolute top-0 left-0 right-0 w-full p-5 md:p-10 flex justify-between items-center z-10 text-white">
      {/* <button className="block md:hidden"></button> */}
      <h1 className=" text-3xl">Logo</h1>
      <ul className=" md:flex gap-3 items-center hidden">
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
      </ul>
      <button className=" px-5 py-2 bg-[#DF4D31] rounded">Get Started</button>
    </div>
  );
};

export default Navbar;
