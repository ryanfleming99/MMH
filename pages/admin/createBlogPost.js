import React, { useEffect, useState } from 'react';
import Head from "next/head"
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid';
import { firestore, auth } from "../../lib/firebase/firebase"
import { getDoc, doc, setDoc, serverTimestamp, runTransaction } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { Listbox } from '@headlessui/react'
import CategorySelect from "../../components/admin/CategorySelect"
import { useRecoilValue } from "recoil"
import { blogCat } from "../../atoms/blogCategory";
import NavbarNew from "../../components/NavbarNew";

const RichTextEditor = dynamic(() => import("@mantine/rte"), { ssr: false, loading: () => "Loading" });



const CreateBlogPost = () => {

    const blogCategories = [
        { id: 1, name: 'Health', unavailable: false },
        { id: 2, name: 'Exercise', unavailable: false },
        { id: 3, name: 'Work', unavailable: false },
        { id: 4, name: 'Dating', unavailable: false },
        { id: 5, name: 'Social', unavailable: false },
    ]


    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const selectedCategory = useRecoilValue(blogCat)



    useEffect(() => {
        console.log(content)

    }, [content, selectedCategory])

    const onSelectImage = (event) => {

        const reader = new FileReader()

        if (event.target.files?.[0]) {
            reader.readAsDataURL(event.target.files[0])
        }
        reader.onload = (readerEvent) => {
            if (readerEvent.target?.result) {
                setImage(readerEvent.target.result)
            }
        }
    }

    const handleCreatePost = async () => {

        const postRef = doc(firestore, "posts", uuidv4())
        const postDoc = await getDoc(postRef)

        await setDoc(postRef, {
            creator: user.uid,
            thumbnailImage: image,
            title: title,
            content: content,
            category: selectedCategory,
            createdAt: serverTimestamp(),
        })

        setTitle("")
        setContent("")
        setImage("")
    }

    return (
        <div className=" min-w-screen min-h-screen bg-mainbg">
            <Head>
                <title>Create Blog Post</title>
            </Head>
            <NavbarNew />
            <div className=" max-w-5xl mx-auto ">
                <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl mt-12 mb-12">Create Blog Post</h1>

                {/* Image input */}
                <label className="block text-white text-2xl font-bold md:text-left  md:mb-0 pr-4" htmlFor="inline-full-name">
                    Thumbnail Image upload
                </label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="file" onChange={e => onSelectImage(e)} />
                {image && <img src={image} className="w-20 h-20" />}

                {/* Title input */}
                <div className="mb-4 text-2xl">
                    <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Title
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <label className="block text-white text-2xl font-bold md:text-left mb-1 md:mb-0 pr-4">
                    Content
                </label>

                <RichTextEditor value={content} onChange={setContent} id="rte" />

                {/* Category list */}
                <CategorySelect categories={blogCategories} />

                <button className=" w-64  bg-transparent mt-12 text-white py-2 px-4 border border-white rounded" onClick={() => handleCreatePost()}>
                    Create post
                </button>

            </div>
        </div>
    )
}

export default CreateBlogPost