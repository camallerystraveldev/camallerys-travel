import SearchIcon from "src/icons/search";

function SearchBox() {
  return (
    <div className="bg-white flex px-3 py-2 rounded-full max-w-xs">
      <div className="flex-grow-0 flex-shrink-0">
        <SearchIcon className="h-6 w-6 text-gray-600" />
      </div>
      <input
        placeholder="¿A donde viajas?"
        className="flex-grow focus:outline-none text-gray-700 px-2 pl-5"
      />
    </div>
  );
}

function HeroSection() {
  return (
    <div id="hero-section">
      <div className="bg-hero bg-center shadow-lg rounded-b-lg overflow-hidden">
        <div className="bg-gray-700 bg-opacity-25 backdrop-blur h-full w-full px-10 py-12">
          <div className="text-center">
            <h1 className="text-white font-extrabold text-4xl leading-tight tracking-tight">
              La Habana, Cuba
            </h1>
            <p className="text-white mt-4 leading-tight">
              Viva una experiencia inolvidable. Conozca La Habana, hermosa
              ciudad colonial llena de historia. Pasee en autos americanos de
              mediados del siglo pasado. Disfrute de las playas de este paraíso
              tropical.
            </p>
          </div>

          <div className="px-5 mt-10">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
