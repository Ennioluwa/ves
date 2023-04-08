import instagram from "../public/instagram.png";
import twitter from "../public/twitter.png";
import youtube from "../public/youtube.png";
import behance from "../public/behance.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-20 md:pt-[144px] pb-[80px] px-5 sm:px-10 mt-20 md:mt-[144px]">
      <div className=" xl:max-w-7xl container mx-auto flex flex-col gap-[48px]">
        <div className=" flex justify-between md:justify-start gap-5 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-[144px] flex-wrap lg:flex-nowrap">
          <div className="flex-1 space-y-4 min-w-[300px]">
            <p className=" h-[96px] w-[96px] bg-gray-300 rounded-lg"></p>
            <p>One stop shop for everything events</p>
          </div>
          <ul className="flex-1  space-y-2 text-[16px] leading-[24px]">
            <li className=" mb-2 text-[24px] leading-[32px]">Products</li>
            <li>Event Planning</li>
            <li>Event Design</li>
            <li>Event Location</li>
          </ul>
          <ul className="flex-1 space-y-2 text-[16px] leading-[24px]">
            <li className=" mb-2 text-[24px] leading-[32px]">Company</li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/company"}>Blog</Link>
            </li>
          </ul>
          <ul className="flex-1 space-y-2 text-[16px] leading-[24px] ">
            <li className=" mb-2 text-[24px] leading-[32px]">Need Help?</li>
            <li>info@veee-events.com</li>
            <li>+1 (214) 755-3638</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            href={"https://facebook.com"}
            className=" h-[32px] w-[32px] rounded-full bg-white grid place-items-center text-[#222823] "
          >
            <FaFacebookF className="relative top-1 h-5 w-5" />
          </Link>
          <Link
            href={"https://instagram.com"}
            className=" h-[32px] w-[32px] rounded-full bg-white grid place-items-center text-[#222823] "
          >
            <FaInstagram className="relative h-5 w-5" />
          </Link>
          <Link
            href={"https://twitter.com"}
            className=" h-[32px] w-[32px] rounded-full bg-white grid place-items-center text-[#222823] "
          >
            <FaTwitter className="relative h-5 w-5" />
          </Link>
          <Link
            href={"https://youtube.com"}
            className=" h-[32px] w-[32px] rounded-full bg-white grid place-items-center text-[#222823] "
          >
            <FaYoutube className="relative h-5 w-5" />
          </Link>
        </div>

        <div className=" border-b border-white"></div>

        <div className="flex justify-center items-center gap-5 text-[12px] leading-[16px] ">
          <p className=" text-[#6E796F]">
            VEEE Copyright ©2023. All Rights Reserved
          </p>
          <p className=" text-primary">Privacy Policy</p>
          <p className=" text-primary">Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
