"use client";
import React from "react";
import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function Projects() {
  return (
    <div id="project" className="px-4">
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
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <div className="text-white">My</div>
            <Highlight className="text-black dark:text-black">
              Projects
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="flex flex-col justify-center mb-4 gap-4 mt-2">
        <div className="flex flex-col lg:flex-row gap-6 justify-center mt-4 mb-4">
          {/* Project 1 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>IIIT-D Hackathon Winning AI Powered Website.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/nutriwise.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Nutriwise-AI <span>⭐⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    NutriEase is an AI-powered website designed to simplify personalized nutrition by offering tailored meal plans, calorie tracking, and interactive dashboards.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2024</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://nutriwise.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 2 */}

          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>This is my freelance project which I built for a client.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/didmybit.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    DitMyBit<span>⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    This is webiste that helps people finding the Social Organization and NGO&apos;s in thier neighbour as well as all over the World and help them by providing support.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2024</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://social-map-app-seven.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 3 */}

          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>A real-time video chat platform inspired by Omegle</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/openmeet.jpg"
                    alt="OpenMeet thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    OpenMeet <span>⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    OpenMeet is a real-time video chat platform letting users instantly connect for conversations with strangers worldwide, built with WebRTC and socket technology.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2025</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://open-meet.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center mt-4 mb-4">

          {/* Project 4 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>This is my 2nd year project.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/chatlify.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Chatlify<span>⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    A real-time communication platform designed to streamline
                    interactions with responsive design and integrated websockets.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2023</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://chatlify-d8oj.onrender.com/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 5 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>Made to help students do well in their career.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/velocity.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Velocity<span>⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    A career growth app that empowers engineering students with
                    tools and resources to accelerate skill development and
                    professional advancement.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2024</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://velocity-sign.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 6 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>Build this one in my Hackaccino 3.0 Hackathon</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/medileger.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Medileger<span>⭐⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    MediChain helps hospitals coordinate medicine shortages and surpluses in real-time, making critical drug sharing faster and more efficient.


                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2025</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://medichain01.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

        </div>


        <div className="flex flex-col lg:flex-row gap-6 justify-center mt-4 mb-4">





          {/* Project 7 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>Finally, a PDF reader that&apos;s smarter than your coffee machine</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/pdf-ai.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    PDF-AI<span>⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    PDF-AI is an intelligent document analysis tool that leverages AI to extract,
                    analyze, and interact with PDF content. Users can chat with their documents
                    and get instant insights through natural language queries.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2024</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://pdf-ai-ht.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 8 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>Website for a Government-Outsourced Car Scrapping Company.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/black-mining.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Black Mining<span>⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    Designed and implemented a professional, user-centric website to streamline car scrapping services for end-of-life vehicles, ensuring compliance with government standards and environmental regulations.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2025</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://black-mining-portfolio.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

          {/* Project 9 */}
          <div className="w-full sm:w-80 mx-auto">
            <FollowerPointerCard
              title={
                <div className="flex space-x-2 items-center">
                  <Image
                    src="/logo.png"
                    height="20"
                    width="20"
                    alt="thumbnail"
                    className="rounded-full border-2 border-white"
                  />
                  <p>I build this website for my college.</p>
                </div>
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                  <Image
                    src="/mru-medical.jpg"
                    alt="thumbnail"
                    height="600"
                    width="1200"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700 flex justify-between items-center">
                    Black Mining<span>⭐⭐⭐⭐⭐</span>
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    This is my college (MRU) Medical Portal is designed to streamline the medical certificate submission process for students. I had the opportunity to build this website for my college.
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">2025</span>

                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        onClick={() => {
                          window.open(
                            "https://mr-umedicalportal.vercel.app/",
                            "_blank"
                          );
                        }}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
                      >
                        Visit it
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>

        </div>

      </div>
      <Link href="/all-projects">
        <motion.div className="flex justify-center mt-6 mr-8">
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="bg-blue-500 text-white px-6 py-5 rounded-full hover:bg-blue-600 transition-colors hover:scale-110 duration-300 hover:shadow-lg"
          >
            See All Projects -&gt;
          </motion.button>
        </motion.div>
      </Link>
    </div>
  );
}
