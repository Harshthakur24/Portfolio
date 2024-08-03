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

const { Paragraph, Text } = Typography;

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <p className="text-lg font-bold mr-4 -mb-2">
                Find and connect with me on:
              </p>
              <motion.div whileHover={{ scale: 1.02 }}>
                <button
                  onClick={() =>
                    window.open(
                      "https://buymeacoffee.com/harsh_thakur",
                      "_blank"
                    )
                  }
                  className="cursor-none left-[282px] top-[35px] relative flex items-center justify-center w-[180px] h-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-[1px] border-[2.6px] border-blue-400">
                    <div className="w-full h-full bg-black rounded-[7px] group transition duration-200 text-white flex items-center justify-center hover:bg-transparent">
                      <span className="relative z-10">
                        Buy me a Pizza
                        <span className="inline-block animate-bounce scale-110">
                          🍕
                        </span>
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
            <div className="flex space-x-4 -mt-2 gap-4">
              <motion.div whileHover={{ scale: 1.2 }}>
                <button
                  onClick={() =>
                    window.open("https://x.com/HarshThaku44904", "_blank")
                  }
                  className="cursor-none text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{
                      color: "#1DA1F2",
                      fontSize: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/thakurharsh.24/",
                      "_blank"
                    )
                  }
                  className="cursor-none text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      color: "#d62976",
                      fontSize: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <button
                  onClick={() =>
                    window.open("https://github.com/Harshthakur24", "_blank")
                  }
                  className="cursor-none text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      color: "#9174e7",
                      fontSize: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/harsh-thakur-20877b246/",
                      "_blank"
                    )
                  }
                  className="cursor-none text-blue-400 hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#4784e6",
                      fontSize: "35px",
                      marginLeft: "10px",
                    }}
                  />
                </button>
              </motion.div>
            </div>
            <div className="flex -mb-8 mt-4">
              <span>Email➡️</span>
              <div className="">
                <Paragraph copyable className="cursor-none text-white flex">
                  thakur2004harsh@gmail.com
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end -mb-4">
            <p className="text-sm -mr-2">
              © Made with ❤️ by Harsh. Circa 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
