import { type } from "os"
import React from 'react'

const PricingCard = ({ name, price, url, features }) => {

    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div
                className="border-primary bg-gray-800 shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-primary mb-4 block text-lg font-semibold">
                    Personal
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold">
                    ${price}
                    <span className="text-body-color text-base font-medium"> / year </span>
                </h2>
                <p
                    className="text-body-color mb-8 border- border-[#F2F2F2] pb-8 text-base">
                    Perfect for using in a personal website or a client project.
                </p>
                <div className="mb-7">
                    {features.map(feature => <p key={Math.random(10000)} className="text-body-color mb-1 text-base leading-loose"> {feature}</p>
                    )}

                </div>
                <a
                    href={url}
                    className="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white">
                    Choose {name}
                </a>

            </div>
        </div >
    )
}

export default PricingCard