"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function WorkExperience() {
    const code = `<div class="p-6 bg-gray-100">
  <h1 class="text-3xl font-bold text-blue-600 mb-4">About Me</h1>
  <p class="text-lg text-gray-700">
    I am a Computer Science Engineering student with strong skills in C++,
    along with web development experience in MERN techstack.
    During a summer internship at Effilix (Bangalore based startup),
    I helped in building a web tool a to improve internal workflows,
    enhancing my technical abilities and teamwork skills.
    I also worked on a Freelance projects,
    strengthening my development skills and modeling expertise.
  </p>
</div>

`;
    const HTMLLanguage = `import React from "react";

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Efflix",
    role: "Full Stack Developer",
    duration: "June 2024 - Aug 2024",
    responsibilities: [
      "Managed both frontend and backend roles for the company's SaaS product.",
      "Developed dynamic and scalable applications.",
      "Collaborated with a cross-functional team to deliver features on time."
    ],
    techStack: ["React.js", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    id: 2,
    company: "Syphinx Computers",
    role: "Full Stack Developer",
    duration: "October 2024 - December 2024",
    responsibilities: [
      "Building dynamic, scalable web applications.",
      "Specialized in both front-end and back-end development.",
      "Implementing innovative solutions for modern web applications."
    ],
    techStack: ["MERN Stack", "Prisma", "PostgreSQL"],
  }
];
`;

    const code2 = `.Achievements {
  text: Won 1st place at the IIIT-Delhi Hackathon (Foodoscope FORK IT 2024);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
`;

    return (
        <div className="max-w-3xl mx-auto w-full mb-16" id="workExperience">
            <div className="mt-[500px] h-1 -mb-72">
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
                            duration: 0.2,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="flex flex-col sm:flex-row gap-4 text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                    >
                        <div className="text-white">About Me and</div>
                        <Highlight className="text-black dark:text-black">
                            My Work
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
            </div>
            <CodeBlock
                language="jsx"
                filename="MyWorkExperience.tsx"
                tabs={[
                    {
                        name: "MyWorkExperience.tsx", code: HTMLLanguage, language: "tsx", highlightLines: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
                    },
                    {
                        name: "AboutMe.html",
                        code: code,
                        language: "html",
                        highlightLines: [2, 4, 5, 6, 7, 8, 9, 10],
                    },
                    {
                        name: "Achievements.css",
                        code: code2,
                        language: "css",
                        highlightLines: [2],
                    },
                ]}
            />
        </div>
    );
}
