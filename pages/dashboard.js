import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase/firebase"



const dashboard = () => {
    const [user, loading, error] = useAuthState(auth)



    return (
        <div>dashboard</div>
    )
}

export default dashboard