import React from "react";
import styles from "../styles/WhatsIncluded.module.css";
import SubHeading from "../components/Typography/SubHeading";
import TransparentHeader from "../components/Typography/TransparentHeader";
import SignUp from "./SignUp";
import { motion } from "framer-motion";

const WhatsIncluded = () => {
  const renderSection = (headerText, content, className, orderText) => (
    <>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`lg:order-${orderText} sm:order-${orderText}`}
      >
        <div className={className}>
          <div className="flex text-center w-3/4 mx-auto h-full">
            <TransparentHeader text={headerText} />
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`lg:order-${parseInt(orderText, 10) + 1} sm:order-${parseInt(
          orderText,
          10
        ) + 1} my-auto lg:px-10`}
      >
        {content}
      </motion.div>
    </>
  );

  return (
    <div className="bg-mainbg md:w-4/5 mx-auto mt-12 min-h-screen">
      <SubHeading title="Wellness resources for your mind and body" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-12 w-4/5 lg:w-1/3 mx-auto text-center text-white"
      >
        {/* This seems empty, consider adding content or remove */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid gap-14 sm:grid-cols-1 md:grid-cols-2 justify-center mt-20 w-full lg:w-4/5 mx-auto text-gray-300"
      >
        {/* Exercise Section */}
        {renderSection(
          "Exercise",
          "Exercise plans tailored to your needs, whether you're just starting out, looking for more variety in your workouts, or trying to master your discipline, we'll help you along the way.",
          styles.exercise,
          "1"
        )}

        {/* Health Section */}
        {renderSection(
          "Health",
          "Our diet plans and meal recipes enable you to optimise for your nutritional needs and dietary preferences. High carb, keto, veggie or vegan, we've got you covered.",
          styles.health,
          "3"
        )}

        {/* Relationship Section */}
        {renderSection(
          "Relationships",
          "Interpersonal connections can be tricky, especially when most of our time is spent interacting with people virtually. We're here to give you the confidence you deserve so you no longer feel like an outsider.",
          styles.relationship,
          "5"
        )}

        {/* Work Section */}
        {renderSection(
          "Work",
          "You can take your career to the next level with our guidance. If you're getting your first job or progressing to a different position, we can help you get there.",
          styles.work,
          "7"
        )}

        {/* Mental Health Section */}
        {renderSection(
          "Mental Health",
          "Your mindset is the foundation of the identity you adopt, ultimately determining your life path. We'll enable you to make the right choices through our easy-to-follow system, so you no longer have to face every challenge by yourself.",
          styles.mentalHealth,
          "9"
        )}

        {/* Socialising Section */}
        {renderSection(
          "Socialising",
          "Our community consists of like-minded men from all walks of life who overcome adversities by supporting each other. Join us and find out for yourself.",
          styles.socialising,
          "11"
        )}
      </motion.div>

      {/* SignUp Component */}
      <SignUp />
    </div>
  );
};

export default WhatsIncluded;
