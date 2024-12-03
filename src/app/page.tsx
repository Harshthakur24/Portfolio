"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import MessageMe from "@/components/MessageMe";
import LoadingSpinner from "@/components/LoadingSpinner";
import CardStackMessages from "@/components/CardStackMessages";
import Projects from "@/components/Projects";
import { PointerCursor } from "@/components/ui/pointer-cursor";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="scroll-smooth">
      <link rel="icon" href="logo.png" />

      {loading ? (
        <LoadingSpinner />
      ) : (


        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-4 py-4">
            <HeroSection />
            <Projects />
            <Skills />

            <div className="flex flex-col lg:flex-row lg:space-x-0 space-y-4 lg:space-y-0 justify-center">
              <div className="w-full lg:w-[99.99%] lg:max-w-[620px] mx-auto">
                <MessageMe />
              </div>
              <div className="w-8/12 mx-auto lg:w-[0.1%] lg:max-w-[500px]">
                <CardStackMessages />
              </div>
            </div>
          </div>
          <Footer />
        </main>


      )}
    </div>
  );
}