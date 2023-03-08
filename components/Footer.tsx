import instagram from "../public/instagram.png";
import twitter from "../public/twitter.png";
import youtube from "../public/youtube.png";
import behance from "../public/behance.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white xl:max-w-7xl mx-auto flex flex-col gap-[48px] pt-20 md:pt-[144px] pb-[80px] px-5 sm:px-10 mt-20 md:mt-[144px]">
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
          <li>About Us</li>
          <li>Blog</li>
        </ul>
        <ul className="flex-1 space-y-2 text-[16px] leading-[24px] ">
          <li className=" mb-2 text-[24px] leading-[32px]">Need Help?</li>
          <li>veee.events21@gmail.com</li>
          <li>+1 (214) 755-3638</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <i className=" h-[32px] w-[32px] rounded-full bg-white ">
          <Image src={instagram} alt="instagram" />
        </i>
        <i className=" h-[32px] w-[32px] rounded-full bg-white ">
          <Image src={twitter} alt="twitter" />
        </i>
        <i className=" h-[32px] w-[32px] rounded-full bg-white ">
          <Image src={behance} alt="behance" />
        </i>
        <i className=" h-[32px] w-[32px] rounded-full bg-white ">
          <Image src={youtube} alt="instagram" />
        </i>
      </div>

      <div className=" border-b border-white"></div>

      <div className="flex justify-center items-center gap-5 text-[12px] leading-[16px] ">
        <p className=" text-[#6E796F]">
          VES Copyright ©2023. All Rights Reserved
        </p>
        <p className=" text-primary">Privacy Policy</p>
        <p className=" text-primary">Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
