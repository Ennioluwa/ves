import { Contact, Footer, Navbar } from "../components";

const contact = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <Navbar text="contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
