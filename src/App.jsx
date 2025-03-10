import EducationAndExperience from "./components/EducationAndExperience";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import NumbersSection from "./components/NumbersSection";
import ProjectsSection from "./components/ProjectsSection";
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
      <ProjectsSection />
    </div>
  );
}

export default App;
