import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  post: Post;
  otherPosts: Post[];
}

const Blog = ({ post, otherPosts }: Props) => {
  return (
    <div className=" xl:max-w-7xl container mx-auto px-5 sm:px-10 mt-20 md:mt-[100px]">
      <div className=" flex flex-col items-center mx-auto text-center mb-12 space-y-6 md:space-y-12 max-w-[858px]">
        <p className=" self-center bg-[#F0F0F0] text-black py-1 px-4 border-l-[6px] border-primary rounded-lg ">
          {post.name}
        </p>
        <h3 className="header">{post.title}</h3>
        <p className=" flex items-center justify-center gap-3 text">
          <span>{post.date}</span>
          <span className=" h-2 w-2 rounded-full bg-black"></span>
          <span>{post.time} Mins Read</span>
        </p>
      </div>
      <div className="relative h-[250px] sm:h-[400px] w-full  mb-[104px] ">
        <Image
          src={post.image}
          alt={post.name}
          fill
          className=" w-[100vw] hover:scale-105 duration-700 object-cover rounded-lg  "
        />
      </div>

      <div className=" flex gap-10 lg:gap-[104px] max-w-[1020px] mx-auto">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Image
              src={post.image}
              alt={post.author}
              height={80}
              width={80}
              className="object-cover rounded-full h-20 w-20 bg-gray-200"
            />
            <div className="leading-6">
              <p className="text-[#222823]  font-bold">{post.author}</p>
              <p className="text-[#535353]">Author</p>
            </div>
          </div>
        </div>
        <div className="flex-[2] bg-gray-400 h-80"></div>
      </div>
    </div>
  );
};

export default Blog;