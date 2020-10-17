import SearchIconSM from "src/icons/heroicons/small/search";

function SearchBox() {
  return (
    <div className="max-w-xs mx-auto mt-10">
      <div className="mx-auto w-3/4">
        <div className="bg-white bg-opacity-75 flex items-center justify-around px-3 py-2 rounded-full">
          <SearchIconSM className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <input
            placeholder="¿A donde viajas?"
            className="flex-grow focus:outline-none min-w-0 bg-transparent text-gray-600 placeholder-current font-medium px-2 text-center"
          />
          <div className="w-5 h-5 flex-shrink-0"></div>
        </div>
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
              <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
                La Habana, Cuba
              </h1>
              <p className="mt-4 text-base lg:text-xl">
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
