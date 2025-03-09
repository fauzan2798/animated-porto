import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesButton";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <div>
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />
    </div>
  );
}

export default App;
