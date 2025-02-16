"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MailOption, Phone, Location } from "grommet-icons";
import { FaInstagram, FaFacebook, FaTwitter, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ContactUs = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section
      className={`flex items-center justify-center min-h-screen px-6 transition-all duration-300
        ${theme === "dark" ? "bg-background-dark text-white" : "bg-background-light text-black"}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex flex-col md:flex-row max-w-4xl w-full rounded-lg shadow-lg overflow-hidden transition-all duration-300
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}
        `}
      >
        {/* Contact Info (Bal oldal) */}
        <div
          className={`p-8 flex flex-col justify-between w-full md:w-1/3 rounded-l-lg transition-all duration-300
            ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#5A0E6A] text-white"}
          `}
        >
          <h2 className="text-2xl font-bold mb-4">
            Let's discuss something <span className="text-pink-400">cool</span> together
          </h2>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <MailOption color="white" />
              <span>SaulDesign@gmail.com</span>
            </p>
            <div
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                ${theme === "dark" ? "bg-gray-700" : "bg-[#8E3A9B]"}
              `}
            >
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
        <div
          className={`p-8 w-full md:w-2/3 rounded-r-lg transition-all duration-300
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
          `}
        >
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Név mező */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                {...register("name", { required: "Your name is required" })}
                type="text"
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                  ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500" : "bg-gray-100 text-black border-gray-300 focus:ring-pink-500"}
                  ${errors.name ? "border-red-500" : ""}
                `}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </motion.div>

            {/* E-mail mező */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                {...register("email", {
                  required: "Your email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="Your email"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                  ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500" : "bg-gray-100 text-black border-gray-300 focus:ring-pink-500"}
                  ${errors.email ? "border-red-500" : ""}
                `}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </motion.div>

            {/* Üzenet mező */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <textarea
                {...register("message", {
                  required: "Your message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
                rows={4}
                placeholder="Your message"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                  ${theme === "dark" ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-500" : "bg-gray-100 text-black border-gray-300 focus:ring-pink-500"}
                  ${errors.message ? "border-red-500" : ""}
                `}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </motion.div>

            {/* Küldés gomb */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className={`w-full py-3 font-bold rounded-lg shadow-md transition-all flex items-center justify-center space-x-2
                ${theme === "dark" ? "bg-pink-500 text-black hover:bg-pink-600" : "bg-[#8E3A9B] text-white hover:bg-[#A94FC0]"}
              `}
            >
              <FaPaperPlane />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
