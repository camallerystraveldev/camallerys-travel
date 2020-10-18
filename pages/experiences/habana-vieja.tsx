import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Caminando por las principales calles y plazas de la Habana Vieja",
  locations: ["Habana Vieja", "Centro Habana"],
  duration: 4,
  groupSize: 20,
  included: ["Agua embotellada", "Trago", "Souvenir"],
  languages: ["español", "inglés"],
  description:
    "La curiosidad por conocer la historia y el exotismo " +
    "de la cultura popular de las angostas calles de la Habana Vieja, " +
    "es un estímulo más que suficiente para emprender este inigualable recorrido. " +
    "Durante 4 horas desentrañaremos juntos sucesos que tocan la ciudad desde " +
    "el mismísimo siglo XVI hasta la actualidad, entenderemos y aprehenderemos " +
    "como nuestros hechos históricos, tipos y costumbres del nativo habanero. " +
    "Quedaran seducidos por el folclor, la música y el exótico aire que se respira " +
    "en la Habana tan multifacética, bañada por una colonialidad innegable rozando lo " +
    "medieval y contemporáneo. Durante este recorrido disfrutaremos y captaremos a " +
    "través del lente de la cámara (si así lo desean) de los tesoros culturales que " +
    "se guarda muy para sí la capital de la isla",
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
    "Avenida del Puerto",
    "Museo del Havana Club",
    "Feria de artesanía en Los Almacenes San José",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura", "Cocteleria"],
  price: 40,
};

export default function HabanaViejaExperience() {
  return <ExperiencePage experience={experience} />;
}
