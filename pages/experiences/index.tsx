import ExperienceCard from "../../components/experience-card";

export default function Experiences() {
  const experiences = [
    { id: "habana-vieja", name: "Habana Vieja" },
    { id: "valle-viñales", name: "Valle de Viñales" },
    { id: "varadero", name: "Varadero" },
  ];

  return (
    <div id="experiences-page">
      <div className="p-2 pt-4 text-blue-800 font-extrabold text-3xl sm:text-4xl tracking-tight text-center leading-tight">
        Experiencias en la isla
      </div>
      <div className="mt-8 px-5 flex flex-col md:flex-row items-center justify-start md:justify-center md:flex-wrap">
        {experiences.map((e) => (
          <ExperienceCard key={e.id} id={e.id} name={e.name} />
        ))}
      </div>
    </div>
  );
}
