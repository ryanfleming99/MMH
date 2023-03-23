import React from 'react'
import { motion } from "framer-motion"
import TheProcessStep from "../components/TheProcessStep"

const TheProcess = () => {

    const processSteps = [
        { id: 1, name: "Identify", description: "Identify an area for improvement" },
        { id: 2, name: "Goals", description: "Set goals and timeline for their completion" },
        { id: 3, name: "Discipline", description: "Keep yourself accountable using our templates and community" },
        { id: 4, name: "Review", description: "Review once the goal or deadline is reached" }
    ]

    const stepColours = [
        "bg-emerald-700",
        "bg-cyan-600",
        "bg-purple-600",
        "bg-red-600"
    ]

    const fillColours = [
        "stroke-emerald-700",
        "stroke-cyan-600",
        "stroke-purple-600",
        "stroke-red-600"
    ]

    return (
        <div className="xl:mt-12 mb-36">
            <motion.h3 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className=" 2xl:mt-24 text-center h-full font-bold text-white text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl ">
                THE PROCESS
            </motion.h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, staggerChildren: 2, delayChildren: 0, staggerDirection: 1 }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

                {processSteps.map((step, i) => (

                    <TheProcessStep key={i + 1} id={i + 1} name={step.name} description={step.description} bgColour={stepColours[i]} fillColour={fillColours[i]} />
                ))}
            </motion.div>


        </div>
    )
}

export default TheProcess