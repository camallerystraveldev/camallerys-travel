import Link from "next/link";

type TourPreviewCardProps = {
  id: string;
  name: string;
};

function TourPreviewCard({ id, name }: TourPreviewCardProps) {
  return (
    <div className="w-48">
      <div className="relative aspect-ratio-square rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/random/600x400"
          className="absolute object-cover object-center w-full h-full"
        />
      </div>

      <div className="px-5 -mt-12 relative">
        <div className="p-3 bg-white backdrop-blur bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-gray-800 font-bold text-center truncate w-full">
            {name}
          </div>
          <div className="flex items-center justify-around mt-2">
            <Link href={`/experiences/${id}`}>
              <a className="rounded-full bg-blue-800 px-2 py-1 text-white font-bold uppercase text-xs">
                Ver detalles
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToursSection() {
  return (
    <div id="top-products-section" className="mt-8 px-4">
      <h1 className="text-gray-700 text-lg text-center font-extrabold">
        Las experiencias más populares
      </h1>
      <div className="mt-6 flex items-center justify-around">
        <TourPreviewCard id="valle-de-viñales" name="Valle de Viñales" />
      </div>
    </div>
  );
}

export default ToursSection;
