import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavbarNew from "../../components/NavbarNew";
import Link from "next/link";
import { firestore, auth } from "../../lib/firebase/firebase";
import { doc, getDocs, collection, where, query } from "firebase/firestore";
import DeleteContentModal from "./DeletePostModal";
import Image from "next/image";

const contentPost = ({ posts, category }) => {
  // const [postsArray, setPostsArray] = useState(posts)

  // const getPosts = async () => {
  //     const querySnapshot = await getDocs(query(collection(firestore, "content"), where("category", "==", category)))
  //     const postsResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  //     setPosts(postsResult)
  //     console.log(postsResult)
  // }

  // useEffect(() => {
  //     getPosts()
  // }, [])

  return (
    <div className="mx-auto max-w-screen bg-mainbg text-white min-h-screen">
      <div className="mx-auto max-w-6xl bg-mainbg">
        <motion.div
          layout
          className="grid gap-4 lg:grid-cols-4  sm:grid-cols-1 mt-12 justify-center items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300"
        >
          {posts?.map(post => {
            return (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacitiy: 0 }}
                key={post.id}
              >
                <div
                  className="relative"
                  style={{ backgroundImage: `url${post.image}` }}
                >
                  <Link href={`/posts/${post.id}`}>
                    <Image
                      className="w-full h-52 mx-auto object-cover"
                      alt={`${post.title} image`}
                      src={post.thumbnailImage}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
                    <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {post.title}
                    </h3>
                  </Link>
                  {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 mb-8">
                  <Link href={`/admin/editContent/${post.id}`}>
                    <button
                      type="submit"
                      className="mx-auto w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white "
                    >
                      Edit
                    </button>
                  </Link>
                  <DeleteContentModal postId={post.id} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default contentPost;
