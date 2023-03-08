import { Footer, Gallery, Navbar } from "../components";

const gallery = () => {
  return (
    <div className=" min-h-screen min-w-full">
      <Navbar text="gallery" />
      <Gallery />
      <Footer />
    </div>
  );
};

export default gallery;
