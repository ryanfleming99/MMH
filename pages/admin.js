import React from 'react'
import Heading from "../components/Typography/SubHeading"
import Link from "next/link"

const admin = () => {
  return (
    <div className=" w-full lg:w-3/5 mx-auto">
      <div className="mx-auto mt-12">
        <Heading title="Blog Posts" />
        <div className="grid grid-cols-2 gap-4">

          <Link href="/admin/createBlogPost">
            <button type="submit" className="mx-auto mt-8 w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white ">
              New Blog Post
            </button>
          </Link>

          <Link href="/admin/chooseEditOrDeleteBlogPost">
            <button type="submit" className="mx-auto mt-8 w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white ">
              Edit/Delete Blog Post
            </button>
          </Link>

        </div>
      </div>

      <div className="mx-auto mt-12">
        <Heading title="Paid Content" />
        <div className="grid grid-cols-2 gap-4">

          <Link href="admin/createContentEntry">
            <button type="submit" className="mx-auto mt-8 w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white ">
              New Content Entry
            </button>
          </Link>

          <button type="submit" className="mx-auto mt-8 w-full h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-mainbg hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-white ">
            Edit/Delete Content
          </button>
        </div>
      </div>
    </div>
  )
}

export default admin