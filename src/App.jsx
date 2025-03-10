import EducationAndExperience from "./components/EducationAndExperience";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesButton";
import SkillsSection from "./components/SkillsSection";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <div>
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />
      <SkillsSection />
      <EducationAndExperience />
    </div>
  );
}

export default App;
