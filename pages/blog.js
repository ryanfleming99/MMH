import React, { useEffect, useState } from 'react'
import HeroHeading from "../components/Typography/HeroHeading"
import Head from "next/head"
import { firestore } from "../lib/firebase/firebase"
import { doc, getDocs, collection } from "firebase/firestore"
import { isAssertEntry } from "typescript"
import { querystring } from "@firebase/util"
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import Link from "next/link"
import NavbarNew from "../components/NavbarNew"
import Navbar from "../components/Navbar"



function blog() {

    const postCategories = [
        { id: 0, name: "All" },
        { id: 1, name: "Health" },
        { id: 2, name: "Exercise" },
        { id: 3, name: "Work" },
        { id: 4, name: "Dating" },
        { id: 5, name: "Social" },
    ]

    const [posts, setPosts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [filterCategory, setFilterCategory] = useState(0)


    const getPosts = async () => {
        const querySnapshot = await getDocs(collection(firestore, "posts"))
        const postsResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setPosts(postsResult)
        setFiltered(postsResult)
        console.log(postsResult)
    }



    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        console.log(posts, "original posts")
        console.log(filterCategory)
        setFiltered(posts)
        if (filterCategory == 0) {
            setFiltered(posts)
        } else {
            const filteredPosts = posts.filter(post => post.category.id == filterCategory)
            console.log(filtered, "filtered posts")
            setFiltered(filteredPosts)
        }

    }, [filterCategory])

    return (
        <div className="mx-auto max-w-screen p-3 bg-mainbg text-white min-h-screen">
            <Head>
                <title>Blog</title>
            </Head>
            <NavbarNew />
            <div className=" mx-auto max-w-4xl">
                <h1 className="mt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl ">Blog</h1>
                <p className="text-gray-300 text-center pt-12 mx-auto w-4/5 lg:w-3/5">Lorem ipsum dolor sit amet consectetur. Senectus quam viverra orci sed sed turpis in cursus. A tempor faucibus arcu lacus porta auctor tempus id purus.</p>
                <div className=" flex flex-wrap gap-3  text-white place-content-center justify-evenly mt-12">
                    {postCategories.map(category => {
                        return (
                            <button className="rounded-full flex-1  bg-white text-gray-800 font-semibold px-4 py-2 my-2" key={category.id} onClick={() => setFilterCategory(category.id)}>{category.name}</button>
                        )
                    })}
                </div>

                {/* Blog grid */}
                <div className="grid gap-14 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-20 items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300">

                    {filtered.map(post => {
                        return (
                            <div className="relative " key={post.id} style={{ backgroundImage: `url${post.image}` }}>
                                <Link href={`/posts/${post.id}`}>
                                    <img className="w-full h-52 mx-auto object-cover" src={post.thumbnailImage} />
                                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                                    <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{post.title}</h3>

                                </Link>
                                {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
                            </div>
                        )
                    })}


                </div>
            </div>
        </div >
    )
}

export default blog