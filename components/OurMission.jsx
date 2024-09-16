import React from "react";
import SubHeading from "./Typography/SubHeading";
import { motion } from "framer-motion";
const OurMission = () => {
  return (
    <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center pb-12">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-60 2xl:mt-12 text-center h-full font-bold text-white text-3xl md:text-5xl lg:text-7xl xl:text-8xl"
      >
        OUR MISSION
      </motion.h3>

      <div className="h-full grid items-center">
        <p className="my-auto text-lg lg:text-xl xl:text-2xl text-white">
          We aim to improve the mental and physical condition of as many people
          as we can. Through education and our community, we are confident in
          bringing impactful change to all of our members' lives.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
