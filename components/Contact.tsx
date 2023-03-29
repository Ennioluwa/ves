import Image from "next/image";
import contact1 from "../public/gallery/img21.png";
import contact2 from "../public/gallery/img22.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="px-5 sm:px-10">
      <div className=" xl:max-w-7xl container mx-auto">
        <p className="mt-14 md:mt-[80px] text-xl md:text-[36px] md:leading-[48px] mb-14 md:mb-[80px] font-extrabold">
          Looking to plan your next event?
          <br />
          We can't wait to hear from you!
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-[110px] rounded-lg">
          <Image
            quality={30}
            placeholder="blur"
            src={contact2}
            alt="contact 1"
            className=" md:flex-1 md:w-1/2 order-2 md:order-1 h-96 md:h-[560px] rounded-lg object-cover object-center-top"
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
          <div className="flex gap-10 lg:gap-[104px] flex-col md:flex-row md:items-center">
            <div className="md:flex-1 order-2 md:order-1">
              <ContactForm />
            </div>
            <Image
              quality={30}
              placeholder="blur"
              src={contact1}
              alt="contact 2"
              className=" hidden md:block md:flex-1 md:w-1/2 order-1 md:order-2 h-96 md:h-[560px] rounded-lg object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
