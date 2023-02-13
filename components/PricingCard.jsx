import { collection, setDoc, getDocs, addDoc, doc, arrayUnion, onSnapshot, limit, orderBy } from "firebase/firestore"
import { type } from "os"
import React, { useState } from 'react'
import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { auth, firestore } from "../lib/firebase/firebase"
import { loadStripe } from "@stripe/stripe-js"


const PricingCard = ({ productData, name, price, url, features }) => {

    const [user] = useAuthState(auth)
    const [sessionDoc, setSessionDoc] = useState(null)

    const loadCheckout = async (priceId) => {
        const userSnap = await addDoc(collection(firestore, "customers", user.uid, "checkout_sessions"), {

            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        })



        const sessionFetch = await getDocs(collection(firestore, "customers", user.uid, "checkout_sessions"), orderBy("created", "desc"), limit(1))
        const sessionResult = sessionFetch.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setSessionDoc(sessionResult)

        if (sessionDoc) {
            console.log("SESSION", sessionDoc[0].sessionId)

        }




        if (sessionDoc) {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB)
            const sessionId = sessionDoc[0].sessionId
            stripe.redirectToCheckout({ sessionId })
        }



    }

    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div
                className="border-primary bg-gray-800 shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-primary mb-4 block text-lg font-semibold">
                    {name}
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold">
                    ${price / 100}
                    <span className="text-body-color text-base font-medium"> / year </span>
                </h2>
                <p
                    className="text-body-color mb-8 border- border-[#F2F2F2] pb-8 text-base">
                    Perfect for using in a personal website or a client project.
                </p>
                <div className="mb-7">
                    {/* {features.map(feature => <p key={Math.random(10000)} className="text-body-color mb-1 text-base leading-loose"> {feature}</p>
                    )} */}
                    {features}

                </div>
                <button
                    onClick={() => loadCheckout(productData.prices.priceId)}
                    className="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white">
                    Choose {name}
                </button>

            </div>
        </div >
    )
}

export default PricingCard