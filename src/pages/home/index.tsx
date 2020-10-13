import HeroSection from "./hero";
import ToursSection from "./tours";
import StaysSection from "./stays";

function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <HeroSection />
      <ToursSection />
      <StaysSection />
    </div>
  );
}

export default Home;
