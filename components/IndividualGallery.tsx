import Image from "next/image";
import BlurData from "./BlurData";

const IndividualGallery = ({
  title,
  content,
  header,
  images,
  review,
}: Gallery) => {
  return (
    <section className="">
      <div className="px-5 sm:px-10 bg-[#1E1E1E] text-white">
        <div className=" xl:max-w-7xl container mx-auto ">
          <div className=" flex flex-col gap-10 py-20 md:py-[104px] md:w-2/3 md:max-w-[686px] mx-auto">
            <h5 className="title">{title}</h5>
            <h3 className="header">{header}</h3>
            <p className=" flex flex-col gap-5">
              {content.map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-5 h-full w-full">
            <div className=" flex flex-col md:flex-row gap-5 ">
              <div className="relative md:flex-[2]  h-[350px] md:h-[320px] lg:h-[500px]">
                <Image
                  quality={30}
                  placeholder="blur"
                  blurDataURL={BlurData()}
                  src={images[0]}
                  alt="gallery"
                  fill
                  className=" rounded-lg object-cover"
                />
              </div>
              <div className="relative md:flex-1  h-[350px] md:h-[320px] lg:h-[500px]">
                <Image
                  quality={30}
                  placeholder="blur"
                  blurDataURL={BlurData()}
                  src={images[1]}
                  alt="gallery"
                  fill
                  className=" rounded-lg object-cover object-center-top"
                />
              </div>
            </div>
            <div className=" flex flex-col md:flex-row gap-5">
              <div className="relative md:flex-1  h-[350px] md:h-[320px] lg:h-[500px]">
                <Image
                  quality={30}
                  placeholder="blur"
                  blurDataURL={BlurData()}
                  src={images[2]}
                  alt="gallery"
                  fill
                  className=" rounded-lg object-cover"
                />
              </div>
              <div className="relative md:flex-1  h-[350px] md:h-[320px] lg:h-[500px]">
                <Image
                  quality={30}
                  placeholder="blur"
                  blurDataURL={BlurData()}
                  src={images[3]}
                  alt="gallery"
                  fill
                  className=" rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="relative  h-[350px] md:h-[320px] lg:h-[500px] -mb-5">
              <Image
                quality={30}
                placeholder="blur"
                blurDataURL={BlurData()}
                src={images[4]}
                alt="gallery"
                fill
                className=" rounded-lg object-cover object-center-top"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` w-full text-center mt-40 sm:w-2/3 mx-auto max-w-[400px] lg:max-w-[50%] min-h-[250px] sm:h-[200px] md:h-[350px] lg:h-[300px] px-5 lg:px-10 `}
      >
        <p className=" text-[#535353] text-md md:text-[24px] md:leading-[32px] font-normal">
          {review.content}
        </p>
        <p className=" font-bold mt-[24px] text-[16px] leading-[24px]">
          {review.name}
        </p>
        <p className="mt-[8px] text-[12px] leading-[16px] text-[#6E796F] italic">
          {review.title}
        </p>
      </div>
    </section>
  );
};

export default IndividualGallery;
