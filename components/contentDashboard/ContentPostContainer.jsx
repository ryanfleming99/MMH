import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { getDoc, doc, collection, query } from "firebase/firestore"
import { firestore } from "../../lib/firebase/firebase"
import parse from 'html-react-parser';
import DOMPurify from "isomorphic-dompurify";
import { v4 as uuidv4 } from 'uuid';
import Spinner from "../Spinner"
const index = ({ id }) => {


    const [post, setPost] = useState([])

    const getPost = async () => {

        const querySnapshot = await getDoc(query(doc(firestore, "content", id)))
        // const postResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        // setPost(postResult)
        console.log(querySnapshot.data())
        setPost(querySnapshot.data())
    }

    useEffect(() => {
        if (firestore && id) {
            getPost()
        }

    }, [id, firestore])

    return (
        <div className=" mx-auto max-w-screen p-3 lg:px bg-gray-800 min-h-screen ">
            {/* <h1 className="text-white text-center text-2xl mt-12"> {post.title}</h1> */}
            <article className="prose mx-auto text-white prose-li:marker:text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white mt-12">{parse(DOMPurify.sanitize(post.content))}</article>

            {/* -------------------Affiliate Links------------------------ */}
            {!post.affiliateProducts && (<div className="flex w-screen h-screen justify-center items-center"><Spinner /></div>)}
            {post?.affiliateProducts && (
                <div>
                    <hr className="h-[2px] my-8 bg-gray-200 border-0 w-full lg:w-8/12 mx-auto dark:bg-gray-700" />
                    <h3 className="lg:w-8/12 mx-auto font-semibold text-2xl text-center">Affiliate links</h3>
                </div>)}
            <div className="grid grid-cols-2 mx-auto w-full lg:w-1/2 items-center mt-12">
                {post.affiliateProducts?.map(product => (
                    <div key={uuidv4()} className="mx-auto">
                        <Link href={product.productLink}>
                            <h3 className="text-center font-semibold text-xl">{product.name}</h3>
                            <img className="mx-auto rounded-lg h-[150px] w-[150px] lg:h-[250px] lg:w-[250px]" src={product.imageLink} alt="" />
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default index