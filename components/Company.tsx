import Image from "next/image";
import Link from "next/link";
import React from "react";
import { posts } from "../data/posts";
import EverythingEvent from "./EverythingEvent";

const Company = () => {
  return (
    <div className=" xl:max-w-7xl container mx-auto px-5 sm:px-10 mt-20 md:mt-[100px]">
      <div className=" flex flex-col items-center mx-auto text-center mb-12 space-y-6 md:space-y-12 max-w-[858px]">
        <p className="title mx-auto">{posts[0].name}</p>
        <Link href={`company/${posts[0].slug}`}>
          <h3 className="header">{posts[0].title}</h3>
        </Link>
        <p className=" flex items-center justify-center gap-3 text">
          <span>{posts[0].date}</span>
          <span className=" h-2 w-2 rounded-full bg-black"></span>
          <span>{posts[0].time} Mins Read</span>
        </p>
      </div>
      <div className="relative h-[250px] sm:h-[400px] w-full  mb-[104px]">
        <Link href={`company/${posts[0].slug}`}>
          <Image
            quality={30}
            placeholder="blur"
            blurDataURL="/rarr.png"
            src={posts[0].image}
            alt={posts[0].title}
            fill
            className="hover:scale-105 duration-700 object-cover rounded-lg  "
          />
        </Link>
      </div>

      <div className=" flex flex-col gap-20 sm:gap-[104px] max-w-[1020px] mx-auto">
        {posts.map((post, i) => {
          if (
            post.slug === "10-unique-venue-ideas-for-your-next-corporate-event"
          )
            return;
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <div className="relative sm:flex-1 w-full h-[250px] md:h-[320px] order-2 sm:order-1">
                <Link href={`/company/${post.slug}`}>
                  <Image
                    quality={30}
                    placeholder="blur"
                    blurDataURL="/rarr.png"
                    src={post.image}
                    alt={post.name}
                    fill
                    className=" object-cover rounded-lg hover:scale-105 duration-700"
                  />
                </Link>
              </div>
              <div className="flex-1 flex sm:text-left flex-col gap-4 order-1 sm:order-2 ">
                <p className="title">{post.name}</p>
                <Link href={`/company/${post.slug}`}>
                  <h3 className="header-small line-clamp-3">{post.title}</h3>
                </Link>
                <p className=" flex items-center  gap-3">
                  <span>{post.date}</span>
                  <span className=" h-2 w-2 rounded-full bg-black"></span>
                  <span>{post.time} Mins Read</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <EverythingEvent />
    </div>
  );
};

export default Company;
