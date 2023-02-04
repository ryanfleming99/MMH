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



function blog() {

    const postCategories = [
        { id: 1, name: "Health" },
        { id: 2, name: "Exercise" },
        { id: 3, name: "Work" },
        { id: 4, name: "Dating" },
        { id: 5, name: "Social" },
    ]

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const querySnapshot = await getDocs(collection(firestore, "posts"))
        const postsResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setPosts(postsResult)
        console.log(postsResult)
    }

    const handlePostFilter = (category, posts) => {
        const filteredPosts = posts?.filter((post) => {
            post.category.name == category.name
        })


        console.log(filteredPosts)
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="mx-auto max-w-screen p-3 bg-gray-800 min-h-screen">
            <Head>
                <title>Blog</title>
            </Head>
            <div className=" mx-auto max-w-4xl">
                <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl">Blog</h1>
                <p className="text-gray-300 pt-12 mx-auto w-3/5">Lorem ipsum dolor sit amet consectetur. Senectus quam viverra orci sed sed turpis in cursus. A tempor faucibus arcu lacus porta auctor tempus id purus.</p>
                <div className=" flex text-white justify-evenly mt-12">
                    {postCategories.map(category => {
                        return (
                            <button className="rounded-full border border-white px-4 py-2" key={category.id} onClick={(category) => handlePostFilter(category, posts)}> {category.name}</button>
                        )
                    })}
                </div>

                {/* Blog grid */}
                <div className="grid gap-14 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-20 items-center  mx-auto w-3/5 sm:w-full text-gray-300">

                    {posts?.map(post => {
                        return (
                            <div key={post.id} className="" style={{ backgroundImage: `url${post.image}` }}>
                                <Link href={`/posts/${post.id}`}>
                                    <img className="w-72 h-52 mx-auto object-cover" src={post.thumbnailImage} />
                                    <h3 className="text-white text-center">{post.title}</h3>

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