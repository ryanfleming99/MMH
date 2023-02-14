import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc"
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, firestore } from "../lib/firebase/firebase"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { setDoc, doc } from "firebase/firestore"


const login = () => {


    const [signInWithGoogle, user, loading, error] = useAuthState(auth)
    const router = useRouter()
    const provider = new GoogleAuthProvider();


    // const handleGoogleSignIn = async () => {
    //     await signInWithGoogle()
    //     router.push("/")
    // }

    // const createUserDoc = async (user) => {
    //     const userDocRef = doc(firestore, "users", user.uid)
    //     await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
    // }

    // useEffect(() => {
    //     if (userCred) {
    //         createUserDoc(userCred.user)
    //     }
    // }, [userCred])
    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="flex h-screen">
            <div className="flex items-center m-auto" >
                <button className=" flex items-center border-2 w-full h-24 px-4 py-2 item-center border-gray-500 rounded-lg" onClick={GoogleLogin} >
                    <FcGoogle className="h-10 w-10" />Continue with Google
                </button>
            </div>

        </div>
    )
}

export default login