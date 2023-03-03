import megaphone from "../public/megaphone.png";
import serviceBall from "../public/service-ball.png";
import fluent from "../public/fluent.png";
import home from "../public/home.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container mx-auto p-5">
      <h6 className=" text-sm font-medium text-[#6E796F]">OUR SERVICES</h6>
      <h3 className=" leading-[44px] font-extrabold text-4xl mb-10 text-[#222823]">
        Discover how we <br />
        make it happen
      </h3>
      <div className=" flex flex-col md:flex-row  md:gap-3 gap-8 md:justify-between ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-3 md:justify-between">
          <div className=" border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image
              src={megaphone}
              alt="megaphone"
              className=" h-[36px] w-[36px]"
            />
            <p className=" text-[#222823] font-extrabold">Event Planning</p>
            <p className=" text-[#535353] text-sm">
              We specialize in bringing your vision to life. Our team of
              experienced planners will work with you to create a truly
              unforgettable event. From corporate events to weddings, birthdays
              & more.
            </p>
          </div>
          <div className="  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image src={fluent} alt="fluent" className=" h-[36px] w-[36px]" />
            <p className=" text-[#222823] font-extrabold">Event Design</p>
            <p className=" text-[#535353] text-sm">
              Over a wide range of design services, including decor, lighting,
              floral works, and more, our experienced designers will work with
              you to bring your vision to life, leaving out no detail.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-3 md:justify-between">
          <div className="  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image src={home} alt="home" className=" h-[36px] w-[36px]" />
            <p className=" text-[#222823] font-extrabold">Event Location</p>
            <p className=" text-[#535353] text-sm">
              We help you find the perfect venue for your event. We understand
              that finding the right location can be a challenge, which is why
              our team of experts will work with you to find the right venue.
            </p>
          </div>
          <div className="  border-gray-100 border-[1px] rounded space-y-4 p-5 max-w-[400px]">
            <Image
              src={serviceBall}
              alt="service ball"
              className=" h-[36px] w-[36px]"
            />
            <p className=" text-[#222823] font-extrabold">Event Staffing</p>
            <p className=" text-[#535353] text-sm">
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
