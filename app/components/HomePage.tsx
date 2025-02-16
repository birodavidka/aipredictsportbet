"use client";

import { FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex min-h-[80vh] items-center justify-center px-6 text-center w-full transition-all duration-300
        ${theme === "dark" ? "bg-background-dark text-white" : "bg-background-light text-black"}
      `}
    >

      <div className="max-w-2xl relative">
        {/* Gradient Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-bold sm:text-5xl md:text-6xl"
        >
          Start your{" "}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r
            ${theme === "dark" ? "from-white to-gray-400" : "from-white to-[#4fd1c5]"}
          `}>
            dream site
          </span>{" "}
          with AI. <br />
          <span className={`${theme === "dark" ? "text-gray-400" : "text-[#6a5acd]"}`}>
            Zero code
          </span>, maximum speed.
        </motion.h1>

        {/* AI Input Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className={`mt-6 flex w-full max-w-lg items-center mx-auto rounded-full p-2 shadow-lg transition-all duration-300
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white/10 backdrop-blur-lg text-black"}
          `}
        >
          <motion.div whileHover={{ scale: 1.1 }} className="px-4">
            <FaMagic className={theme === "dark" ? "text-gray-400" : "text-white opacity-80"} />
          </motion.div>
          <input
            type="text"
            placeholder="A surf shop in Ericeira called Boardwalk"
            className={`w-full flex-1 bg-transparent outline-none transition-all duration-300
              ${theme === "dark" ? "text-white placeholder-gray-500" : "text-black placeholder-white/70"}
            `}
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(79, 209, 197, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`ml-3 rounded-full px-6 py-2 font-semibold shadow-md transition-all duration-300
              ${theme === "dark" ? "bg-[#4fd1c5] hover:bg-[#5A41EA] text-black" : "bg-[#5A41EA] hover:bg-[#4fd1c5] text-white"}
            `}
          >
            + Start with AI
          </motion.button>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mt-4 text-sm transition-all duration-300
            ${theme === "dark" ? "text-gray-500" : "text-white/70"}
          `}
        >
          Announcing Framer AI →
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HomePage;
