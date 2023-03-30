import Link from "next/link";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
interface Props {
  text?: string;
}
const Navbar = ({ text }: Props) => {
  const [open, setOpen] = useState(false);
  const [formActive, setFormActive] = useState(false);
  return (
    <>
      {open && (
        <div
          className=" fixed w-screen h-screen"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <nav className="  p-5 sm:p-10 relative">
        <div
          className={`relative container mx-auto xl:max-w-7xl flex gap-3 justify-between items-center z-10 ${
            text ? "text-black" : "text-white"
          } ${(text === "gallery" || text === "services") && "text-white"}`}
        >
          <h1 className=" text-3xl h-16 w-32 lg:h-[56px] lg:w-[250px] grid place-items-center bg-gray-300 rounded-lg ">
            <Link href="/">Logo</Link>
          </h1>
          <ul className=" ml-auto md:flex gap-5 lg:gap-10 xl:gap-[32px] items-center hidden xl:text-[16px] leading-[24px]">
            <li
              className={`${text === "services" && "text-primary"} nav-links`}
            >
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
            <button
              onClick={() => setFormActive(true)}
              className="xl:ml-[16px] ml-3 xl:px-[63.5px] p-5 lg:px-10  py-[16px] bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] font-bold text-white "
            >
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
          {/* {open && ( */}
          <div
            className={` ${
              open ? "block h-screen " : " h-0 delay-500 -translate-y-20 "
            } fixed inset-0 overflow-hidden w-full bg-gray-400 p-5 sm:p-10 text-white md:hidden z-50 transition-[height,transform] duration-500 `}
          >
            <div className="flex justify-between">
              <h1 className=" text-3xl h-16 w-32 lg:h-[56px] lg:w-[250px] grid place-items-center bg-gray-300 rounded-lg ">
                <Link href="/">Logo</Link>
              </h1>
              <button
                onClick={() => setOpen(false)}
                className="block md:hidden"
              >
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
            </div>
            <ul
              className={`${
                open
                  ? "h-auto  bottom-[50%] translate-y-[50%] w-full delay-300"
                  : "h-0 -z-[300] -bottom-[200px]"
              } fixed  inset-x-0 rounded-lg flex flex-col justify-center items-center gap-5 transition-[bottom,transform] duration-700 "`}
            >
              <li
                className={`${text === "services" && "text-primary"} nav-links`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`${text === "gallery" && "text-primary"} nav-links`}
              >
                <Link href="/gallery">Gallery</Link>
              </li>
              <li
                className={`${text === "company" && "text-primary"} nav-links`}
              >
                <Link href="/company">Company</Link>
              </li>
              <li
                className={`${text === "contact" && "text-primary"} nav-links`}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
              <button
                onClick={() => {
                  setOpen(false);
                  setFormActive(true);
                }}
                className=" px-3 py-2 bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] font-bold "
              >
                Get Started
              </button>
            </ul>
          </div>
        </div>
        {formActive && (
          <div className=" overflow-hidden">
            <div
              onClick={() => setFormActive(false)}
              className=" fixed inset-0 bg-black z-50 bg-opacity-70 w-screen h-screen overflow-hidden cursor-pointer"
            ></div>
            <div className=" fixed top-[5%] md:w-[662px] left-[5%] right-[5%] bottom-[5%] mx-auto overflow-auto h-auto max-h-[804px] z-[60] p-5 bg-white rounded-lg ">
              <ContactForm />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
