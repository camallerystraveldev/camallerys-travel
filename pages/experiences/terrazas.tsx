import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Terrazas",
  locations: ["Las Terrazas, Pinar del Rio"],
  duration: 4,
  groupSize: 15,
  included: ["3 bebidas", "Puro cubano"],
  languages: ["español", "inglés"],
  description:
    "Vive la experiencia de disfrutar de las mejores vistas de la ciudad acompañado de un " +
    "exquisito coctel en cada uno de los sitios que visitemos. Conversaremos sobre la vida " +
    "en Cuba y la realidad del cubano, la historia de los principales sitios de interés, las " +
    "espectaculares fotos no faltarán. Un recorrido variado, disfrutaremos de las " +
    "particularidades de la Habana Vieja así como del exquisito aire urbano que se respira " +
    "en el Vedado. Una noche intensa, llena de emociones, desde la agradable sensación de " +
    "observar la Habana y sus contrastes desde arriba hasta la de poder sentirse un cubano " +
    "nato aprendiendo sobre las verdades de la Historia de Cuba así como de su excelente " +
    "cocteleria.",
  places: ["Gran Manzana", "Malecon 666", "Terraza Nacional"],
  categories: ["Fotografia", "Historia", "Arquitectura", "Coctelería", "Arte"],
  price: 65,
};

export default function TerrazasExperience() {
  return <ExperiencePage experience={experience} />;
}
