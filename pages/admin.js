import React, { useEffect, useState } from 'react';
import Head from "next/head"
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid';
import { firestore, auth } from "../lib/firebase/firebase"
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const RichTextEditor = dynamic(() => import("@mantine/rte"), { ssr: false, loading: () => "Loading" });




const admin = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(user)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    console.log(content)
  }, [content])

  const handleCreatePost = async () => {

    const postRef = doc(firestore, "posts", uuidv4())
    const postDoc = await getDoc(postRef)

    await setDoc(postRef, {
      creator: user.uid,
      title: title,
      content: content,
      createdAt: serverTimestamp(),
    })

    setTitle("")
    setContent("")
  }

  return (
    <div className=" grid min-w-screen min-h-screen bg-gray-800 justify-center">
      <Head>
        <title>Admin</title>
      </Head>
      <div className=" max-w-[80vw] justify-center items-center ">
        <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl mt-12 mb-12">Admin</h1>

        {/* Title input */}

        <div className="mb-12 text-2xl">
          <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Title
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={title} onChange={e => setTitle(e.target.value)} />

        </div>

        <label className="block text-white text-2xl font-bold md:text-left mb-1 md:mb-0 pr-4">
          Content
        </label>
        <RichTextEditor value={content} onChange={setContent} id="rte" />
        <button className=" w-64 mt-12 bg-transparent text-white py-2 px-4 border border-white rounded" onClick={() => handleCreatePost()}>
          Create post
        </button>
      </div>



    </div>
  )
}

export default admin