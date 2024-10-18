import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { firestore, auth } from "../../../lib/firebase/firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import CategorySelect from "../../../components/admin/CategorySelect";
import ContentTierSelect from "../../../components/admin/ContentTierSelect";
import { useRecoilState, useRecoilValue } from "recoil";
import { blogCat } from "../../../atoms/blogCategory";
import { contentTier } from "../../../atoms/contentTier";
import NavbarNew from "../../../components/NavbarNew";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => "Loading"
});

const EditContentEntry = () => {
  const router = useRouter();
  const { id } = router.query;

  const contentTiers = [
    { id: 1, name: "Bronze", unavailable: false },
    { id: 2, name: "Silver", unavailable: false },
    { id: 3, name: "Gold", unavailable: false }
  ];

  const blogCategories = [
    { id: 1, name: "Health", unavailable: false },
    { id: 2, name: "Exercise", unavailable: false },
    { id: 3, name: "Work", unavailable: false },
    { id: 4, name: "Dating", unavailable: false },
    { id: 5, name: "Social", unavailable: false }
  ];

  const [user, error] = useAuthState(auth);

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useRecoilState(blogCat);
  const selectedTier = useRecoilValue(contentTier);
  const [affProducts, setAffProducts] = useState([
    { name: "", description: "", productLink: "", imageLink: "" }
  ]);

  // Memoize the getPost function to avoid unnecessary re-renders
  const getPost = useCallback(async () => {
    const querySnapshot = await getDoc(doc(firestore, "content", id));

    setPost(querySnapshot.data());
    setTitle(querySnapshot?.data().title);
    setContent(querySnapshot?.data().content);
    setImage(querySnapshot?.data().thumbnailImage);
    setSelectedCategory(querySnapshot.data().category);
    setAffProducts(querySnapshot.data().affiliateProducts);
    console.log("SELECTED", selectedCategory);
  }, [id, setSelectedCategory, selectedCategory]);

  useEffect(() => {
    console.log(content);
    getPost(); // getPost is now stable
  }, [content, getPost]); // Add content and getPost as dependencies

  const onSelectImage = event => {
    const reader = new FileReader();

    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = readerEvent => {
      if (readerEvent.target?.result) {
        setImage(readerEvent.target.result);
      }
    };
  };

  const handleAddProduct = e => {
    e.preventDefault();
    setAffProducts([
      ...affProducts,
      { name: "", productLink: "", imageLink: "" }
    ]);
  };

  const handleRemoveProduct = id => {
    let newProductsData = [...affProducts];
    newProductsData.splice(id, 1);
    setAffProducts(newProductsData);
  };

  const handleFormChange = (event, id) => {
    const newProductsData = [...affProducts];
    newProductsData[id][event.target.name] = event.target.value;
    setAffProducts(newProductsData);
    console.log(affProducts);
  };

  const handleEditContentEntry = async e => {
    e.preventDefault();
    setLoading(true);
    const postRef = doc(firestore, "content", id);

    await updateDoc(postRef, {
      creator: user.uid,
      thumbnailImage: image,
      title: title,
      content: content,
      category: selectedCategory,
      tier: selectedTier.name,
      affiliateProducts: affProducts,
      createdAt: serverTimestamp()
    });

    setTitle("");
    setContent("");
    setImage("");
    setAffProducts([]);
    setLoading(false);
  };

  return (
    <div className="grid min-h-screen pb-4 bg-mainbg justify-center z-0">
      <Head>
        <title>Edit Content Entry</title>
      </Head>
      <NavbarNew />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl mt-12 mb-12">
          Edit Content Entry
        </h1>

        {/* Image input */}
        <label
          className="block text-white text-2xl font-bold md:text-left md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          Thumbnail Image upload
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="file"
          onChange={e => onSelectImage(e)}
        />
        {image && (
          <Image
            src={image}
            alt={`${post.title} image`}
            className="w-20 h-20"
          />
        )}

        {/* Title input */}
        <div className="mb-4 text-2xl">
          <label
            className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Title
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <label className="block text-white text-2xl font-bold md:text-left mb-1 md:mb-0 pr-4">
          Content
        </label>

        <RichTextEditor value={content} onChange={setContent} id="rte" />

        {/* Category list */}
        <CategorySelect categories={blogCategories} />
        <ContentTierSelect tiers={contentTiers} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Affiliate Products */}
        <h2 className="block text-white text-3xl font-bold md:text-left mb-1 md:mb-0 pr-4">
          Product Links
        </h2>

        {affProducts.map((product, id) => (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            key={id}
            className="mt-4 text-2xl border-2 border-gray-400 rounded-lg p-4"
          >
            {/* Product Name */}
            <label
              className="block text-white font-bold md:text-left mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Product Name
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 mb-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="name"
              type="text"
              value={product.name}
              onChange={event => handleFormChange(event, id)}
            />

            {/* Product Description */}
            <label
              className="block text-white font-bold md:text-left mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Product Description
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="description"
              value={product.description}
              onChange={event => handleFormChange(event, id)}
            />

            {/* Product Link */}
            <label
              className="block text-white font-bold md:text-left mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Product Link
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 mb-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="productLink"
              value={product.productLink}
              onChange={event => handleFormChange(event, id)}
            />

            {/* Image Link */}
            <label
              className="block text-white font-bold md:text-left mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Image Link
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="imageLink"
              value={product.imageLink}
              onChange={event => handleFormChange(event, id)}
            />

            <button
              type="button"
              className="block w-62 bg-transparent mt-4 text-white text-lg py-1 px-4 border border-white rounded"
              onClick={() => handleRemoveProduct(id)}
            >
              Remove product
            </button>
          </motion.div>
        ))}
        <button
          type="button"
          className="block w-48 bg-transparent mt-4 text-white py-2 px-4 border border-white rounded"
          onClick={e => handleAddProduct(e)}
        >
          Add another product
        </button>

        <button
          className="w-64 bg-transparent mt-12 text-white py-2 px-4 border border-white rounded"
          onClick={e => handleEditContentEntry(e)}
        >
          {loading ? "Loading" : "Update Entry"}
        </button>
      </div>
    </div>
  );
};

export default EditContentEntry;
