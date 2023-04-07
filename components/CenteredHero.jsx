import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/About.module.css";
import HeroHeading from "../components/Typography/HeroHeading";

const inter = Inter({ subsets: ["latin"] });

const CenteredHero = ({ title, content1, content2, content3 }) => {
  return (
    <section
      style={{ background: `url(${content3})` }}
      className="lg:w-4/5 mx-auto"
    >
      {/* Navbar End */}
      <div className="lg:w-full md:w-4/4 sm:w-4/4 my-2 text-center px-64">
        <div className="py-48 flex justify-center align-center flex-col margin m-auto">
          <HeroHeading title={title} />
          <p className="text-white my-2 text-base leading-8">{content1}</p>
          <p className="text-white my-2 text-base leading-8">{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default CenteredHero;
