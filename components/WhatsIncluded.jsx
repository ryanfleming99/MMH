import React from 'react'
import styles from "../styles/WhatsIncluded.module.css"
import SubHeading from "../components/Typography/SubHeading"
import TransparentHeader from "../components/Typography/TransparentHeader"
const WhatsIncluded = () => {
    return (
        <div className={styles.container}>
            <SubHeading title="What's included" />
            <div className="grid gap-14 lg:grid-cols-2 sm:grid-cols-1 justify-center mt-20 sm:w-full text-gray-300  ">
                {/* Exercise */}
                <div className="lg:order-1 sm:order-1">
                    <div className={styles.exercise}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Exercise" />
                        </div>
                    </div>
                </div>


                <div className="lg:order-2 sm:order-2 my-auto lg:px-10 ">
                    Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe
                </div>

                {/* Health */}
                <div className="lg:order-3 sm:order-4 my-auto lg:px-10">
                    Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </div>

                <div className="lg:order-4 sm:order-3">
                    <div className={styles.health}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Health" />
                        </div>
                    </div>
                </div>


                {/* Relationship */}
                <div className="lg:order-5 sm:order-5">
                    <div className={styles.relationship}>
                        <div className="flex text-center w-full mx-auto h-full">
                            <TransparentHeader text="Relationships" />
                        </div>
                    </div>
                </div>


                <div className="lg:order-6 sm:order-6 my-auto lg:px-10">
                    Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </div>

                {/* Work */}
                <div className="lg:order-7 sm:order-8 my-auto lg:px-10">
                    Lorem4 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </div>

                <div className="lg:order-8 sm:order-7">
                    <div className={styles.work}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Work" />
                        </div>
                    </div>
                </div>



                {/* Mental Health */}

                <div className="lg:order-9 sm:order-9">
                    <div className={styles.mentalHealth}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Mental Health" />
                        </div>
                    </div>
                </div>


                <div className="lg:order-10 sm:order-10 my-auto lg:px-10">
                    Lorem5 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </div>

                {/* Socialising */}
                <div className=" lg:order-11 sm:order-12 my-auto lg:px-10">
                    Lorem6 ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit delectus nostrum sapiente asperiores? Eum perspiciatis inventore debitis neque saepe

                </div>

                <div className="lg:order-12 sm:order-11">
                    <div className={styles.socialising}>
                        <div className="flex text-center w-3/4 mx-auto h-full">
                            <TransparentHeader text="Socialising" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WhatsIncluded