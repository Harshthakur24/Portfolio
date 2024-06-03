"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight"; // Ensure this path is correct

export function Skills(): JSX.Element {
  return (
    
    <HeroHighlight>
      <motion.h1
      
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        These are the skills I have
        {" "}
        <Highlight className="text-black dark:text-white">
        learned in my coding journey
        </Highlight>
    
      </motion.h1>
    </HeroHighlight>
  );
}
