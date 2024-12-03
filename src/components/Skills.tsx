"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiFigma,
  SiDocker,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills: any = {
  Languages: ["JavaScript", "TypeScript", "C++", "Python", "Java"],
  "Web Development": [
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Socket.IO",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  Tools: ["Postman", "Figma", "Docker"],
};

const techIcons: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript color="#f7df1e" />,
  TypeScript: <SiTypescript color="#007acc" />,
  "C++": <SiCplusplus color="#00599C" />,
  Python: <SiPython color="#3776AB" />,
  Java: <DiJava color="#007396" />,
  HTML: <SiHtml5 color="#E34F26" />,
  CSS: <SiCss3 color="#1572B6" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  "Express.js": <SiExpress color="#000000" />,
  "React.js": <SiReact color="#61DAFB" />,
  "Next.js": <SiNextdotjs color="#000000" />,
  "Tailwind CSS": <SiTailwindcss color="#38B2AC" />,
  "Socket.IO": <SiSocketdotio color="#010101" />,
  MongoDB: <SiMongodb color="#47A248" />,
  MySQL: <SiMysql color="#4479A1" />,
  PostgreSQL: <SiPostgresql color="#336791" />,
  Redis: <SiRedis color="#DC382D" />,
  Postman: <SiPostman color="#FF6C37" />,
  Figma: <SiFigma color="#F24E1E" />,
  Docker: <SiDocker color="#2496ED" />,
};

export function Skills(): JSX.Element {
  return (
    <div>
      <div className="mt-[570px] h-1 mb-[0px]">
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <div className="text-white">These are the skills I have</div>{" "}
            <Highlight className="text-black dark:text-black">
              learned in my coding journey
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="mx-8 mt-[-230px] mb-[30px] bg-[#1a1a1a] text-white rounded-lg overflow-hidden p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.keys(skills).map((category) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-4 text-center">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {skills[category].map((skill: string) => (
                  <div
                    key={skill}
                    className="bg-gray-800 p-4 rounded-lg shadow-md transform hover:scale-110 hover:bg-gray-700 transition-transform duration-300 flex flex-col items-center justify-center"
                    title={skill}
                  >
                    {React.cloneElement(techIcons[skill], { size: 48 })}
                    <p className="text-sm mt-2 font-semibold text-center">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
