import Image from "next/image";
import {
  BlurData,
  EverythingEvent,
  Footer,
  Gallery,
  IndividualGallery,
  Navbar,
} from "../../components";
import { galleryPages } from "../../data/gallery";

const gallery = (props: Gallery) => {
  return (
    <div className=" flex flex-col">
      <div className="relative text-white">
        <div className="relative -z-10 h-[60vh] w-full">
          <Image
            quality={30}
            placeholder="blur"
            blurDataURL={BlurData()}
            className=" -z-10 w-full brightness-50 object-cover"
            src={props.heroImage}
            alt={"hero image"}
            fill
            priority
          />
        </div>
        <div className=" absolute inset-0 w-full h-full grid place-items-center">
          <p className="  font-extrabold text-7xl leading-[100px] md:text-[140px] md:leading-[150px] lg:text-[182.25px] lg:leading-[184px] text-center">
            Explore the
            <br />
            moments
          </p>
        </div>
        <div className=" absolute top-0 left-0 right-0 w-full ">
          <Navbar text="gallery" />
        </div>
      </div>
      <IndividualGallery {...props} />
      <div className=" px-5 sm:px-10">
        <div className=" xl:max-w-7xl mx-auto container mt-20">
          <EverythingEvent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default gallery;

export async function getStaticPaths() {
  const slugs = galleryPages.map((page) => page.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const pages = galleryPages.find((page) => page.slug === params.slug);
  return { props: pages };
}
