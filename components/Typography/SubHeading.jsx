import React from 'react'
import { motion } from "framer-motion"
const SubHeading = ({ title }) => {
    return (
        <motion.h3 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 text-center font-bold text-white text-3xl lg:text-4xl ">
            {title}
        </motion.h3>
    )
}

export default SubHeading