import React, { useEffect, useState } from 'react'
import HeroHeading from "../components/Typography/HeroHeading"
import Head from "next/head"
import { firestore } from "../lib/firebase/firebase"
import { doc, getDocs, collection } from "firebase/firestore"
import { isAssertEntry } from "typescript"
import { querystring } from "@firebase/util"
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import Link from "next/link"
import NavbarNew from "../components/NavbarNew"
import { motion } from "framer-motion"
import Image from "next/image"
import coloseum from "../content/coloseum4.png"

function Dashboard() {

    const postCategories = [

        { id: 1, name: "Health", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/health_vnuqvb.jpg" },
        { id: 2, name: "Exercise", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557804/exercise_gkjbg4.jpg" },
        { id: 3, name: "Work", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/work_tj78ko.jpg" },
        { id: 4, name: "Dating", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557804/relationship_vsrrtb.jpg" },
        { id: 5, name: "Mental Health", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/mentalHealth_inmzmy.jpg" },
        { id: 6, name: "Social", image: "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/socialising_sc76ud.jpg" },
    ]

    const [posts, setPosts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [filterCategory, setFilterCategory] = useState(0)




    return (
        <div className="mx-auto max-w-screen bg-mainbg text-white min-h-screen">
            <Head>
                <title>Dashboard</title>
            </Head>
            <NavbarNew />
            <div className=" mx-auto max-w-4xl">
                <h1 className="mt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl ">Dashboard</h1>
                <p className="text-gray-300 text-center pt-12 mx-auto w-4/5 lg:w-3/5">Welcome to MMH, we're glad to have you onboard.</p>
                <div className=" flex flex-wrap gap-3  text-white place-content-center justify-evenly mt-12">

                </div>

                {/* Content categories grid */}
                <motion.div layout className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-12 items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300">

                    {postCategories.map(category => {
                        return (
                            <motion.div layout animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacitiy: 0 }}
                                className="relative" key={category.id}>
                                <Link href={`/content/${category.name.toLowerCase()}`}>
                                    <img className="w-full h-52 mx-auto object-cover" src={category.image} width={200} height={200} />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
                                    <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{category.name}</h3>

                                </Link>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div >
    )
}

export default Dashboard