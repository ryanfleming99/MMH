import React from "react";
import styles from "../styles/SignUp.module.css";
import SubHeading from "./Typography/SubHeading";
import SignUpForm from "../components/SignUpForm";
import { motion } from "framer-motion";

const SignUp = () => {
  const toolsList = [
    "Daily schedule planner (free)",
    "Weekly updates on events with free stuff, mental health, sexual health, drug advice and support.",
    "ACCESS to Whatsapp and Messenger groups to chat with your squad",
    "T-shirt to support the cause",
    "Smart Eating plan (best meals for cheap, easy, fast) for people who work a lot or long hours.",
    "Smart Finance plan, quick maths to help with your spending. Saving, interest etc.",
    "Dating and relationship advice from trained professionals.",
    "Workshops with certificates and free courses for qualifying brothers.",
    "Exclusive deals to online university courses from Harvard, Oxford etc.",
    "Make amazing friends and brothers, get mental health support from each other and support a good cause.",
    "Paid memberships have exclusive access to another chat where business opportunities come up and access to free courses are given priority. Exclusive meet-ups and advice 1 to 1’s on the gold membership. Gift upon joining after 3 months ( - - - -- ). Free elite t-shirt and stickers. Founder of the company."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-3 py-24 min-"
    >
      <div className="grid items-center w-4/5 lg:w-full mx-auto">
        <div>
          {/* <ul className="mt-4 leading-10 text-gray-300">
                        {toolsList.map((item, index) => (
                            <li key={index}>{index + 1}. {item}</li>
                        ))}
                    </ul> */}
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
