"use client";
import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const { Paragraph } = Typography;

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 md:py-5 mt-auto">
      <div className="container mx-2 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-4">
              Find and connect with me on:
            </p>
            <div className="flex space-x-10 mb-4 hover:cursor-none">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hover:cursor-none"
              >
                <button
                  onClick={() =>
                    window.open("https://x.com/HarshThaku44904", "_blank")
                  }
                  className="text-blue-400 hover:cursor-none hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    className="hover:cursor-none"
                    icon={faTwitter}
                    style={{ color: "#1DA1F2", fontSize: "38px" }}
                  />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hover:cursor-none"
              >
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/thakurharsh.24/",
                      "_blank"
                    )
                  }
                  className="hover:cursor-none text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    className="hover:cursor-none"
                    icon={faInstagram}
                    style={{ color: "#d62976", fontSize: "38px" }}
                  />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hover:cursor-none"
              >
                <button
                  onClick={() =>
                    window.open("https://github.com/Harshthakur24", "_blank")
                  }
                  className="text-blue-400 hover:cursor-none hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    className="hover:cursor-none"
                    icon={faGithub}
                    style={{ color: "#9174e7", fontSize: "38px" }}
                  />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hover:cursor-none"
              >
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/harsh-thakur-20877b246/",
                      "_blank"
                    )
                  }
                  className="text-blue-400 hover:cursor-none hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    className="hover:cursor-none"
                    icon={faLinkedin}
                    style={{ color: "#4784e6", fontSize: "38px" }}
                  />
                </button>
              </motion.div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Email:</span>
              <Paragraph copyable className="text-white mt-3">
                thakur2004harsh@gmail.com
              </Paragraph>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-end justify-center md:justify-end">
            <p className="text-sm">
              © Made with ❤️ by Harsh. Circa 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
