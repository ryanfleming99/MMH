import React, { useEffect, useState } from 'react';
import Head from "next/head"
import dynamic from 'next/dynamic'
import { v4 as uuidv4 } from 'uuid';
import { firestore, auth } from "../../lib/firebase/firebase"
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import CategorySelect from "../../components/admin/CategorySelect"
import ContentTierSelect from "../../components/admin/ContentTierSelect"
import { useRecoilValue } from "recoil"
import { blogCat } from "../../atoms/blogCategory";
import { contentTier } from "../../atoms/contentTier"
import NavbarNew from "../../components/NavbarNew";

const RichTextEditor = dynamic(() => import("@mantine/rte"), { ssr: false, loading: () => "Loading" });



const CreateContentEntry = () => {

    const contentTiers = [
        { id: 1, name: 'Bronze', unavailable: false },
        { id: 2, name: 'Silver', unavailable: false },
        { id: 3, name: 'Gold', unavailable: false },
    ]

    const blogCategories = [
        { id: 1, name: 'Health', unavailable: false },
        { id: 2, name: 'Exercise', unavailable: false },
        { id: 3, name: 'Work', unavailable: false },
        { id: 4, name: 'Dating', unavailable: false },
        { id: 5, name: 'Social', unavailable: false },
    ]


    const [user, error] = useAuthState(auth);
    console.log(user)

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const selectedCategory = useRecoilValue(blogCat)
    const selectedTier = useRecoilValue(contentTier)
    const [affProducts, setAffProducts] = useState([
        { name: "", productLink: "", imageLink: "" }
    ])



    useEffect(() => {
        console.log(content)

    }, [content, selectedCategory])

    useEffect(() => {
    }, [affProducts])

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

    const handleAddProduct = (e) => {
        e.preventDefault()
        setAffProducts([...affProducts, { name: "", productLink: "", imageLink: "" }])
    }

    const handleRemoveProduct = (id) => {
        let newProductsData = [...affProducts]
        newProductsData.splice(id, 1)
        setAffProducts(newProductsData)
    }

    const handleFormChange = (event, id) => {
        const newProductsData = [...affProducts]
        newProductsData[id][event.target.name] = event.target.value
        setAffProducts(newProductsData)
    }

    const handleCreateContentEntry = async (e) => {
        e.preventDefault()
        setLoading(true)
        const postRef = doc(firestore, "content", uuidv4())
        // const postDoc = await getDoc(postRef)

        await setDoc(postRef, {
            creator: user.uid,
            thumbnailImage: image,
            title: title,
            content: content,
            category: selectedCategory.name,
            tier: selectedTier.name,
            affiliateProducts: affProducts,
            createdAt: serverTimestamp(),
        })

        setTitle("")
        setContent("")
        setImage("")
        setAffProducts([])
        setLoading(false)
    }

    return (
        <div className=" grid  min-h-screen pb-4 bg-mainbg justify-center z-0">
            <Head>
                <title>Create Content Entry</title>
            </Head>
            <NavbarNew />
            <div className=" max-w-5xl mx-auto ">
                <h1 className="text-center text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl mt-12 mb-12">Create Content Entry</h1>

                {/* Image input */}
                <label className="block text-white text-2xl font-bold md:text-left  md:mb-0 pr-4" htmlFor="inline-full-name">
                    Thumbnail Image upload
                </label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="file" onChange={e => onSelectImage(e)} />
                {image && <img src={image} className="w-20 h-20" />}

                {/* Title input */}
                <div className="mb-4 text-2xl">
                    <label className="block text-white font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Title
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <label className="block text-white text-2xl font-bold md:text-left mb-1 md:mb-0 pr-4">
                    Content
                </label>

                <RichTextEditor value={content} onChange={setContent} id="rte" />

                {/* Category list */}
                <CategorySelect categories={blogCategories} />
                <ContentTierSelect tiers={contentTiers} />
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                {/* ---------------------------Affiliate Products------------------------ */}
                <h2 className="block text-white text-3xl font-bold md:text-left mb-1 md:mb-0 pr-4">Product Links</h2>

                {affProducts.map((product, id) => (
                    <div key={id} className=" mt-4 text-2xl border-2 border-gray-400 rounded-lg p-4">

                        <label className="block text-white font-bold md:text-left mb-1 pr-4" htmlFor="inline-full-name">
                            Product Name
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 mb-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            name="name"
                            type="text"
                            value={product.name}
                            onChange={(event) => handleFormChange(event, id)} />

                        <label className="block text-white font-bold md:text-left mb-1 pr-4" htmlFor="inline-full-name">
                            Product Link
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 mb-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
                            name="productLink"
                            onChange={(event) => handleFormChange(event, id)} />

                        <label className="block text-white font-bold md:text-left mb-1 pr-4" htmlFor="inline-full-name">
                            Image Link
                        </label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
                            name="imageLink"
                            onChange={(event) => handleFormChange(event, id)} />
                        <button type="button" className=" block w-62  bg-transparent mt-4 text-white text-lg py-1 px-4 border border-white rounded" onClick={() => handleRemoveProduct(id)}>
                            Remove product
                        </button>

                    </div>
                ))}
                <button type="button" className=" block w-48  bg-transparent mt-4 text-white py-2 px-4 border border-white rounded" onClick={(e) => handleAddProduct(e)}>
                    Add another product
                </button>

                <button className=" w-64 bg-transparent mt-12 text-white py-2 px-4 border border-white rounded" onClick={(e) => handleCreateContentEntry(e)}>
                    {loading ? "Loading" : "Create Entry"}
                </button>

            </div>
        </div>
    )
}

export default CreateContentEntry