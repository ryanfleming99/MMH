import React, { useEffect, useState, useCallback } from "react";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../../lib/firebase/firebase";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import Spinner from "../Spinner";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize the getPost function
  const getPost = useCallback(async () => {
    try {
      const docRef = doc(firestore, "content", id);
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        setPost(querySnapshot.data());
      } else {
        setError("Post not found");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      setError("Error fetching post data");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (firestore && id) {
      getPost();
    }
  }, [id, getPost]); // getPost is now memoized

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen p-3 lg:px bg-gray-800 min-h-screen">
      {post?.thumbnailImage && (
        <div className="w-11/12 lg:w-1/2 mx-auto">
          <Image
            src={post.thumbnailImage}
            className="mx-auto object-cover w-[600px] h-[300px]"
            alt="Article header image"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
      )}

      <article className="prose max-w-3xl mx-auto text-white prose-li:marker:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white mt-12">
        {parse(DOMPurify.sanitize(post?.content || ""))}{" "}
      </article>

      {post?.affiliateProducts ? (
        <section className="mt-12">
          <hr className="h-[2px] my-8 bg-gray-200 border-0 w-full lg:w-8/12 mx-auto dark:bg-gray-700" />
          <h3 className="lg:w-7/12 mx-auto font-semibold text-2xl text-center">
            Affiliate links
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-full lg:w-1/2 items-center mt-12">
            {post.affiliateProducts.map((product, i) => (
              <Link key={i} href={product.productLink} passHref>
                <div className="mx-auto flex flex-row items-center cursor-pointer">
                  <Image
                    className="mx-auto rounded-lg object-cover h-[150px] w-[150px] lg:h-[150px] lg:w-[180px]"
                    src={product.imageLink}
                    alt={`Image of ${product.name}`}
                    width={150}
                    height={150}
                  />
                  <div className="pl-2">
                    <h3 className="text-left font-semibold w-full text-xl">
                      {product.name}
                    </h3>
                    <p className="text-lg text-left mt-3 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="flex justify-center mt-12">
          <p>No affiliate products available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Post;
