import React from "react";
import { motion } from "framer-motion";
import TheProcessStep from "../components/TheProcessStep";

const TheProcess = () => {
  const processSteps = [
    {
      id: 1,
      name: "Identify",
      description: "Identify an area for improvement"
    },
    {
      id: 2,
      name: "Goals",
      description: "Set goals and timeline for their completion"
    },
    {
      id: 3,
      name: "Discipline",
      description: "Keep yourself accountable using our templates and community"
    },
    {
      id: 4,
      name: "Review",
      description: "Review once the goal or deadline is reached"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center font-bold text-white text-4xl md:text-5xl lg:text-6xl"
      >
        The Process
      </motion.h3>
      <p className="text-center text-white mt-4 mb-12 max-w-2xl mx-auto">
        Follow these steps to achieve your goals effectively and efficiently.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, staggerChildren: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
      >
        {processSteps.map((step, i) => (
          <motion.div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold`}
            >
              {step.id}
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {step.name}
            </h4>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TheProcess;
