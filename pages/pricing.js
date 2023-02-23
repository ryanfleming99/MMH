import { useEffect, useState } from "react"
import PricingCard from "../components/PricingCard"
import { doc, getDoc, getDocs, collection, where, query, ref } from "firebase/firestore"
import { firestore } from "../lib/firebase/firebase.js"
import { motion } from "framer-motion"
import Spinner from "../components/Spinner"
import Navbar from "../components/NavbarNew"

const pricing = () => {



    const [products, setProducts] = useState([])
    const [fetching, setFetching] = useState(false)


    const getProducts = async () => {
        const productsObj = {}

        const querySnapshot = await getDocs(collection(firestore, "products"))
        querySnapshot.docs.forEach(async doc => {
            productsObj[doc.id] = doc.data()

            const pricesSnap = await getDocs(collection(firestore, "products", doc.id, "prices"))
            pricesSnap.docs.forEach(price => {
                productsObj[doc.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                }
            })
            setProducts(productsObj)
        })

        console.log(productsObj)
    }

    useEffect(() => {
        setFetching(true)
        const fetchProducts = async () => {

            await getProducts()
            setFetching(false)
        }

        fetchProducts()
    }, [])


    return (
        <div className=" py-2 mx-auto bg-mainbg text-gray-200 min-h-screen">
            <Navbar />
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative z-20 overflow-hidden bg-mainbg pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="text-primary mb-2 block text-lg  font-semibold">
                                    Pricing Table
                                </span>
                                <h2
                                    className="text-dark mb-4 text-3xl font-bold sm:text-4xl  md:text-[40px]">
                                    Our Pricing Plan
                                </h2>
                                <p className="text-body-color text-base">
                                    There are many variations of passages of Lorem Ipsum available but
                                    the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap justify-center">
                        {/* {pricingTiers.map(tier => {
                            return (<PricingCard key={tier.name} name={tier.name} price={tier.price} url={tier.url} features={tier.features} />)
                        })} */}
                        {fetching && (<div className="flex justify-center"><Spinner /></div>)}
                        {Object.keys(products).length > 2 && !fetching && Object.entries(products).map(([id, data]) => {
                            // console.log("DATA", data.prices.priceData)
                            return (
                                <PricingCard
                                    productData={data}
                                    key={data.name}
                                    name={data.name}
                                    price={data.prices?.priceData?.unit_amount}
                                    url={""}
                                    features={data.description} />)

                        })}

                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default pricing