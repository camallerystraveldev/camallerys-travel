import SearchIconSM from "src/icons/heroicons/small/search";

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

export default HeroSection;
