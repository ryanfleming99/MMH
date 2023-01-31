import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc"
import { getAuth, signInWithPopUp, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../lib/firebase/firebase"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"

const login = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const router = useRouter()

    const handleGoogleSignIn = async () => {
        await signInWithGoogle()
        router.push("/")

    }

    return (
        <div className="flex h-screen">
            <div className="flex items-center m-auto" >
                <button className=" flex items-center border-2 w-full h-24 px-4 py-2 item-center border-gray-500 rounded-lg" onClick={() => handleGoogleSignIn()} >
                    <FcGoogle className="h-10 w-10" />Continue with Google
                </button>
            </div>

        </div>
    )
}

export default login