import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import NavbarNew from "../../components/NavbarNew"
import Link from "next/link"
import { firestore, auth } from "../../lib/firebase/firebase"
import { doc, getDocs, collection, where, query } from "firebase/firestore"


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
                <div>
                    <h1 className="pt-12 text-center text-white font-bold text-5xl lg:text-6xl md:text-5xl "> {category} Articles</h1>
                    <p className="text-gray-300 text-center pt-12 mx-auto w-4/5 lg:w-3/5">Lorem ipsum dolor sit amet consectetur. Senectus quam viverra orci sed sed turpis in cursus. A tempor faucibus arcu lacus porta auctor tempus id purus.</p>
                </div>


                <motion.div layout className="grid gap-4 lg:grid-cols-4  sm:grid-cols-1 mt-12 justify-center items-center  mx-auto w-10/12 lg:w-4/5 sm:w-full text-gray-300">
                    {posts?.map(post => {
                        return (
                            <motion.div layout animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacitiy: 0 }}
                                className="relative" key={post.id} style={{ backgroundImage: `url${post.image}` }}>
                                <Link href={`/content/${category.toLowerCase()}/${post.id}`}>
                                    <img className="w-full h-52 mx-auto object-cover" src={post.thumbnailImage} />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
                                    <h3 className="text-white text-center font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{post.title}</h3>
                                </Link>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default contentPost