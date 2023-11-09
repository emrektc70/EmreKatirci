import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/ArchivementSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Projetcs } from "./components/Projetcs";

export default function Home() {
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
