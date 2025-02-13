"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP, FaYoutube, FaSkype, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">REAL HOMES</h2>
          <p className="text-sm text-gray-400 mt-2">Simply #1 Real Estate Theme</p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">Blog</a></li>
            <li><a href="#" className="hover:text-gray-200">List Layout</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 flex items-center space-x-2">
            📍 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
          </p>
          <p className="text-gray-400 flex items-center space-x-2 mt-3">
            📞 +123-456-789
          </p>
          <p className="text-gray-400 flex items-center space-x-2 mt-3">
            ✉ sales@example.com
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Remain Updated</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r text-white font-semibold hover:bg-orange-600">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <FaFacebookF className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaTwitter className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaLinkedinIn className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaPinterestP className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaYoutube className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaSkype className="text-gray-400 hover:text-gray-200 cursor-pointer" />
          <FaRss className="text-gray-400 hover:text-gray-200 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2023. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Designed by Inspiry Themes</p>
      </div>
    </footer>
  );
};

export default Footer;
