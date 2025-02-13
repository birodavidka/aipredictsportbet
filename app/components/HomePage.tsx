"use client";

import { FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex min-h-screen items-center justify-center px-6 text-center w-full"
    >
      <div className="max-w-2xl text-white">
        {/* Gradient Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-bold sm:text-5xl md:text-6xl"
        >
          Start your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#917AFF]">
            dream site
          </span>{" "}
          with AI. <br />
          <span className="text-[#917AFF]">Zero code</span>, maximum speed.
        </motion.h1>

        {/* AI Input Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-6 flex w-full max-w-lg items-center mx-auto bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-lg"
        >
          <motion.div whileHover={{ scale: 1.1 }} className="px-4">
            <FaMagic className="text-white opacity-80" />
          </motion.div>
          <input
            type="text"
            placeholder="A surf shop in Ericeira called Boardwalk"
            className="w-full flex-1 bg-transparent text-white placeholder-white/70 outline-none"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(145, 122, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 rounded-full bg-[#5A41EA] px-6 py-2 text-white font-semibold shadow-md transition-all hover:bg-[#917AFF]"
          >
            + Start with AI
          </motion.button>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-white/70 text-sm"
        >
          Announcing Framer AI →
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HomePage;
