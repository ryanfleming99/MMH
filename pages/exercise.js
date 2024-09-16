import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Pillars.module.css";
import CategoryHero from "../components/CategoryHero.jsx";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "../components/Typography/Breadcrumb.jsx";
import SubHeading from "../components/Typography/SubHeading.jsx";
import SignUp from "../components/SignUp.jsx";
import NavbarNew from "../components/NavbarNew";

function exercise() {
  const content = [
    {
      title: "Sweat now, shine later.",
      content1: `When we break a sweat and push our bodies to their limits, we release endorphins that naturally lift our mood and reduce feelings of stress and anxiety. But the benefits of exercise go far beyond just a temporary adrenaline rush. Regular physical activity has been shown to improve overall cognitive function, increase self-esteem, and even reduce the symptoms of depression and other mental health disorders.`,
      breadcrumb: "Exercise"
    }
  ];

  const lockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="white"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );

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
        "https://res.cloudinary.com/ryry/image/upload/v1681040138/jiujitsu_hs7sp8.webp",
      title: "Jiu Jitsu Stretching 101"
    }
  ];

  const blogArticles = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867037/boxing_hu09kc.jpg",
      title: "Fitness Fuel for Thought"
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867007/exercise_tp7lju.jpg",
      title: "Train Hard, Rest Easy"
    },
    {
      id: 3,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867047/chart_u999f8.jpg",
      title: "Active Lifestyle Now"
    },
    {
      id: 4,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867055/sunset_boftjx.jpg",
      title: "Sweat and Shine"
    },
    {
      id: 5,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867049/rain_ekiuls.jpg",
      title: "Fit for Life",
      blur: true
    },
    {
      id: 6,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867000/relationship_mj1uwd.jpg",
      title: "Stronger Every Day",
      blur: true
    }
  ];

  const recommendedArticles = [
    {
      id: 1,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680866978/work_cd7vvy.jpg",
      title: "Bros before mental woes",
      locked: false,
      blur: false
    },
    {
      id: 2,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680866998/socialising_ewhy82.jpg",
      title: "Game night: How activities can boost mental well-being",
      locked: true,
      blur: true
    },
    {
      id: 3,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680867015/mentalHealth_qf4em0.jpg",
      title: "John Wick: Time to upgrade your sh*t",
      locked: true,
      blur: true
    },
    {
      id: 4,
      thumbnailImage:
        "https://res.cloudinary.com/ryry/image/upload/v1680861357/exercise_u4e0xa.png",
      title: "Get away! No seriously...it’s time to take a break",
      locked: false,
      blur: false
    }
  ];

  const ads = [
    {
      id: 1,
      thumbnailImage:
        "https://hips.hearstapps.com/hmg-prod/images/healthy-lunch-in-boxes-royalty-free-image-1066057914-1543528089.jpg",
      title: ""
    },
    {
      id: 2,
      thumbnailImage:
        "https://dce5jani6jm7e.cloudfront.net/data/refer-friend/meta/refer-friend-en.jpg",
      title: ""
    }
  ];

  return (
    <div
      className="bg-mainbg min-h-full bg-no-repeat bg-contain"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1681047301/man-running-up-hill-black-white_g4vfcg.jpg')"
      }}
    >
      <Head>
        <title>MMH | Excercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarNew />
      <CategoryHero
        title={content[0].title}
        content1={content[0].content1}
        breadcrumb={content[0].breadcrumb}
      />
      {/* Blog grid */}
      <motion.div
        layout
        className="grid gap-4 lg:grid-cols-2 relative sm:grid-cols-1 justify-center items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full"
      >
        <p className="text-white text-2xl pb-10">Recent blogs</p>
      </motion.div>

      <motion.div
        layout
        className="grid gap-4 grid-cols-1 lg:grid-cols-2 justify-center items-center  mx-auto w-full lg:w-4/5  text-gray-300"
      >
        {blogSquare.map(post => {
          return (
            <div className="relative">
              <Link href={`/posts/${post.id}`}>
                <Image
                  className="w-full h-60 mx-auto object-cover"
                  src={post.thumbnailImage}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
                <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {post.title}
                </h3>
              </Link>
            </div>
          );
        })}
      </motion.div>
      <h2 className="text-center text-6xl text-white font-semibold pt-40">
        Ultimate Workout Categories
      </h2>
      <h3 className="text-center text-2xl text-white pt-4">
        Here are a collection of the best workout categories for you to view
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
                <Image
                  className={`w-full h-54 opacity-30 mx-auto object-cover border-none  ${
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
        <p className="text-left text-white pb-0 font-bold">Ads</p>
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
              className="relative bg-transparent"
              key={post.id}
              style={{ backgroundImage: `url${post.thumbnailImage}` }}
            >
              <Link href={`/posts/${post.id}`}>
                <Image
                  className={`w-full h-56 mx-auto object-cover border-none  ${
                    post.blur ? "blur-sm" : "blur-none"
                  }`}
                  src={post.thumbnailImage}
                />
                <div className="absolute text-left inset-0 bg-black bg-opacity-0">
                  <h3 className="text-white text-left font-semibold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {post.title}
                  </h3>
                </div>
              </Link>
              {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
            </motion.div>
          );
        })}
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
                {post.locked && (
                  <div className="absolute z-10 translate-x-1/2 translate-y-1/2   mx-auto">
                    {" "}
                    {lockIcon}
                  </div>
                )}
                <p className="text-white font-bold bg-transparent">
                  {post.status}
                </p>
              </div>
              <Link href={`/posts/${post.id}`}>
                <Image
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
