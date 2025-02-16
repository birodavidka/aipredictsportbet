"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Cloud, Cpu, ShieldSecurity, Deploy } from "grommet-icons";

const benefits = [
  {
    icon: <Cloud size="large" />,
    title: "Cloud-Powered AI",
    description: "Our system leverages cloud computing to ensure real-time, accurate predictions for your bets.",
  },
  {
    icon: <Cpu size="large" />,
    title: "Cutting-Edge Algorithms",
    description: "Using the latest machine learning models to analyze betting trends and maximize winnings.",
  },
  {
    icon: <ShieldSecurity size="large" />,
    title: "Secure & Reliable",
    description: "We prioritize security and reliability, ensuring encrypted data transactions and robust AI models.",
  },
  {
    icon: <Deploy size="large" />,
    title: "Seamless Integration",
    description: "Effortlessly integrate our AI recommendations with your favorite betting platforms.",
  },
];

const BenefitsGrid = () => {
  const theme = useSelector((state: RootState) => state.theme.mode); // 🔥 Redux-ból lekérjük a témát

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`relative py-16 transition-all duration-300
        ${theme === "dark" ? "bg-background-dark text-white" : "bg-background-light text-black"}
      `}
    >

      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-8">Why Choose Our AI?</h2>
        <p className="text-gray-400 mb-12">
          Experience next-level betting analytics with our AI-driven platform.
        </p>

        {/* Grid Layout with AnimatePresence */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
                className={`flex flex-col items-center text-center rounded-2xl p-6 shadow-lg transition-all duration-300
                  ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
                `}
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
