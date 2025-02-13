"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Cpu, ShieldSecurity, Deploy, Performance, UserExpert } from "grommet-icons";

const benefits = [
  {
    icon: <Cloud size="large" color="black" />,
    title: "Cloud-Powered AI",
    description: "Our system leverages cloud computing to ensure real-time, accurate predictions for your bets.",
  },
  {
    icon: <Cpu size="large" color="black" />,
    title: "Cutting-Edge Algorithms",
    description: "Using the latest machine learning models to analyze betting trends and maximize winnings.",
  },
  {
    icon: <ShieldSecurity size="large" color="black" />,
    title: "Secure & Reliable",
    description: "We prioritize security and reliability, ensuring encrypted data transactions and robust AI models.",
  },
  {
    icon: <Deploy size="large" color="black" />,
    title: "Seamless Integration",
    description: "Effortlessly integrate our AI recommendations with your favorite betting platforms.",
  },
  {
    icon: <Performance size="large" color="black" />,
    title: "High Performance",
    description: "Lightning-fast calculations and insights so you never miss an opportunity.",
  },
  {
    icon: <UserExpert size="large" color="black" />,
    title: "AI-Driven Insights",
    description: "Receive personalized betting strategies based on historical data and market trends.",
  },
];

const BenefitsGrid = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="py-16 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Our AI?</h2>
        <p className="text-gray-400 mb-12">
          Experience next-level betting analytics with our AI-driven platform.
        </p>

        {/* Grid Layout with AnimatePresence */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
                className="flex flex-col items-center text-center text-black bg-white rounded-2xl p-6 shadow-lg transition-all"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-400 mt-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default BenefitsGrid;