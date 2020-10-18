import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title:
    "Caminando por las principales calles y plazas de la Habana Vieja. Recorrido en auto clásico.",
  locations: ["Habana Vieja", "Centro Habana", "Vedado"],
  duration: 4.5,
  groupSize: 20,
  included: ["Agua embotellada", "Trago", "Souvenir"],
  languages: ["español", "inglés"],
  description:
    "La aventura más completa; andar la Habana Vieja en una caminata donde no faltaran " +
    "lugares llenos de historia, colorido y contrastes, después conoceremos una Habana " +
    "que te trasladará hacia los años 50. Desde un auto clásico convertible podremos " +
    "disfrutar de la frescura del malecón habanero así como de excelentes monumentos y " +
    "ejemplares arquitectónicos de gran valor cultural que posee la Isla. Todo ello irá " +
    "acompañado de asombrosas historias que solo el nativo cubano conoce y de las cuales " +
    "usted podrá disfrutar. El recorrido soñado donde se fusionan los temas culturales y " +
    "políticos para comprender de buena mano la realidad cubana.",
  places: [
    "Capitolio Habanero",
    "Gran Teatro de la Habana",
    "Parque Central",
    "Hotel Gran Manzana Kempinski",
    "Bulevar Obispo",
    "Bar Floridita",
    "Plaza de Armas",
    "Plaza Vieja",
    "Plaza de la Catedral",
    "Plaza San Francisco de Asís",
    "Bar La Bodeguita del Medio",
    "Plaza de la Revolución",
    "Exteriores del Cementerio de Colón",
    "Malecón Habanero",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura", "Cocteleria", "Autos"],
  price: 50,
};

export default function HabanaViejaAutoClasicoExperience() {
  return <ExperiencePage experience={experience} />;
}
