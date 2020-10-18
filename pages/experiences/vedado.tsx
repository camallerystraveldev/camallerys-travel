import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Vedado",
  locations: ["Vedado"],
  duration: 4,
  groupSize: 10,
  included: ["Agua embotellada", "Trago", "Souvenir"],
  languages: ["español", "inglés"],
  description:
    "En la isla a pesar de estar rodeados de agua tenemos en nuestro interior un conjunto " +
    "de valores arquitectónicos dignos de llamar la atención del visitante. Durante el " +
    "recorrido por el Vedado podremos descubrir juntos del esplendor arquitectónico y" +
    "cultural de la zona más urbana de la cuidad, desde la historia de polémicos edificios " +
    "como el Hotel Nacional y el antiguo Hotel Hilton, hoy Habana Libre, hasta la calma y " +
    "suntuosa belleza de la cuidad de los muertos: la Necrópolis de Colon. Juntos " +
    "caminaremos por las calles más transitadas del Vedado y centro recreativo del " +
    "habanero. Al final del recorrido disfrutaremos de un exquisito mojito en la terraza del " +
    "Hotel Nacional con vistas al litoral de la ciudad.",
  places: [
    "Universidad de La Habana",
    "Calle 23 y 12",
    "Cementerio de Colón",
    "Coppelia",
    "Hotel Habana Libre (antiguo Hotel Hilton)",
    "Calle 23",
    "Feria Artesanal",
    "Pabellón Cuba",
    "Hotel Nacional de Cuba",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura", "Cocteleria"],
  price: 45,
};

export default function VedadoExperience() {
  return <ExperiencePage experience={experience} />;
}
