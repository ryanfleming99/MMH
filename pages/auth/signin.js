import { useState } from 'react'
import { getProviders, signIn as signIntoProvider } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import Navbar from "../../components/Navbar"

// export async function getProvidersList() {
//     const providers = await getProviders()
//     console.log(providers)
//     return providers

// }

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

const signin = ({ providers }) => {



    return (
        <div className="">
            <div className=" flex h-screen ">
                {Object.values(providers).map((provider) => (
                    <div className="flex items-center m-auto" key={provider.id}>
                        <button className=" flex items-center border-2 w-full h-24 px-4 py-2 item-center border-gray-500 rounded-lg" onClick={() => signIntoProvider(provider.id, { callbackUrl: "/" })}>
                            <FcGoogle className="h-10 w-10" />Continue with {provider.name}
                        </button>
                    </div>
                ))}
            </div>


        </div>
    )
}


export default signin

