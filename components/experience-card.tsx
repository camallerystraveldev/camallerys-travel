import Link from "next/link";

type ExperienceCardProps = {
  id: string;
  name: string;
};

export default function ExperienceCard({ id, name }: ExperienceCardProps) {
  return (
    <div className="w-full md:w-48 lg:w-64 max-w-xs first:ml-0 first:mt-0 mt-8 md:mt-0 md:ml-12">
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
