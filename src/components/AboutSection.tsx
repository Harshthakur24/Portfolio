"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const AboutSection: React.FC = () => {
  const text =
    "I'm a passionate full-stack developer with experience in building dynamic web applications using modern technologies. I enjoy creating scalable, user-friendly solutions and am always excited to explore the latest advancements in tech.";
  const words = text.split(" ");

  return (
    <section className="text-white mb-24">
      <div className="mt-[530px] h-1 -mb-72">
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex gap-4 text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <div className="text-white">About</div>{" "}
            <Highlight className="text-black dark:text-black">Me</Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="mt-8 text-center max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl font-medium px-6 leading-relaxed">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="inline-block mr-2 font-semibold"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
