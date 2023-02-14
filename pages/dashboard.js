import React from 'react'
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase/firebase"


const [user] = useAuthState(auth)

if (!user) {
    const router = useRouter()
    router.push("/")
}

const dashboard = () => {
    return (
        <div>dashboard</div>
    )
}

export default dashboard