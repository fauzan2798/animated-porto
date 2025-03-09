import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import NumbersSection from "./components/NumbersSection";
import ThreeBackground from "./components/ThreeBackground";

function App() {
  return (
    <div>
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <NumbersSection />
    </div>
  );
}

export default App;
