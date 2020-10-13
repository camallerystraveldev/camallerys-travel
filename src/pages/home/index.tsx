import HeroSection from "./hero";
import ToursPreviewSection from "./tours-preview";
import StaysPreviewSection from "./stays-preview";

function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <HeroSection />
      <ToursPreviewSection />
      <StaysPreviewSection />
    </div>
  );
}

export default Home;
