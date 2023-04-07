import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Pillars.module.css";
import CategoryHero from "../components/CategoryHero.jsx";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroHeading from "../components/Typography/HeroHeading.jsx";
import SubHeading from "../components/Typography/SubHeading.jsx";
import SignUp from "../components/SignUp.jsx";
import NavbarNew from "../components/NavbarNew";

function exercise() {
  const content = [
    {
      title: "Exercise",
      content1: `When we break a sweat and push our bodies to their limits, we release endorphins that naturally lift our mood and reduce feelings of stress and anxiety. But the benefits of exercise go far beyond just a temporary adrenaline rush. Regular physical activity has been shown to improve overall cognitive function, increase self-esteem, and even reduce the symptoms of depression and other mental health disorders.`,
      content3:
        "https://res.cloudinary.com/ryry/image/upload/v1680861357/exercise_u4e0xa.png"
    }
  ];

  const blogSquare = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680864348/image_ggsrpv.webp",
      title: "Ultimate Buddy Workout"
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680864395/eduardo-drapier-ipLwOIFm_qQ-unsplash_iryefs.jpg",
      title: "Jiu Jitsu Stretching 101"
    }
  ];

  const blogArticles = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello"
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello"
    },
    {
      id: 3,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello"
    },
    {
      id: 4,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello"
    },
    {
      id: 5,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello",
      blur: true
    },
    {
      id: 6,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Hello",
      blur: true
    }
  ];

  const recommendedArticles = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Bros before mental woes",
      locked: false,
      blur: false
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Game night: How activities can boost mental well-being",
      locked: true,
      blur: true
    },
    {
      id: 3,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "John Wick: Time to upgrade your sh*t",
      locked: true,
      blur: true
    },
    {
      id: 4,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Get away! No seriously...it’s time to take a break",
      locked: false,
      blur: false
    }
  ];

  const ads = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867056/sky_kujntr.webp",
      title: "50% off when using code 3344`"
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/maistra/image/upload/v1661773058/Proprietes/Camspite/Rovinj/Campsite%20Ve%C5%A1tar/REstaurants%20/Basilico%20Pizza%20Pasta/Basilico_Pizza_Pasta_raqsx4.jpg",
      title: "Game night: How activities can boost mental well-being"
    }
  ];

  return (
    <div
      className="bg-mainbg min-h-full bg-no-repeat bg-contain"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1680866088/pattern_raxqfh.png')"
      }}
    >
      <Head>
        <title>MMH | Excercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarNew />
      <CategoryHero title={content[0].title} content1={content[0].content1} />
      {/* Blog grid */}
      <motion.div
        layout
        className="grid gap-4 lg:grid-cols-2  sm:grid-cols-1 justify-center mt-20 items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
      >
        {blogSquare.map(post => {
          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacitiy: 0 }}
              className="relative"
              key={post.id}
              style={{ backgroundImage: `url${post.thumbnailImage}` }}
            >
              <Link href={`/posts/${post.id}`}>
                <img
                  className="w-full mx-auto object-contain opacity-100 hover:opacity-50"
                  src={post.thumbnailImage}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                <h3 className="text-white text-center font-semibold text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {post.title}
                </h3>
              </Link>
              {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
            </motion.div>
          );
        })}
      </motion.div>
      <h2 className="text-center text-6xl text-white font-semibold pt-32">
        Ultimate Workout Categories
      </h2>
      <h3 className="text-center text-4xl text-white font-semibold py-8 pb-24">
        Ultimate Workout Categories
      </h3>
      <motion.div
        layout
        className="grid gap-12 lg:grid-cols-3 sm:grid-cols-1 justify-center mt-20 items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
      >
        {blogArticles.map(post => {
          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacitiy: 0 }}
              className="relative w-3/4 mx-auto "
              key={post.id}
              style={{ backgroundImage: `url${post.thumbnailImage}` }}
            >
              <Link
                className="w-full h-54 mx-auto object-cover"
                href={`/posts/${post.id}`}
              >
                <img
                  className={`w-full h-54 mx-auto object-cover border-none  ${
                    post.blur ? "blur-sm" : "blur-none"
                  }`}
                  src={post.thumbnailImage}
                />
                <div className="absolute inset-2  bg-opacity-0 bg-black "></div>
                <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {post.title}
                </h3>
              </Link>
              {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        layout
        className="grid justify-center mt-24 items-center mb-24 mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
      >
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacitiy: 0 }}
          className="relative"
        >
          <SignUp />
          {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
        </motion.div>
      </motion.div>
      <motion.div className="mx-auto w-10/12 lg:w-4/5">
        <p className="text-left text-white pb-0 font-bold">
          Recommended Articles
        </p>
      </motion.div>
      <motion.div
        layout
        className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-5 items-center pb-24 mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
      >
        {recommendedArticles.map(post => {
          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacitiy: 0 }}
              className="relative bg-transparent"
              key={post.id}
              style={{ backgroundImage: `url${post.thumbnailImage}` }}
            >
              <div>
                {post.locked && <img src="../content/lock.svg" alt="Locked" />}
                <p className="text-white font-bold bg-transparent">
                  {post.status}
                </p>
              </div>
              <Link href={`/posts/${post.id}`}>
                <img
                  className={`w-full h-56 mx-auto object-cover border-none  ${
                    post.blur ? "blur-sm" : "blur-none"
                  }`}
                  src={post.thumbnailImage}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0">
                  <h3 className="text-white text-left font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {post.title}
                  </h3>
                </div>
              </Link>
              {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        layout
        className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-5 items-center pb-24 mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
      >
        {ads.map(post => {
          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacitiy: 0 }}
              className="relative bg-transparent flex justify-space-between"
              key={post.id}
              style={{ backgroundImage: `url${post.thumbnailImage}` }}
            >
              <div>
                <p className="text-white font-bold bg-transparent">
                  {post.status}
                </p>
              </div>
              <Link href={`/posts/${post.id}`}>
                <img
                  className={`w-full h-56 mx-auto object-cover border-none  ${
                    post.blur ? "blur-sm" : "blur-none"
                  }`}
                  src={post.thumbnailImage}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0">
                  <h3 className="text-white text-left font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {post.title}
                  </h3>
                </div>
              </Link>
              {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default exercise;
