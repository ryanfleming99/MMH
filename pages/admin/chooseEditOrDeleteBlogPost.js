import React, { useEffect, useState, Fragment } from 'react'
import Head from "next/head"
import { firestore } from "../../lib/firebase/firebase"
import { doc, getDocs, collection } from "firebase/firestore"
import Link from "next/link"
import NavbarNew from "../../components/NavbarNew"
import { motion } from "framer-motion"
import { Dialog, Transition } from '@headlessui/react'
import { useRecoilState } from "recoil"
import { modalStatus } from "../../atoms/isModalOpen"
import DeletePostModal from "../../components/admin/DeletePostModal"


function EditOrDeleteBlogPost() {

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
    const [isModalOpen, setIsModalOpen] = useRecoilState(modalStatus)




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
                <title>Edit or delete blog post</title>
            </Head>
            <NavbarNew />
            <div className=" mx-auto max-w-4xl">
                <h1 className="mt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl ">Choose what to Edit or Delete</h1>
                <div className=" flex flex-wrap gap-3  text-white place-content-center justify-evenly mt-12">
                    {postCategories.map(category => {
                        return (
                            <button className=" flex-1  bg-white text-gray-800 font-semibold px-4 py-2 my-2" key={category.id} onClick={() => setFilterCategory(category.id)}>{category.name}</button>
                        )
                    })}
                </div>

                {/* Blog grid */}
                <motion.div layout className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-20 items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300">

                    {filtered.map(post => {
                        return (
                            <motion.div layout animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacitiy: 0 }}
                                key={post.id}>
                                <div
                                    className="relative" style={{ backgroundImage: `url${post.image}` }}>
                                    <Link href={`/posts/${post.id}`}>
                                        <img className="w-full h-52 mx-auto object-cover" src={post.thumbnailImage} />
                                        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
                                        <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{post.title}</h3>
                                    </Link>
                                    {/* <article className="prose mx-auto text-white">{parse(DOMPurify.sanitize(post.content))}</article> */}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 mb-8">
                                    <Link href={`/admin/editBlog/${post.id}`}>
                                        <button type="submit" className="mx-auto w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white ">
                                            Edit
                                        </button>
                                    </Link>
                                    <DeletePostModal postId={post.id} />
                                </div>
                            </motion.div>
                        )
                    })}

                </motion.div>
            </div>

        </div>
    )
}

export default EditOrDeleteBlogPost