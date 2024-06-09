"use client"
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Navbar from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import MessageMe from '@/components/MessageMe';
import LoadingSpinner from '@/components/LoadingSpinner'; 

export default function Home() {
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2200); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner /> 
      ) : (
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
            <Skills />
            <MessageMe />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}

