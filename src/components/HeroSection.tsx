"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "antd";

function redirectToLinkedIn() {
  const linkedinURL = "https://www.linkedin.com/in/harshthakur76/";
  window.open(linkedinURL, "_blank");
}

const HeroSection = () => {
  return (
    <section className="lg:py-9 mx-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 space-y-20 md:space-y-0 lg:space-y-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-[25px] sm:text-4.5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              <TypeAnimation
                sequence={[
                  "Harsh Thakur",
                  1000,
                  "Software Engineer",
                  1000,
                  "CS Student",
                  1000,
                  "Fullstack developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="font-playfair text-white"
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
          <div>
            <button
              onClick={redirectToLinkedIn}
              className="transform transition duration-300 hover:scale-110 px-6 inline-block py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact me
            </button>
            <Link
              href="/"
              className="transform transition duration-300 hover:scale-110 px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1GtOwcA50bH2YaA3GypduxSjqoyhrKdWU/view?usp=sharing",
                    "_blank"
                  );
                }}
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Resume
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/soft-dev-img.png"
              alt="Harsh Thakur"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
