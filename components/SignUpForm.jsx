import React, { useState } from 'react'
import SubHeading from "./Typography/SubHeading"

const SignUpForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // const toolsList = [
    //     "Daily schedule planner (free)",
    //     "Weekly updates on events with free stuff, mental health, sexual health, drug advice and support.",
    //     "ACCESS to Whatsapp and Messenger groups to chat with your squad",
    //     "T-shirt to support the cause",
    //     "Smart Eating plan (best meals for cheap, easy, fast) for people who work a lot or long hours.",
    //     "Smart Finance plan, quick maths to help with your spending. Saving, interest etc.",
    //     "Dating and relationship advice from trained professionals.",
    //     "Workshops with certificates and free courses for qualifying brothers.",
    //     "Exclusive deals to online university courses from Harvard, Oxford etc.",
    //     "Make amazing friends and brothers, get mental health support from each other and support a good cause.",
    //     "Paid memberships have exclusive access to another chat where business opportunities come up and access to free courses are given priority. Exclusive meet-ups and advice 1 to 1’s on the gold membership. Gift upon joining after 3 months ( - - - -- ). Free elite t-shirt and stickers. Founder of the company."
    // ]



    return (
        <div>
            <div>
                <div className="lg:w-2/3 mx-auto">
                    <SubHeading title="BY SIGNING UP, YOU HELP US, HELP PEOPLE." />
                </div>
                <form className="lg:w-2/3 mt-10  mx-auto " >

                    {/* Name Input */}
                    < label htmlFor="name" className="block text-sm font-medium text-gray-200" > Name</label >
                    <input type="text" name="price" id="name" value={name} className="leading-8 py-3 mt-1 bg-gray-600
             block w-full  rounded-sm border-gray-300 pl-7 pr-12 focus:border-indigo-500
              focus:ring-indigo-500 sm:text-sm" onChange={e => setName(e.target.value)} placeholder="John Doe" />

                    {/* Email Input */}
                    <label htmlFor="price" className="block text-sm font-medium text-gray-200 mt-2">Email</label>

                    <input type="email" name="email" id="email" value={email} className="leading-8 py-3 mt-1 bg-gray-600
             block w-full  rounded-sm border-gray-300 pl-7 pr-12 focus:border-indigo-500
              focus:ring-indigo-500 sm:text-sm" onChange={e => setEmail(e.target.value)} placeholder="JohnDoe@mail.com" />

                    {/* Message Input */}
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mt-2">Message</label>

                    <textarea type="text" name="message" id="message" value={message} className="leading-8 py-3 mt-1 bg-gray-600
             block w-full  rounded-sm border-gray-300 pl-7 pr-12 focus:border-indigo-500
              focus:ring-indigo-500 sm:text-sm" onChange={e => setMessage(e.target.value)} placeholder="Message here..." />
                    {/* Submit Button */}
                    <div className="flex mt-4">
                        <button type="submit" className="mx-auto lg:w-1/2 w-3/4 h-12 bg-gray-300 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded">
                            Send
                        </button>
                    </div>
                </form >

            </div>


        </div >
    )
}

export default SignUpForm