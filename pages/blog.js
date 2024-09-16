import React, { useEffect, useState } from "react";
import HeroHeading from "../components/Typography/HeroHeading";
import Head from "next/head";
import { firestore } from "../lib/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import parse from "html-react-parser";
import Link from "next/link";
import NavbarNew from "../components/NavbarNew";
import { motion } from "framer-motion";
import safeJsonStringify from "safe-json-stringify";
import Image from "next/image"; // Import next/image

export async function getServerSideProps(context) {
  const res = await getDocs(collection(firestore, "posts"));

  const docsData = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return {
    props: {
      postsArray: JSON.parse(safeJsonStringify(docsData)) // Safe JSON stringification
    }
  };
}

function Blog({ postsArray }) {
  // Correct destructuring
  const postCategories = [
    { id: 0, name: "All" },
    { id: 1, name: "Health" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Work" },
    { id: 4, name: "Dating" },
    { id: 5, name: "Social" }
  ];

  const [posts, setPosts] = useState(postsArray);
  const [filtered, setFiltered] = useState(postsArray);
  const [filterCategory, setFilterCategory] = useState(0);

  useEffect(() => {
    setPosts(postsArray);
    setFiltered(postsArray);
  }, [postsArray]);

  useEffect(() => {
    if (filterCategory === 0) {
      setFiltered(posts);
    } else {
      const filteredPosts = posts.filter(
        post => post.category.id === filterCategory
      );
      setFiltered(filteredPosts);
    }
  }, [filterCategory, posts]);

  return (
    <div className="mx-auto max-w-screen p-3 bg-mainbg text-white min-h-screen">
      <Head>
        <title>Blog</title>
      </Head>
      <NavbarNew />
      <div className="mx-auto max-w-4xl">
        <h1 className="mt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl">
          Blog
        </h1>
        <p className="text-gray-300 text-center pt-12 mx-auto w-4/5 lg:w-3/5">
          Lorem ipsum dolor sit amet consectetur. Senectus quam viverra orci sed
          sed turpis in cursus. A tempor faucibus arcu lacus porta auctor tempus
          id purus.
        </p>
        <div className="flex flex-wrap gap-3 text-white place-content-center justify-evenly mt-12">
          {postCategories.map(category => (
            <button
              className="flex-1 bg-white text-gray-800 font-semibold px-4 py-2 my-2"
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <motion.div
          layout
          className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-20 items-center mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
        >
          {filtered.map(post => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }} // Correct opacity spelling
              className="relative"
              key={post.id}
              style={{ backgroundImage: `url(${post.image})` }} // Correct background image syntax
            >
              <Link href={`/posts/${post.id}`}>
                <Image
                  className="w-full h-52 mx-auto object-cover"
                  src={post.thumbnailImage}
                  alt={`Thumbnail for ${post.title}`} // Add meaningful alt text
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
