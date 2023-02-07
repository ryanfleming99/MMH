import React from 'react'
import styles from "../styles/WhatsIncluded.module.css"
import SubHeading from "../components/Typography/SubHeading"
import TransparentHeader from "../components/Typography/TransparentHeader"
import SignUp from "./SignUp"
import { motion } from "framer-motion"

const WhatsIncluded = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            whileInView: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <div className="bg-mainbg md:w-4/5 mx-auto mt-12 min-h-screen">
            <SubHeading title="Wellness resources for your mind and body" />
            <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-12 w-4/5 lg:w-1/3 mx-auto text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi non, quibusdam voluptatum excepturi commodi, hic architecto quos culpa molestias quasi nobis vel explicabo reiciendis repellat tenetur velit quis provident.</motion.p>

            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid gap-14 sm:grid-cols-1 md:grid-cols-2  justify-center mt-20 w-full lg:w-4/5 mx-auto text-gray-300  ">
                {/* Exercise */}
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} className="lg:order-1 sm:order-1">
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
                    Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe
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
                    Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

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
                    Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

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
                    Lorem4 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

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
                    Lorem5 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

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
                    Lorem6 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </motion.div>
            </motion.div>
            <SignUp />
        </div>
    )
}

export default WhatsIncluded