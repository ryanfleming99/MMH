import React from 'react'
import styles from "../styles/WhatsIncluded.module.css"
import SubHeading from "../components/Typography/SubHeading"
import TransparentHeader from "../components/Typography/TransparentHeader"
import SignUp from "./SignUp"
import { motion } from "framer-motion"

const WhatsIncluded = () => {



    return (
        <div className="bg-mainbg md:w-4/5 mx-auto mt-12 min-h-screen">
            <SubHeading title="Wellness resources for your mind and body" />
            <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-12 w-4/5 lg:w-1/3 mx-auto text-center text-white">

            </motion.p>

            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid gap-14 sm:grid-cols-1 md:grid-cols-2  justify-center mt-20 w-full lg:w-4/5 mx-auto text-gray-300  ">
                {/* Exercise */}
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="lg:order-1 sm:order-1">
                    <div className={styles.exercise}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Exercise" />
                        </div>
                    </div>
                </motion.div>


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-2 sm:order-2 my-auto lg:px-10 ">
                    Exercise plans tailored to your needs, whether you're just starting out, looking for more variety in your workouts,
                    or trying to master your discipline, we'll help you along the way.
                </motion.div>

                {/* Health */}


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-4 sm:order-3">
                    <div className={styles.health}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Health" />
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-3 sm:order-4 my-auto lg:px-10">
                    Our diet plans and meal recipes enable you to optimise for your nutritional needs and dietary preferences.  High carb, keto, veggie or vegan, we've got you covered.
                </motion.div>

                {/* Relationship */}
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-5 sm:order-5">
                    <div className={styles.relationship}>
                        <div className="flex text-center w-full mx-auto h-full">
                            <TransparentHeader text="Relationships" />
                        </div>
                    </div>
                </motion.div>


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-6 sm:order-6 my-auto lg:px-10">

                    Interpersonal connections can be tricky, especially when most of our time is spent interacting with people virtually.
                    We're here to give you the confidence you deserve so you no longer feel like an outsider.

                </motion.div>

                {/* Work */}


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-8 sm:order-7">
                    <div className={styles.work}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Work" />
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-7 sm:order-8 my-auto lg:px-10">
                    You can take your career to the next level with our guidance.
                    If you're getting your first job or progressing to a different position, we can help you get there.
                </motion.div>



                {/* Mental Health */}

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-9 sm:order-9">
                    <div className={styles.mentalHealth}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Mental Health" />
                        </div>
                    </div>
                </motion.div>


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-10 sm:order-10 my-auto lg:px-10">
                    Your mindset is the foundation of the identity you adopt, ultimately determining your life path.
                    We'll enable your to make the right choices through our easy to follow system, you no longer have to face every challenge by yourself.
                </motion.div>

                {/* Socialising */}


                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-12 sm:order-11">
                    <div className={styles.socialising}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Socialising" />
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className=" lg:order-11 sm:order-12 my-auto lg:px-10">
                    Our community consists of like minded men from all walks of life overcome adversities by supporting each other.
                    Join us and find out for yourself.
                </motion.div>
            </motion.div>
            <SignUp />
        </div>
    )
}

export default WhatsIncluded