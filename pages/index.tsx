import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Footer,
  Hero,
  PastEvents,
  Quote,
  Reviews,
  Services,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <Quote />
      <PastEvents />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
