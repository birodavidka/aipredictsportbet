"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Footer: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-12 px-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hírlevél Feliratkozás */}
        <div>
          <h2 className="text-2xl font-bold">Be Future-Ready</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Get exclusive <span className="font-semibold">digital marketing</span> updates straight to your inbox.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address"
              className={`w-full p-3 rounded-l-md border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600 focus:ring-gray-500"
                  : "bg-white text-black border-gray-300 focus:ring-green-500"
              }`}
            />
            <button
              className={`p-3 rounded-r-md flex items-center transition-all duration-300 ${
                theme === "dark" ? "bg-green-500 hover:bg-green-600" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <FaArrowUp className="rotate-90 text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Linkek */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg">About</h3>
            <ul className="mt-3 space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Our Team</a>
              </li>
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Clients</a>
              </li>
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Press</a>
              </li>
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Corporate Training</h3>
            <ul className="mt-3 space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Leaders</a>
              </li>
              <li className="hover:text-white dark:hover:text-gray-300 transition">
                <a href="#">Practitioners</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Kapcsolat */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="mt-3 text-gray-500 dark:text-gray-400">📞 +65 6653 8065</p>
          <p className="mt-1 text-gray-500 dark:text-gray-400">✉ hello@futuremarketer.co</p>
          <p className="mt-1 text-gray-500 dark:text-gray-400">📍 One Neil Road #02-02, Singapore 088804</p>
        </div>
      </div>

      {/* Alsó rész: Social Icons & Jogi linkek */}
      <div
        className={`mt-12 flex flex-col md:flex-row justify-between items-center border-t pt-6 transition-all duration-300 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      >
        <p className="text-gray-500 dark:text-gray-400">&copy; 2024 FutureMarketer Private Ltd. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition text-xl" />
          <FaLinkedin className="text-gray-500 dark:text-gray-400 hover:text-blue-700 transition text-xl" />
          <FaTwitter className="text-gray-500 dark:text-gray-400 hover:text-blue-400 transition text-xl" />
          <FaInstagram className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition text-xl" />
          <FaYoutube className="text-gray-500 dark:text-gray-400 hover:text-red-600 transition text-xl" />
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-white dark:hover:text-gray-300 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white dark:hover:text-gray-300 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
