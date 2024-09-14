"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Button, Popover, Rate } from "antd";
import { Fira_Code } from "next/font/google"; // Using next/font for Fira Code

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "500"] });

const navLinks = [
  { title: "<Projects/>", path: "#project" },
  { title: "<Skills/>", path: "#skills" },
  { title: "<Contact/>", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress }: any = useScroll();

  // Navbar visibility on scroll
  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    setVisible(
      scrollYProgress.get() < 0.1 || current < scrollYProgress.getPrevious()
    );
  });

  // Popover content
  const content = (
    <div className={`${firaCode.className}`}>
      <p>
        I built this site to showcase my engineering skills. If you like it,
        let&apos;s build something cool together. 🚀
      </p>
      <Rate allowHalf defaultValue={5} />
    </div>
  );

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    setNavbarOpen(false);
    const targetElement = document.querySelector(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80 border-b border-gray-700 cursor-none"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3 cursor-none">
        <Popover placement="bottom" title="Hello!" content={content}>
          <Button
            className={`${firaCode.className} text-xl font-bold text-white bg-transparent border-none cursor-none`}
          >
            Harsh
          </Button>
        </Popover>

        <div className="block md:hidden cursor-none">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white cursor-none"
            aria-label="Toggle navigation"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } md:flex md:items-center cursor-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 hover:cursor-none md:mt-0 text-white">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-gray-400 cursor-none">
                <a
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`${firaCode.className} text-base cursor-none`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
