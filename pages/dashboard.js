import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavbarNew from "../components/NavbarNew";
import { motion } from "framer-motion";
import Image from "next/image"; // Import next/image for optimized images

function Dashboard() {
  const postCategories = [
    {
      id: 1,
      name: "Health",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/health_vnuqvb.jpg"
    },
    {
      id: 2,
      name: "Exercise",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557804/exercise_gkjbg4.jpg"
    },
    {
      id: 3,
      name: "Work",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/work_tj78ko.jpg"
    },
    {
      id: 4,
      name: "Dating",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557804/relationship_vsrrtb.jpg"
    },
    {
      id: 5,
      name: "Mental Health",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/mentalHealth_inmzmy.jpg"
    },
    {
      id: 6,
      name: "Social",
      image:
        "https://res.cloudinary.com/dtqqwxg68/image/upload/v1676557805/socialising_sc76ud.jpg"
    }
  ];

  return (
    <div className="mx-auto max-w-screen pb-2 bg-mainbg text-white min-h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <NavbarNew />
      <div className="mx-auto max-w-4xl">
        <h1 className="mt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl">
          Dashboard
        </h1>
        <p className="text-gray-300 text-center pt-12 mx-auto w-4/5 lg:w-3/5">
          Welcome to MMH, we're glad to have you onboard.
        </p>
        <div className="flex flex-wrap gap-3 text-white place-content-center justify-evenly mt-12"></div>

        {/* Content categories grid */}
        <motion.div
          layout
          className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-12 items-center mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
        >
          {postCategories.map(category => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }} // Fixed typo
              className="relative"
              key={category.id}
            >
              <Link href={`/content/${category.name.toLowerCase()}`} passHref>
                <div className="cursor-pointer">
                  <Image
                    className="w-full h-52 mx-auto object-cover"
                    src={category.image}
                    width={400} // Width for next/image optimization
                    height={300} // Height for next/image optimization
                    alt={`${category.name} category`} // Added alt attribute for accessibility
                    layout="responsive" // Better for responsive handling of images
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
