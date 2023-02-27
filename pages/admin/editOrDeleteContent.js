import React, { useEffect, useState } from 'react'
import { useRecoilValue } from "recoil"
import { contentCatEdit } from "../../atoms/contentCategoryEdit"
import ContentCategoryEdit from "../../components/admin/ContentCategoryEdit"
import ContentContainerEdit from "../../components/admin/ContentContainerEdit"
import { getDocs, query, collection, where } from "firebase/firestore"
import { firestore } from "../../lib/firebase/firebase"
import Spinner from "../../components/Spinner"

const editOrDeleteContent = () => {

  const postCategories = [
    { id: 1, name: "Health", unavailable: false },
    { id: 2, name: "Exercise", unavailable: false },
    { id: 3, name: "Work", unavailable: false },
    { id: 4, name: "Dating", unavailable: false },
    { id: 5, name: "Social", unavailable: false },

  ]


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const selectedCategory = useRecoilValue(contentCatEdit)

  const fetchPosts = async () => {
    setLoading(true)
    const querySnapshot = await getDocs(query(collection(firestore, "content"), where("category.name", "==", selectedCategory.name)))
    const postsResult = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setLoading(false)
    setPosts(postsResult)
    console.log(posts)
  }

  useEffect(() => {
    if (selectedCategory.name != "Choose Category") {
      fetchPosts()
    }
    console.log(selectedCategory.name)
  }, [selectedCategory])

  return (
    <div className="w-full mx-auto bg-mainbg -mt-4 pt-4">
      <div className="mx-auto w-full lg:w-8/12 z-50 justify-center">
        <ContentCategoryEdit categories={postCategories} />
      </div>


      <div>
        <ContentContainerEdit category={selectedCategory.name} posts={posts} edit={true} />
      </div>
    </div>
  )
}

export default editOrDeleteContent