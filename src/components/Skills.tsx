"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight"; 

const skills:any = {
  "Languages": ["JavaScript", "TypeScript", "C++", "Python", "Java"],
  "Web Development": ["HTML", "CSS", "Node.js", "Express.js", "React.js", "Next.js", "Typescript", "Tailwind CSS","Socket.IO", "NextAuth.js"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  "Softwares": ["Postman", "Figma", "Docker"]
};

export function Skills(): JSX.Element {
  return (
    <div>
    <div className="mt-[480px] h-1 mb-[0px]">
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
        
        <div className="text-white">These are the skills I have </div>
        
        {" "}
        
        <Highlight className="text-black dark:text-black">
        learned in my coding journey
        </Highlight>
     </motion.h1>
     
      
    </HeroHighlight>
    </div>

    <div className=" mt-[-240px] mb-[30px] bg-[#1a1a1a] text-white rounded-lg overflow-hidden p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4 text-center">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 lg:gap-4">
              {skills[category].map((skill:any) => (
                <div
                  key={skill}
                  className="bg-gray-800 my-2 p-4  rounded-lg shadow-md transform hover:scale-105 hover:bg-gray-700 transition-transform duration-300 text-center lg:min-w-[150px] min-w-[200px]"
                >
                  {skill}
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




