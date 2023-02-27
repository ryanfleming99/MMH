import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NavbarNew from "../components/NavbarNew"
import Image from "next/image"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] });



const Header = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 min-h-screen md:h-content w-full md:w-10/12 mx-auto text-center items-center">

            <motion.div animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, x: -200 }}
                className="">
                <div className="flex flex-col">
                    <h1 className="text-white font-bold text-4xl lg:text-5xl">
                        Empowering Men's Mental Health
                    </h1>
                    <br />
                    <h2 className="text-white my-2 text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptatem deserunt doloribus pariatur architecto odit non repellat accusantium esse animi, cum delectus, modi neque nostrum repellendus dolores voluptas fuga alias?
                    </h2>
                    <br />
                    <button
                        type="button"
                        className="border mx-auto sm:max-w-sm lg:max-w-lg sm:text-xl md:max-w-md font-semibold py-4 px-24  border-gray-200 bg-btngray text-gray-700 rounded-md  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    >
                        Learn More
                    </button>
                </div>
            </motion.div>

            <motion.div animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, x: 200 }}
                className="mx-auto hidden lg:block group ">

                <div className="absolute translate-x-24 translate-y-32 group-hover:rotate-12 group-hover:translate-x-16 group-hover:translate-y-40  transition-all ease-in-out">
                    <Image src="/boxing.jpg " width={350} height={350} alt="boxing image" />
                </div>

                <div className="absolute group-hover:-rotate-12 transition-all ease-in-out group-hover:-translate-x-18 group-hover:-translate-y-10 ">
                    <Image src="/rain.jpg " width={350} height={350} alt="raining backdrop" />

                </div>
                <div className="absolute translate-y-12 translate-x-52 group-hover:rotate-12 transition-all ease-in-out group-hover:translate-y-20 group-hover:translate-x-60">
                    <Image src="/chart.jpg " width={350} height={350} alt="mobile phone showing trading chart" />
                </div>
                <div className="absolute -translate-y-48 translate-x-48 group-hover:rotate-12 transition-all ease-in-out group-hover:translate-x-56 group-hover:-translate-y-56">
                    <Image src="/forest.jpg " width={350} height={350} alt="snow covered forest" />

                </div>

                <div className="-translate-y-20 translate-x-16 group-hover:-rotate-12 transition-all ease-in-out group-hover:translate-x-8 group-hover:-translate-y-40">
                    <Image src="/sunset.jpg " width={350} height={350} alt="sunset overlooking a city" />
                </div>


            </motion.div>
        </div >
    )
}

export default Header;
