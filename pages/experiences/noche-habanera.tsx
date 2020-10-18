import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Noche Habanera",
  locations: ["Vedado"],
  duration: 5.5,
  groupSize: 15,
  included: ["Bebida en cada uno de los sitios"],
  languages: ["español", "inglés"],
  description:
    "Se dice que los mejores amigos se hacen con una copa en la mano, disfruta esta " +
    "experiencia nocturna en la isla, descubre cómo se mueve la Habana más allá de los " +
    "conocidos sitios turísticos, conoce una cara diferente que usted no es capaz de " +
    "imaginar. Iniciaremos el recorrido esperando la caída del sol en un sitio donde las " +
    "vistas al mar y unas ricas cervezas nacionales crearán el clima ideal para el inicio de " +
    "la noche. Después nos dirigiremos hacia la Fábrica de Arte, un lugar donde se " +
    "fusionan las artes plásticas, la música y unos mojitos espectaculares para garantizar " +
    "una noche llena de momentos divertidos e inolvidables. Más tarde llevaremos todo " +
    "nuestro entusiasmo, entre cervezas y mojitos, hacia otro bar, el lugar perfecto para " +
    "cerrar la noche con broche de oro. Además de pasar una velada espectacular en los " +
    "bares más movidos de la ciudad tendrá la oportunidad de probar diferentes cocteles " +
    "cubanos así como de desmadrarse y bailar al ritmo de la música. Siéntase un cubano " +
    "nato rodeado de amigos con los cuales podrá pasar la mejor de las noches en la isla. ",
  places: ["Chorrera", "Fábrica de Arte", "King Bar"],
  categories: ["Fotografia", "Historia", "Coctelería", "Arte"],
  price: 60,
};

export default function NocheHabaneraExperience() {
  return <ExperiencePage experience={experience} />;
}
