import Link from "next/link";
import SearchIconSM from "../icons/heroicons/small/search";
import ChevronRightIconSM from "../icons/heroicons/small/chevron-right";
import ExperienceCard from "../components/experience-card";

//#region hero section

function SearchBox() {
  return (
    <div className="w-48 mx-auto mt-10">
      <div className="bg-white bg-opacity-75 flex items-center justify-around rounded-full px-3 py-2">
        <SearchIconSM className="w-5 h-5 text-gray-600 flex-shrink-0" />
        <input
          placeholder="¿A donde viaja?"
          className="flex-grow focus:outline-none min-w-0 bg-transparent text-gray-600 placeholder-current font-medium px-2"
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div id="hero-section">
      <div className="bg-hero bg-cover bg-center shadow-lg rounded-b-lg overflow-hidden">
        <div className="bg-gray-700 bg-opacity-25 backdrop-blur h-full w-full px-8 lg:px-24 py-12">
          <div className="max-w-md lg:max-w-lg mx-auto">
            <div className="text-white text-center leading-tight">
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl tracking-tight">
                La Habana, Cuba
              </h1>
              <p className="mt-4 lg:text-xl">
                Viva una experiencia inolvidable. Conozca La Habana, hermosa
                ciudad colonial llena de historia. Pasee en autos americanos de
                mediados del siglo pasado. Disfrute de las playas de este
                paraíso tropical.
              </p>
            </div>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

//#endregion

//#region experience section

function ExperiencesSection() {
  const experiences = [
    { id: "habana-vieja", name: "Habana Vieja" },
    { id: "valle-viñales", name: "Valle de Viñales" },
    { id: "varadero", name: "Varadero" },
  ];

  return (
    <div id="experiences-section" className="mt-8 px-4">
      <h1 className="text-gray-700 text-lg text-center font-extrabold">
        Las experiencias más populares
      </h1>
      <div className="mt-8 px-5 flex flex-col md:flex-row items-center justify-start md:justify-center">
        {experiences.map((e) => (
          <ExperienceCard key={e.id} id={e.id} name={e.name} />
        ))}
      </div>
      <div className="mt-8 w-full text-center">
        <Link href="/experiences">
          <a className="text-blue-800 inline-flex items-center">
            <span className="uppercase text-sm font-bold">Ver todas</span>
            <ChevronRightIconSM className="w-4 h-4 animate-bounce-x ml-1" />
          </a>
        </Link>
      </div>
    </div>
  );
}

//#endregion

export default function Home() {
  return (
    <div id="home-page">
      <HeroSection />
      <ExperiencesSection />
    </div>
  );
}
