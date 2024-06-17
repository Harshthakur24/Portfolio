"use client";
import React, {
  useTransition,
  useState,
  FC,
  ReactNode,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";
import { CardContainer, CardItem, CardBody } from "./ui/3d-card";
import { BoxesCore, Boxes } from "./ui/background-boxes";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const openProject = () => {
  const project_url = "https://storyandverse.netlify.app/";
  window.open(project_url, "_blank");
};

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
  button.classList.toggle("text-red-500");
  button.classList.remove("text-green-500");
};

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>HTML and CSS</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Engineering</li>
        <li>Manav Rachna University, India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <ul className="list-disc pl-2"></ul>,
  },
];

const AboutSection: FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const [Liked, setLinked] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  useEffect(() => {
    if (index1 === 4) {
      setIndex1(0);
    }
    if (index2 === 4) {
      setIndex2(0);
    }
    const timeout = setTimeout(() => {
      setIndex1(index1 + 1);
      setIndex2(index2 + 1);
    }, 7000);
    return () => clearTimeout(timeout);
  }, [index1, index2]);

  const arr1 = [
    "Code is a digital poetry; write it with passion and purpose",

    "There's no point in competing if you don't want to be the best!",

    "The magic you are looking for is in the work you are avoiding.",

    "You need to be very nimble and very open-minded. Your success will be defined by how you adapt.",
  ];

  const arr2 = [
    "- Satya Nadella",
    "- Virat Kohli",
    "- Kevin Ng",
    "- Sundar Pichai",
  ];

  return (
    <section className="text-white">
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1
          className={
            "md:text-6xl text-xl text-white relative z-20 text-6xl px-4 md:text-2xl lg:text-[37px] font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center"
          }
        >
          {arr1[index1]}
        </h1>
        <p className="mt-[13px] text-center mt-2 text-neutral-300 relative z-20 font-bold text-white text-sm md:text-lg lg:text-[19px]">
          {arr2[index2]}
        </p>
      </div>
      <div
        id="about"
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-blue-500 to-blue-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-200 dark:text-black"
            >
              My Hackathon Project - Storyverse
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-400"
            >
              StoryVerse is a collaborative storytelling platform that enables
              users to co-create, share, and interact with dynamic narratives in
              real-time.
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src="/image1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <motion.div whileHover={{ scale: 1.2 }}>
                <button onClick={openProject}>
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-blue-300 text-blue-200"
                  >
                    Check it out →
                  </CardItem>
                </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-blue-800 dark:text-black text-blue-400 text-xs font-bold"
                >
                  <button
                    id="likeButton"
                    className="transition-transform transition-color transform hover:scale-110 hover:text-blue-500"
                    onClick={handleClick}
                  >
                    Like it ❤️
                  </button>
                </CardItem>
              </motion.div>
            </div>
          </CardBody>
        </CardContainer>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            MongoDB, Nextjs, Typescript, Redis, Tailwind, HTML, CSS, Git and
            Docker. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
      <div id="skills"></div>
      <div ref={ref}>
        <motion.div
          initial={{
            x: -750,
            y: 220,
            scale: 0.8,
            rotate: -360,
          }}
          animate={
            isInView
              ? {
                  x: [-750, 950],
                  y: [220, -100],
                  scale: 2,
                  rotate: 360,
                }
              : {}
          }
          transition={{
            duration: 6,
            ease: "easeOut",
          }}
        >
          <Image
            ref={ref}
            src="/flower.png"
            alt=""
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
