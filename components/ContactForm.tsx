import React from "react";

const ContactForm = () => {
  return (
    <form className=" flex flex-col gap-[32px] text-[16px] leading-[24px] text-black text-left">
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
          Event Description <span className=" text-primary">*</span>
        </label>
        <textarea
          id="event"
          required
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
  );
};

export default ContactForm;
