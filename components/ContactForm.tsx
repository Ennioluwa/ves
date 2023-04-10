import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknapgdg");
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
    error: false,
    success: false,
    sending: false,
  });
  const { name, email, phone, budget, description, error, success, sending } =
    values;

  return (
    <form
      className=" flex flex-col gap-[32px] text-[16px] leading-[24px] text-black text-left"
      onSubmit={(e) => {
        e.preventDefault();
        setValues({ ...values, sending: true });
        handleSubmit(e)
          .then((data) => {
            setValues({
              name: "",
              email: "",
              phone: "",
              budget: "",
              description: "",
              error: false,
              success: true,
              sending: false,
            });
          })
          .catch((error) => {
            setValues({
              ...values,
              success: false,
              error: true,
              sending: false,
            });
          });
      }}
    >
      <div className=" flex flex-col gap-2">
        <label htmlFor="name" className=" font-bold">
          Name <span className=" text-primary">*</span>
        </label>
        <input
          value={name}
          onChange={(e) =>
            setValues({
              ...values,
              success: false,
              error: false,
              sending: false,
              name: e.target.value,
            })
          }
          id="name"
          name="name"
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
          value={email}
          onChange={(e) =>
            setValues({
              ...values,
              success: false,
              error: false,
              sending: false,
              email: e.target.value,
            })
          }
          id="email"
          name="email"
          type="email"
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
          value={phone}
          onChange={(e) =>
            setValues({
              ...values,
              success: false,
              error: false,
              sending: false,
              phone: e.target.value,
            })
          }
          type="text"
          name="phone"
          id="phone"
          required
          className="contact-input"
          placeholder="Enter your phone number"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="price" className=" font-bold">
          Budget <span className=" text-primary">*</span>
        </label>
        <input
          value={budget}
          onChange={(e) =>
            setValues({
              ...values,
              success: false,
              error: false,
              sending: false,
              budget: e.target.value,
            })
          }
          type="text"
          name="budget"
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
          value={description}
          onChange={(e) =>
            setValues({
              ...values,
              success: false,
              error: false,
              sending: false,
              description: e.target.value,
            })
          }
          id="event"
          name="description"
          required
          rows={5}
          className="contact-input"
          placeholder="Describe event details"
        />
      </div>
      {error && (
        <p className=" text-red-500 italic">
          Oops, there was an error sending your message. Please try again later
          or contact us through our email or phone number.
        </p>
      )}
      {sending && (
        <p className=" text-gray-500 italic">
          Sending your message, please wait a moment...
        </p>
      )}
      {success && (
        <p className=" text-green-500 italic">
          Thank you for your message! We have received it and will get back to
          you as soon as possible.
        </p>
      )}
      <button
        type="submit"
        disabled={state.submitting}
        className="px-[47.5px] h-[56px] flex items-center bg-[#DF4D31] rounded-lg text-[16px] leading-[24px] self-start text-white font-bold "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
