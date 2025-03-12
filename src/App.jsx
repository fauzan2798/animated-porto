import { useState } from "react";
import BackToTop from "./components/BackToTop";
import ContactUs from "./components/ContactUs";
import EducationAndExperience from "./components/EducationAndExperience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoadingSpinner from "./components/LoadingSpinner";

import Navbar from "./components/Navbar";
import NumbersSection from "./components/NumbersSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesButton";
import SkillsSection from "./components/SkillsSection";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ThreeBackground />
      {isLoading ? (
        <LoadingSpinner onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <NumbersSection />
          <ServicesSection />
          <SkillsSection />
          <EducationAndExperience />
          <ProjectsSection />
          <ContactUs />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
