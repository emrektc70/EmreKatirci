'use client'
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/ArchivementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Projetcs } from "./components/Projetcs";
import { useEffect } from 'react';



declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
export default function Home() {
  useEffect(() => {
    // Ajoutez le code de suivi Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q47Q5BYV7H';
    script.async = true;

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', 'G-Q47Q5BYV7H');
    };

    document.head.appendChild(script);

    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/*         <AchievementsSection />
 */}
        <AboutSection />
        <Projetcs />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
