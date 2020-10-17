import Link from "next/link";
import ChevronRightIconSM from "src/icons/heroicons/small/chevron-right";

type ExperienceCardProps = {
  id: string;
  name: string;
};

function ExperienceCard({ id, name }: ExperienceCardProps) {
  return (
    <div className="w-48 md:w-56 lg:w-64">
      <div className="relative aspect-ratio-square rounded-lg overflow-hidden shadow-lg">
        <img
          src={`/assets/experiences/${id}/preview.jpg`}
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

function ExperiencesSection() {
  return (
    <div id="experiences-section" className="mt-8 px-4">
      <h1 className="text-gray-700 text-lg text-center font-extrabold">
        Las experiencias más populares
      </h1>
      <div className="px-6">
        <div className="overflow-auto scrolling-touch text-center">
          <div className="inline-flex py-6 justify-center gap-x-8">
            <ExperienceCard id="test" name="Experiencia de prueba" />
            <ExperienceCard id="test" name="Experiencia de prueba" />
            <ExperienceCard id="test" name="Experiencia de prueba" />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <Link href="/experiences">
          <a className="text-blue-800 inline-flex items-center">
            <span className="uppercase text-xs font-bold">Ver todas</span>
            <ChevronRightIconSM className="w-4 h-4" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ExperiencesSection;
