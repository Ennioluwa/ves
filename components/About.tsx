import Image from "next/image";
import about1 from "../public/gallery/about-images/1.png";
import about2 from "../public/gallery/about-images/2.png";
import about3 from "../public/gallery/about-images/3.png";
import about4 from "../public/gallery/about-images/4.png";
import about5 from "../public/gallery/about-images/5.png";
import about6 from "../public/gallery/about-images/6.png";
import about7 from "../public/gallery/about-images/7.png";
import about8 from "../public/gallery/about-images/8.png";
import AboutIcons from "./AboutIcons";

const About = () => {
  return (
    <section className="px-5 sm:px-10">
      <div className="container  xl:max-w-7xl mx-auto mt-20 lg:mt-[104px] ">
        <div className=" flex gap-20 lg:gap-[104px] flex-col lg:flex-row items-center">
          <div className="lg:flex-1 flex flex-col gap-8 text-[#6E796F] text-base">
            <h3 className=" text-[#222823] font-extrabold text-[54px] leading-[64px] ">
              Here's why we're big on moments
            </h3>
            <p>
              At VEEE, our mission is to create unforgettable experiences that
              turn special moments into cherished memories. We believe that
              every event is an opportunity to create something unique and
              magical, and we are passionate about bringing our clients' visions
              to life.
            </p>
            <p>
              Our team of expert event planners and designers are committed to
              providing exceptional service, attention to detail, and creativity
              in everything we do. We strive to exceed our clients' expectations
              and deliver events that are truly unforgettable. Whether it's a
              wedding, corporate event, or special celebration, we approach
              every project with the same dedication and enthusiasm.
            </p>
            <p>
              At VEEE, we are more than just event planners and designers - we
              are memory makers.
            </p>
          </div>
          <div className="lg:flex-1 flex gap-5 w-full ">
            <div className=" h-full w-full flex flex-col gap-5">
              <div className=" w-full h-80 bg-gray-400 rounded-lg relative overflow-clip">
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about1}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className=" w-full h-60 bg-gray-400 rounded-lg relative overflow-clip">
                {" "}
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about2}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-5">
              <div className=" w-full h-60 bg-gray-400 rounded-lg relative overflow-clip">
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about3}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className=" w-full h-80 bg-gray-400 rounded-lg relative overflow-clip">
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about4}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-20 lg:gap-[104px] flex-col lg:flex-row items-center mt-20 lg:mt-[104px]">
          <div className="lg:flex-1 flex gap-5 w-full order-2 lg:order-1">
            <div className=" h-full w-full flex flex-col gap-5">
              <div className=" w-full h-80 bg-gray-400 rounded-lg relative overflow-clip">
                {" "}
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about5}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className=" w-full h-60 bg-gray-400 rounded-lg relative overflow-clip">
                {" "}
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about8}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-5">
              <div className=" w-full h-60 bg-gray-400 rounded-lg relative overflow-clip">
                {" "}
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about6}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
              <div className=" w-full h-80 bg-gray-400 rounded-lg relative overflow-clip">
                <Image
                  quality={30}
                  placeholder="blur"
                  src={about7}
                  alt="bride picture"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 flex flex-col gap-8 text-[#6E796F] text-base order-1 lg:order-2">
            <h3 className=" text-[#222823] font-extrabold text-[54px] leading-[64px] ">
              The VEEE Culture
            </h3>
            <p>
              We are proud of our positive and supportive work culture, which is
              built around our shared passion for creating your dream event as
              well as love for what we do.
            </p>
            <p>
              We are continuously exploring ways to improve events and tailor
              them to the requests of our clients. Our aim is to make every
              event so special, there’s only one of each. Nothing sloppy, just a
              perfect event made for you, the perfect client.
            </p>
            <p>
              At VEEE, our values are at the heart of everything we do, and we
              believe that they are essential to our success in creating
              unforgettable events and making moments into memories. Here are a
              few that make what we do possible:
            </p>
          </div>
        </div>
        <AboutIcons />
      </div>
    </section>
  );
};

export default About;
