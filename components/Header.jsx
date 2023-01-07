import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <main className={styles.hero}>
      <Navbar />
      {/* Navbar End */}

      <div className="lg:w-6/12 md:w-3/4 sm:w-3/4 my-2">
        <div className="h-[75vh] flex justify-center align-center flex-col margin m-auto">
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl">
            Welcome to the Tribe
          </h1>
          <br />
          <h2 className="text-white my-2 text-base">
            We're a like-minded group of men who strive to improve every day
          </h2>
          <br />
          <button
            type="button"
            className="border sm:max-w-sm lg:max-w-lg sm:text-xl md:max-w-md  border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default Header;
