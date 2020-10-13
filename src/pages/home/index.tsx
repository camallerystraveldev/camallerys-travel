import HeroSection from "./hero";
import ToursSection from "./tours";
import StaysSection from "./stays";

function Home() {
  return (
    <div id="home-page">
      <HeroSection />
      <ToursSection />
      <StaysSection />
    </div>
  );
}

export default Home;
