import { Footer, Navbar, ServicePage } from "../components";

const services = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <Navbar text="services" />
      <ServicePage />
      <Footer />
    </div>
  );
};

export default services;
