import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// import Navbar from "../components/Navbar";
import NavbarNew from "../components/NavbarNew"

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
    return (
        <main className="pl-12 min-h-screen">


            <div className="w-3/4 lg:w-1/2">
                <div className="h-[75vh] flex justify-center  flex-col ">
                    <h1 className="text-white font-bold text-4xl  lg:text-6xl">
                        Empowering Men's Mental Health
                    </h1>
                    <br />
                    <h2 className="text-white my-2 text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptatem deserunt doloribus pariatur architecto odit non repellat accusantium esse animi, cum delectus, modi neque nostrum repellendus dolores voluptas fuga alias?
                    </h2>
                    <br />
                    <button
                        type="button"
                        className="border sm:max-w-sm lg:max-w-lg sm:text-xl md:max-w-md font-semibold  border-gray-200 bg-btngray text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    >
                        Learn More
                    </button>
                </div>


            </div>
        </main>
    )
}

export default Header;
