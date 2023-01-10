import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Logo from "../content/logo.png"

const Footer = () => {
    return (
        <footer className="p-4 bg-[#262626] shadow md:px-6 md:py-8 dark:bg-gray-900 border-t-2 border-t-gray-700">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <div className={styles.footerLogo} />
                    <span className=" pl-2 self-center text-2xl font-semibold  text-gray-300">MMH</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-md font-semibold text-gray-300 sm:mb-0 dark:text-gray-400">


                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="/exercise" className="mr-4 hover:underline md:mr-6 ">Exercise</a>
                    </li>
                    <li>
                        <a href="/relationship" className="hover:underline">Relationship</a>
                    </li>


                </ul>
            </div>
            {/* <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
            <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">©<a href="/" className="hover:underline">MMH</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer