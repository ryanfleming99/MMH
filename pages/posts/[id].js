import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDoc, doc, collection, query } from "firebase/firestore"
import { firestore } from "../../lib/firebase/firebase"
import parse from 'html-react-parser';
import DOMPurify from "isomorphic-dompurify";

const index = () => {
  const router = useRouter()
  const { id } = router.query

  const [post, setPost] = useState([])

  const getPost = async () => {
    const querySnapshot = await getDoc(doc(firestore, "posts", id))
    // const postResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    // setPost(postResult)
    console.log(querySnapshot.data())
    setPost(querySnapshot.data())
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className=" mx-auto max-w-screen p-3 bg-gray-800 min-h-screen ">
      <h1 className="text-white text-center text-2xl mt-12"> {post.title}</h1>
      <article className="prose mx-auto text-white mt-12">{parse(DOMPurify.sanitize(post.content))}</article>
      <div>
        <button className="py-2 px-4 rounded-full bg-orange-400 mx-auto mt-4">{post.category?.name}</button>
      </div>



    </div>
  )
}

export default index