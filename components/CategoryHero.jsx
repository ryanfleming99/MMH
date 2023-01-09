import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

const inter = Inter({ subsets: ["latin"] });

const CategoryHero = ({ title, content1, content2, content3 }) => {
  return (
    <section style={{ background: `url(${content3})` }}>
      <Navbar />
      {/* Navbar End */}
      <div className="lg:w-6/12 md:w-3/4 sm:w-3/4 my-2">
        <div className="h-[75vh] flex justify-center align-center flex-col margin m-auto">
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl">
            {title}
          </h1>
          <p className="text-white my-2 text-base leading-8">{content1}</p>
          <p className="text-white my-2 text-base leading-8">{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
