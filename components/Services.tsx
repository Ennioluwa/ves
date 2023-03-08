import megaphone from "../public/megaphone.png";
import serviceBall from "../public/service-ball.png";
import fluent from "../public/fluent.png";
import home from "../public/home.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="xl:max-w-7xl mx-auto px-5 sm:px-10 mt-20 md:mt-[144px]">
      <h6 className="leading-[24px] text-[16px] font-medium text-[#6E796F] mb-[16px]">
        OUR SERVICES
      </h6>
      <h3 className="leading-[50px] font-extrabold text-[43px] mb-10 md:mb-20 text-[#222823] md:leading-[88px] md:text-[81px] ">
        Discover how we <br />
        make it happen
      </h3>
      <div className=" flex flex-col md:flex-row  md:gap-6 flex-wrap lg:flex-nowrap gap-8 items-center md:justify-between ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:justify-between">
          <div className="flex-1 border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image
              src={megaphone}
              alt="megaphone"
              className=" h-[72px] w-[72px]"
            />
            <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
              Event Planning
            </p>
            <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
              We specialize in bringing your vision to life. Our team of
              experienced planners will work with you to create a truly
              unforgettable event. From corporate events to weddings, birthdays
              & more.
            </p>
          </div>
          <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image src={fluent} alt="fluent" className=" h-[72px] w-[72px]" />
            <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
              Event Design
            </p>
            <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
              Over a wide range of design services, including decor, lighting,
              floral works, and more, our experienced designers will work with
              you to bring your vision to life, leaving out no detail.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 md:justify-between">
          <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image src={home} alt="home" className=" h-[72px] w-[72px]" />
            <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
              Event Location
            </p>
            <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
              We help you find the perfect venue for your event. We understand
              that finding the right location can be a challenge, which is why
              our team of experts will work with you to find the right venue.
            </p>
          </div>
          <div className="flex-1  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image
              src={serviceBall}
              alt="service ball"
              className=" h-[72px] w-[72px]"
            />
            <p className=" text-[#222823] font-extrabold text-[24px] leading-[32px]">
              Event Staffing
            </p>
            <p className=" text-[#535353] text-[16px] leading-[24px] font-normal">
              We understand that the success of your event depends on the people
              who make it happen, which is why we provide a range of staffing
              services like servers, bartenders, security personnel & more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
