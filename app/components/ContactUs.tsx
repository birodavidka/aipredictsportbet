"use client";

import { motion } from "framer-motion";
import { MailOption, Phone, Location } from "grommet-icons";
import { FaInstagram, FaFacebook, FaTwitter, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row max-w-4xl w-full bg-[#20002C] rounded-lg shadow-lg overflow-hidden"
      >
        {/* Contact Info (Bal oldal) */}
        <div className="bg-[#5A0E6A] text-white p-8 flex flex-col justify-between w-full md:w-1/3 rounded-l-lg">
          <h2 className="text-2xl font-bold mb-4">Let's discuss something <span className="text-pink-400">cool</span> together</h2>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <MailOption color="white" />
              <span>SaulDesign@gmail.com</span>
            </p>
            <div className="flex items-center space-x-3 bg-[#8E3A9B] p-3 rounded-lg">
              <Phone color="white" />
              <span>+123 456 789</span>
            </div>
            <p className="flex items-center space-x-3">
              <Location color="white" />
              <span>123 Street 456 House</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <FaFacebook className="text-white text-2xl hover:text-pink-400 transition" />
            <FaInstagram className="text-white text-2xl bg-pink-500 p-2 rounded-full" />
            <FaTwitter className="text-white text-2xl hover:text-pink-400 transition" />
          </div>
        </div>

        {/* Contact Form (Jobb oldal) */}
        <div className="p-8 w-full md:w-2/3 bg-white rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>
          <form className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows={4}
              placeholder="Your message"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></motion.textarea>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-[#8E3A9B] text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <FaPaperPlane />
              <span>Send Message</span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
