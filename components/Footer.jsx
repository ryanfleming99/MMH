import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import Logo from "../content/logo.png"; // Only if you plan to use it

const Footer = () => {
  return (
    <footer className="p-4 bg-[#262626] shadow md:px-6 md:py-8 dark:bg-gray-900 border-t-2 border-t-gray-700">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" passHref>
          <div className="flex items-center mb-4 sm:mb-0">
            {/* Add Logo Image if needed */}
            <Image
              src={Logo}
              alt="MMH Logo"
              width={50}
              height={50}
              className="footerLogo" // Alternatively, use your styles here
            />
            <span className="pl-2 self-center text-2xl font-semibold text-gray-300">
              MMH
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap items-center mb-6 text-md font-semibold text-gray-300 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/Home" passHref>
                <p className="mr-4 hover:underline md:mr-6">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <p className="mr-4 hover:underline md:mr-6">About</p>
              </Link>
            </li>
            <li>
              <Link href="/exercise" passHref>
                <p className="mr-4 hover:underline md:mr-6">Exercise</p>
              </Link>
            </li>
            <li>
              <Link href="/relationship" passHref>
                <p className="hover:underline">Relationship</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">
        ©{" "}
        <Link href="/" passHref>
          <p className="hover:underline">MMH</p>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
