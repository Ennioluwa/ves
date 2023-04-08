import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BlurData from "./BlurData";

interface Props {
  post: Post;
  otherPosts: Post[];
}

// TODO - AUTHOR'S PICTURE

const Blog = ({ post, otherPosts }: Props) => {
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto mt-20 md:mt-[100px]">
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
            quality={30}
            placeholder="blur"
            blurDataURL={BlurData()}
            src={post.image}
            alt={post.name}
            fill
            className=" w-[100vw] hover:scale-105 duration-700 object-cover rounded-lg object-center-top "
          />
        </div>

        <div className=" flex flex-col md:flex-row gap-10 lg:gap-[104px] max-w-[1020px] mx-auto">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Image
                quality={30}
                placeholder="blur"
                blurDataURL={BlurData()}
                src={post.authorImage}
                alt={post.author}
                height={80}
                width={80}
                className="object-cover rounded-full h-20 w-20 bg-gray-200 object-top"
              />
              <div className="leading-6">
                <p className="text-[#222823]  font-bold">{post.author}</p>
                <p className="text-[#535353]">Author</p>
              </div>
            </div>
          </div>
          <div className="flex-[2] flex flex-col gap-10 ">
            {post.content.map((value, i) => (
              <div key={i} className="text-[#535353]">
                {value.type === "header" && (
                  <h2 className=" font-bold text-black">{value.text}</h2>
                )}
                {value.type === "list" &&
                  value.text.map((text, j) => (
                    <div key={j} className="space-x-1">
                      <span>{j + 1}.</span>
                      <span>{text}</span>
                    </div>
                  ))}
                {value.type === "body" && <p className="">{value.text}</p>}
                {value.type === "footer" && <h2>{value.text}</h2>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
