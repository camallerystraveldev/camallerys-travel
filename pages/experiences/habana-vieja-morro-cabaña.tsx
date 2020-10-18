import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Recorrido por la Habana Vieja y Morro-Cabaña",
  locations: ["Habana Vieja"],
  duration: 5,
  groupSize: 15,
  included: ["Agua embotellada", "Souvenir"],
  languages: ["español", "inglés"],
  description:
    "Un recorrido lleno de contrastes, donde podremos adentrarnos en las particulares " +
    "calles de la Habana Vieja, respirar todo su exotismo cultural con matices coloniales. " +
    "Mediante esta caminata y poniendo de evidencia la exclusividad arquitectónica que " +
    "adorna su ambiente, podrán comprender todos los procesos culturales y políticos que " +
    "se han desarrollado en la isla durante 500 años. Después de esta experiencia por las " +
    "coloridas calles y particulares plazas de la Habana Vieja vivirán durante unos minutos " +
    'la realidad del cubano montándose a bordo de la "Lanchita de Regla" una especie de ' +
    "ferri que recorre a diario un extremo de la ciudad a otro, conectando una parte de la " +
    "Habana con el municipio costero Regla (Casablanca). En Casablanca quedaremos " +
    "deslumbrados por la majestuosidad del Cristo de la Habana y sus fotogénicas vistas, a " +
    "la vez que entenderán el concepto de contraste cuando recorramos la parte medieval " +
    "de la ciudad, El Castillo de los Tres Reyes del Morro y el complejo Morro Cabaña. " +
    "Para finalizar la aventura retornaremos en un ómnibus colectivo, conocidos como " +
    "guaguas por los cubanos, así cerraremos con broche de oro y usted podrá sentirse " +
    "durante estas horas como un local.",
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
    "Cristo de La Habana",
    "Casa del Ché",
    "Museo de la Crisis de los Misiles",
    "Castillo San Carlos de la Cabaña",
    "Castillo Los Tres Reyes del Morro",
    "Faro de la Bahía",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura", "Naturaleza"],
  price: 50,
};

export default function HabanaViejaMorroCabañaExperience() {
  return <ExperiencePage experience={experience} />;
}
