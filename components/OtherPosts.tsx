import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  otherPosts: Post[];
}

const OtherPosts = ({ otherPosts }: Props) => {
  return (
    <div className="mt-[144px] -mb-20 md:-mb-[144px] py-20 bg-[#F0F0F0] max-w-screen px-10 ">
      <div className=" container mx-auto sm:px-20 max-w-screen-lg">
        <p className="text-center text-2xl leading-8 text-black font-bold mb-20">
          Discover more events insights
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 gap-y-20">
          {otherPosts.map((post, index) => {
            if (index > 1) return;
            return (
              <div key={index} className="flex-1 space-y-5">
                <div className="relative sm:flex-1 w-full h-[250px]">
                  <Link href={`/company/${post.slug}`}>
                    <Image
                      quality={30}
                      placeholder="blur"
                      src={post.image}
                      alt={post.name}
                      fill
                      className=" object-cover rounded-lg hover:scale-105 duration-700"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex sm:text-left flex-col gap-4">
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
      </div>
    </div>
  );
};

export default OtherPosts;
