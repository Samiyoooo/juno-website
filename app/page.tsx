import { useEffect, useState } from "react";
import Navigation from "../components/juno/Navigation";
import HeroSection from "../components/juno/HeroSection";
import ProcessSection from "../components/juno/ProcessSection";
import SocialProofSection from "../components/juno/SocialProofSection";
import CTASection from "../components/juno/CTASection";
import Footer from "../components/juno/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F9FAF9] min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection scrollY={scrollY} />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <div id="testimonials">
        <SocialProofSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
