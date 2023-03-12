import { Company, Footer, Navbar } from "../../components";

const company = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <Navbar text="company" />
      <Company />
      <Footer />
    </div>
  );
};

export default company;
