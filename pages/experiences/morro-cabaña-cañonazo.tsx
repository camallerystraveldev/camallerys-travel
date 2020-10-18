import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Morro Cabaña + Cañonazo",
  locations: ["Habana Vieja", "Casablanca"],
  duration: 3.5,
  groupSize: 15,
  included: ["Entrada a la Fortaleza San Carlos de la Cabaña", "Souvenir"],
  languages: ["español", "inglés"],
  description:
    "Si de tradiciones se trata este es el recorrido ideal, podrán descubrir los tesoros " +
    "medievales que se guarda la otra parte de la ciudad, al otro extremo de la bahía de la " +
    "Habana. Visitaremos la Fortaleza San Carlos de la Cabaña, una de las fortificaciones " +
    "militares más imponentes del Caribe construida por los españoles durante el siglo " +
    "XVIII. Aquí seremos participes de la ceremonia del cañonazo, una de las tradiciones " +
    "más importantes de la isla durante siglos. Recorreremos y admiraremos los valores " +
    "arquitectónicos y culturales que alberga el interior de la fortificación. Para finalizar el " +
    "recorrido visitaremos la majestuosa escultura del Cristo de la Habana y quedaremos " +
    "enamorados de la imagen de una habana nocturna iluminada por la luz de las " +
    "estrellas.",
  places: [
    "Cristo de La Habana",
    "Casa del Ché",
    "Museo de la Crisis de los Misiles",
    "Castillo San Carlos de la Cabaña",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura"],
  price: 50,
};

export default function MorroCabañaCañonazoExperience() {
  return <ExperiencePage experience={experience} />;
}
