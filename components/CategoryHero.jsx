import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/About.module.css";
import HeroHeading from "../components/Typography/HeroHeading";
import Breadcrumb from "../components/Typography/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

const CategoryHero = ({
  title,
  breadcrumb,
  content1,
  content2,
  content3,
  bg
}) => {
  return (
    <section
      style={{ background: `url(${content3})` }}
      className="lg:w-4/5 mx-auto"
    >
      {/* Navbar End */}
      <div className="lg:w-6/12 md:w-3/4 sm:w-3/4 my-2 pb-64 pt-28">
        <div className="flex justify-center align-center flex-col margin m-auto">
          <Breadcrumb breadcrumb={breadcrumb} />
          <HeroHeading title={title} />
          <p className="text-white my-2 text-base leading-8">{content1}</p>
          <p className="text-white my-2 text-base leading-8">{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
