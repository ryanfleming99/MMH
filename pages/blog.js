import React, { useEffect } from 'react'
import HeroHeading from "../components/Typography/HeroHeading"
import Head from "next/head"






function blog() {



    return (
        <div className="mx-auto max-w-screen p-3 bg-gray-800 min-h-screen">
            <Head>
                <title>Blog</title>
            </Head>
            <div className=" mx-auto max-w-4xl">
                <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl">Blog</h1>
                <p className="text-gray-300 pt-12 mx-auto w-3/5">Lorem ipsum dolor sit amet consectetur. Senectus quam viverra orci sed sed turpis in cursus. A tempor faucibus arcu lacus porta auctor tempus id purus.</p>
            </div>
        </div>
    )
}

export default blog