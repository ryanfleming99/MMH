import React from 'react'
import Container from "../../../components/contentDashboard/ContentContainer"
import { getDocs, query, collection, where } from "firebase/firestore"
import { firestore } from "../../../lib/firebase/firebase"
import safeJsonStringify from "safe-json-stringify"

export async function getServerSideProps(context) {
    console.log(context.resolvedUrl)

    const urlString = context.resolvedUrl
    const lastPartOfUrl = urlString.slice(9)
    const firstLetter = lastPartOfUrl.charAt(0)
    const categoryName = firstLetter.toUpperCase() + lastPartOfUrl.slice(1)




    const querySnapshot = await getDocs(query(collection(firestore, "content"), where("category.name", "==", categoryName)))
    const postsResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    console.log(postsResult)

    return {
        props: {
            posts: JSON.parse(safeJsonStringify(postsResult))
        },
    }


}

const index = ({ pageProps: { posts } }) => {
    console.log("POSTS", posts)
    return (
        <div>
            <Container category="Work" posts={posts} />
        </div>
    )
}

export default index