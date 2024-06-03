import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import { Skills } from "@/components/Skills";




export default function Home() {

  return (
    <>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Skills/>
        
      </div>
      <Footer/>
    </main>
      
    </>
  );
}
