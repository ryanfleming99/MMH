import React from 'react'
import { useState } from "react"
import Heading from "../components/Typography/SubHeading"
import { Tab } from '@headlessui/react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/router"
import Spinner from "../components/Spinner"
import { motion } from "framer-motion"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LoginNew() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [registerError, setRegisterError] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [loadingSpinner, setLoadingSpinner] = useState(false)

    let categories = ["Login", "Register"]
    const inputStyles = "leading-8 py-3 mt-1 text-white bg-gray-600 block w-full rounded-sm border-gray-400 pl-7 pr-12 focus:border-black-500 focus:ring-black-500 sm:text-sm"
    const router = useRouter()

    const handleRegister = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        ).then((authUser) => {
            console.log(authUser)
            setRegisterEmail("")
            setRegisterPassword("")
        }).catch(error => {
            setRegisterError(error)
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(authUser => {
            console.log(authUser)
            setEmail("")
            setPassword("")
            router.push("/")
        }).catch(error => {
            setLoginError(error)
        })
    }

    return (
        <div className="w-screen h-screen bg-mainbg">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }} className="w-full max-w-md mx-auto px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {categories.map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">

                        {/* Login Panel */}
                        <Tab.Panel
                            key={1}
                            className={classNames(
                                'rounded-xl flex flex-col bg-mainbg p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <form onSubmit={handleSignIn} className="flex flex-col justify-center">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-200"> Email</label >
                                <input type="email" name="email" id="email" value={email} className={inputStyles} onChange={e => setEmail(e.target.value)} />

                                <label htmlFor="name" className="block mt-2 text-lg font-medium text-gray-200"> Password</label >
                                <input type="password" name="password" id="password" value={password} className={inputStyles} onChange={e => setPassword(e.target.value)} />

                                {loginError ? <p className="mt-3 text-red-500">Wrong combination of user and password</p> : null}
                                <button type="submit" disabled={loadingSpinner} onClick={handleSignIn} className="mx-auto mt-4 w-2/5 h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-gray-400 hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-black disabled:bg-gray-500 disabled:hover:border-none disabled:hover:cursor-not-allowed  ">
                                    {loadingSpinner ? (<div className="flex justify-center"><Spinner /></div>) : "Login"}
                                </button>
                            </form>


                        </Tab.Panel>

                        {/* Register Panel */}
                        <Tab.Panel
                            key={2}
                            className={classNames(
                                'rounded-xl flex flex-col bg-mainbg p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <form onSubmit={handleRegister} className="flex flex-col justify-center">

                                <label htmlFor="name" className="block text-lg font-medium text-gray-200"> Email</label >
                                <input type="email" name="email" id="email" value={registerEmail} className={inputStyles} onChange={e => setRegisterEmail(e.target.value)} />

                                <label htmlFor="password" className="block mt-2 text-lg font-medium text-gray-200"> Password</label >
                                <input type="password" name="password" id="password" value={registerPassword} className={inputStyles} onChange={e => setRegisterPassword(e.target.value)} />

                                <label htmlFor="passwordConfirm" className="block mt-2 text-lg font-medium text-gray-200"> Confirm password</label >
                                <input type="password" name="passwordConfirm" id="passwordConfirm" value={confirmPassword} className={inputStyles} onChange={e => setConfirmPassword(e.target.value)} />

                                {registerError ? <p className="mt-3 text-red-500">{registerError.message}</p> : null}
                                <button type="submit" onClick={handleRegister} disabled={loadingSpinner} className=" mx-auto mt-4 w-2/5 h-12 bg-btngray text-black font-bold text-lg py-2 px-4 rounded hover:bg-gray-400 hover:border-2 hover:border-white transition ease-in-out delay-50 hover:text-black disabled:bg-gray-500 disabled:hover:border-none disabled:hover:cursor-not-allowed ">
                                    {loadingSpinner ? (<div className="flex justify-center"><Spinner /></div>) : "Register"}
                                </button>
                            </form>

                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </motion.div>
        </div>

    )
}
