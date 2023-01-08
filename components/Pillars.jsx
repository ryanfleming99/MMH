import React from 'react'
import styles from "../styles/Pillars.module.css";
import SubHeading from "./Typography/SubHeading"



const Pillars = () => {

    const pillarList = [
        { heading: "Health", content: "Elite diet plans, fasting, sauna, cold plunge" },
        { heading: "Exercise", content: "5 plans from cage fighter to body builder" },
        { heading: "Work", content: "Optimize your time and make work, work for you" },
        { heading: "Relationship", content: "Find the one, or fix what you currently have" },
        { heading: "Socialising", content: "Make friends, family and become a leader" },
        { heading: "Mental", content: "Take back your mind and get what you want" },

    ]

    return (
        <div className={styles.container}>
            <div className="h-[75vh] flex justify-center align-center flex-col margin m-auto">
                <SubHeading title="Use the pillars we have created to help you take control." />
                <ul className="mt-14 border-l-2 text-gray-300 border-l-gray-400 pl-4">
                    {pillarList.map((item, index) => (
                        <li key={index} className="leading-10">
                            <span className="font-semibold text-lg">{item.heading}</span> -
                            <span> {item.content}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Pillars