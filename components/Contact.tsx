import Image from "next/image";
import contact1 from "../public/contact-1.png";
import contact2 from "../public/contact-2.png";

const Contact = () => {
  return (
    <div className=" xl:max-w-7xl container mx-auto px-5 sm:px-10">
      <p className="mt-14 md:mt-[80px] text-xl md:text-[36px] md:leading-[48px] mb-14 md:mb-[80px] font-extrabold">
        Looking to plan your next event?
        <br />
        We can't wait to hear from you!
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-[110px] rounded-lg">
        <Image
          src={contact2}
          alt="contact 1"
          className=" md:flex-1 order-2 md:order-1 h-96 md:h-[560px] rounded-lg object-cover object-center"
        />
        <div className="md:flex-1 order-1 md:order-2">
          <p className="contact-header">Our digits</p>
          <p className="text-[16px] leading-[24px]">
            <span></span> Phone Number: +1 (214) 755-3638
          </p>
          <p className="text-[16px] leading-[24px]">
            <span></span> <span className=" font-bold">Email Address:</span>{" "}
            veee.events21@gmail.com
          </p>
        </div>
      </div>
      <section id="quote">
        <h3 className="contact-header md:mt-[144px] mt-20 mb-[80px] md:pl-4">
          Get a Free Quote
        </h3>
        <div className="flex gap-10 lg:gap-[104px] flex-col md:flex-row">
          <div className="md:flex-1 order-2 md:order-1">
            <form className=" flex flex-col gap-[32px] text-[16px] leading-[24px]">
              <div className=" flex flex-col gap-2">
                <label htmlFor="name" className=" font-bold">
                  Name <span className=" text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="contact-input"
                  placeholder="Enter your name"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="email" className=" font-bold">
                  Email <span className=" text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  required
                  className="contact-input"
                  placeholder="Enter your email address"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="phone" className=" font-bold">
                  Phone <span className=" text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  required
                  className="contact-input"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="price" className=" font-bold">
                  Price Range <span className=" text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="price"
                  required
                  className="contact-input"
                  placeholder="Enter the price range"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="event" className=" font-bold">
                  Event Description
                </label>
                <textarea
                  id="event"
                  rows={5}
                  className="contact-input"
                  placeholder="Describe event details"
                />
              </div>
              <button
                type="submit"
                className="px-[47.5px] h-[56px] flex items-center bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] self-start text-white font-bold "
              >
                Submit
              </button>
            </form>
          </div>
          <Image
            src={contact1}
            alt="contact 2"
            className=" hidden md:block md:flex-1 order-1 md:order-2 h-96 md:h-[560px] rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
