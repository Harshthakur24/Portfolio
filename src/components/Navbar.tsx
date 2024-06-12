"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

interface NavLinkType {
  title: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState<string>("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = current - (previous || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleLinkClick = (path: string) => {
    setNavbarOpen(false);
    setActiveLink(path);
    const targetElement = document.querySelector(path);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <Link
          href="/"
          className="text-2xl md:text-2xl text-white font-semibold"
        >
          Harsh
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              aria-label="Open navigation menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              aria-label="Close navigation menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } md:block w-full md:w-auto`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className={`block text-white ${
                    activeLink === link.path ? "font-bold" : ""
                  } hover:text-gray-400`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
