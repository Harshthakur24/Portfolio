"use client";
import { CardStack } from "@/components/ui/card-stack"
import { cn } from "@/utils/cn";

function CardStackMessages() {
  return (
    <div className="h-[25rem] ml-[-263px] flex items-center justify-center ">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Nikhil Sahni",
    designation: "Full Stack Developer",
    content: (
      <p>
         Amazing website bro,<Highlight>Keep it up!</Highlight> 
      </p>
    ),
  },
  {
    id: 1,
    name: "Ashutosh",
    designation: "UI Developer",
    content: (
      <p>
        Nice Tech stack bro, I overall loved this website{" "}
        <Highlight>Good Job!
        </Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Vishal Sharma",
    designation: "Full Stack Developer",
    content: (
      <p>
        What an innovative animated components,{" "}
        <Highlight>
        really love your work.
        </Highlight>
      </p>
    ),
  },
  {
    id: 3,
    name: "Kanika Sharma",
    designation: "Full Stack Developer",
    content: (
      <p>
        Nice overall UI and beautiful components{" "}
        <Highlight>
        Nice!
        </Highlight>
      </p>
    ),
  },

  {
    id: 4,
    name: "Aryan Pandey",
    designation: "Full Stack Developer",
    content: (
      <p>
        Really liked this portfolio and your hackathon project too,{" "}
        <Highlight>
        Keep it up!
        </Highlight>
      </p>
    ),
  },
  
];

export default CardStackMessages;