"use client";
import React, { useRef } from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-4">Find and connect me on:</p>
            <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.2 }} >
              <button
                onClick={() =>
                  window.open("https://x.com/HarshThaku44904", "_blank")
                }
                className="text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
              >
                
                <FaTwitter className="mr-2" /> Twitter
              </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} >
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/thakurharsh.24/",
                    "_blank"
                  )
                }
                className="text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} >
              <button
                onClick={() =>
                  window.open("https://github.com/Harshthakur24", "_blank")
                }
                className="text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} >
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/harsh-thakur-20877b246/",
                    "_blank"
                  )
                }
                className="text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
              >
                <FaLinkedinIn className="mr-2" /> LinkedIn
              </button>
              </motion.div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-sm">© 2024 Harsh Thakur. All rights reserved.</p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
