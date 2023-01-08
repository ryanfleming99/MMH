import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const Hero = ({ title, content1, content2 }) => {
  return (
    <section className={styles.hero}>
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

export default Hero;
