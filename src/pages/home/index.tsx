import HeroSection from "./hero";
import ToursPreviewSection from "./tours-preview";
import StaysSection from "./stays";

function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <HeroSection />
      <ToursPreviewSection />
      <StaysSection />
    </div>
  );
}

export default Home;
