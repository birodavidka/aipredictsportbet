"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hírlevél Feliratkozás */}
        <div>
          <h2 className="text-2xl font-bold">Be Future-Ready</h2>
          <p className="text-gray-400 mt-2">
            Get exclusive <span className="font-semibold text-white">digital marketing</span> updates straight to your inbox.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 p-3 rounded-r-md flex items-center">
              <FaArrowUp className="rotate-90 text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Linkek */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg">About</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li className="hover:text-white transition"><a href="#">Our Team</a></li>
              <li className="hover:text-white transition"><a href="#">Clients</a></li>
              <li className="hover:text-white transition"><a href="#">Press</a></li>
              <li className="hover:text-white transition"><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Corporate Training</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li className="hover:text-white transition"><a href="#">Leaders</a></li>
              <li className="hover:text-white transition"><a href="#">Practitioners</a></li>
            </ul>
          </div>
        </div>

        {/* Kapcsolat */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="text-gray-400 mt-3">📞 +65 6653 8065</p>
          <p className="text-gray-400 mt-1">✉ hello@futuremarketer.co</p>
          <p className="text-gray-400 mt-1">📍 One Neil Road #02-02, Singapore 088804</p>
        </div>
      </div>

      {/* Alsó rész: Social Icons & Jogi linkek */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        <p className="text-gray-400">&copy; 2024 FutureMarketer Private Ltd. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook className="text-gray-400 hover:text-white transition text-xl" />
          <FaLinkedin className="text-gray-400 hover:text-white transition text-xl" />
          <FaTwitter className="text-gray-400 hover:text-white transition text-xl" />
          <FaInstagram className="text-gray-400 hover:text-white transition text-xl" />
          <FaYoutube className="text-gray-400 hover:text-white transition text-xl" />
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
