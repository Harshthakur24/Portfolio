"use client";
import React from "react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

// const TitleComponent = ({
//   title,
//   avatar,
// }: {
//   title: string;
//   avatar: string;
// }) => (
//   <div className="flex space-x-2 items-center">
//     <Image
//       src="/flower.png"
//       height="20"
//       width="20"
//       alt="thumbnail"
//       className="rounded-full border-2 border-white"
//     />
//     <p>{title}</p>
//   </div>
// );

// const blogContent = {
//   slug: "amazing-tailwindcss-grid-layouts",
//   author: "Manu Arora",
//   date: "28th March, 2023",
//   title: "Amazing Tailwindcss Grid Layout Examples",
//   description:
//     "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//   image: "/flower.png",
//   authorAvatar: "/manu.png",
// };

export default function Projects() {
  return (
    <div>
      <div className="mt-[530px] h-1 -mb-72">
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
            className="flex gap-4 text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <div className="text-white">My</div>{" "}
            <Highlight className="text-black dark:text-black">
              Projects
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className="flex gap-4 mt-4 mb-4">
        <div className="w-80 mx-auto">
          <FollowerPointerCard
            title={
              <div className="flex space-x-2 items-center">
                {" "}
                <Image
                  src="/logo.png"
                  height="20"
                  width="20"
                  alt="thumbnail"
                  className="rounded-full border-2 border-white"
                />
                <p>Build this one in my College Hackathon</p>
              </div>
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src="/image1.png"
                  alt="thumbnail"
                  height="600"
                  width="1200"
                  className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                />
              </div>
              <div className=" p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  StoryVerse
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  StoryVerse is a collaborative storytelling platform that
                  enables users to co-create, share, and interact with dynamic
                  narratives in real-time.
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">2022</span>

                  <button
                    onClick={(e) => {
                      window.open(
                        "https://storyandverse.netlify.app/",
                        "_blank"
                      );
                    }}
                    className="cursor-none relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                  >
                    Visit it
                  </button>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>

        <div className="w-80 mx-auto">
          <FollowerPointerCard
            title={
              <div className="flex space-x-2 items-center">
                {" "}
                <Image
                  src="/logo.png"
                  height="20"
                  width="20"
                  alt="thumbnail"
                  className="rounded-full border-2 border-white"
                />
                <p>Build this one in my College Hackathon</p>
              </div>
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src="/image1.png"
                  alt="thumbnail"
                  height="600"
                  width="1200"
                  className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                />
              </div>
              <div className=" p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  StoryVerse
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  StoryVerse is a collaborative storytelling platform that
                  enables users to co-create, share, and interact with dynamic
                  narratives in real-time.
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">2022</span>

                  <button
                    onClick={(e) => {
                      window.open(
                        "https://storyandverse.netlify.app/",
                        "_blank"
                      );
                    }}
                    className="cursor-none relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                  >
                    Visit it
                  </button>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>

        <div className="w-80 mx-auto">
          <FollowerPointerCard
            title={
              <div className="flex space-x-2 items-center">
                {" "}
                <Image
                  src="/logo.png"
                  height="20"
                  width="20"
                  alt="thumbnail"
                  className="rounded-full border-2 border-white"
                />
                <p>Build this one in my College Hackathon</p>
              </div>
            }
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src="/image1.png"
                  alt="thumbnail"
                  height="600"
                  width="1200"
                  className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                />
              </div>
              <div className=" p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  StoryVerse
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  StoryVerse is a collaborative storytelling platform that
                  enables users to co-create, share, and interact with dynamic
                  narratives in real-time.
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">2022</span>

                  <button
                    onClick={(e) => {
                      window.open(
                        "https://storyandverse.netlify.app/",
                        "_blank"
                      );
                    }}
                    className="cursor-none relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                  >
                    Visit it
                  </button>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </div>
    </div>
  );
}
