import { Experience } from "../../types";
import ExperiencePage from "../../components/experience-page";

const experience: Experience = {
  title: "Vedado + Playa",
  locations: ["Vedado", "Playa"],
  duration: 5,
  groupSize: 8,
  included: [],
  languages: ["español", "inglés"],
  description:
    "Lugares como la Universidad de la Habana y el Coppelia siempre han llamado la " +
    "atención del visitante por ser lugares tan frecuentados por el local, deje el rol de " +
    "turista en casa y siéntase un cubano más. Durante este recorrido podrá conocer más a " +
    "fondo sobre la vida universitaria en Cuba así como admirar la majestuosa Colina " +
    "universitaria, joya arquitectónica de nuestra ciudad. Vivirá la experiencia de entrar al " +
    "complejo Coppelia, punto de reunión y centro de la vida recreativa del cubano y " +
    "degustará su auténtico helado. Entre charlas y risas finalizaremos el recorrido en el " +
    "paseo marítimo donde usted a la orilla del mar podrá disfrutar de una excelente vista " +
    "al mismo tiempo que le da respuestas a esas preguntas que siempre ha tenido presente " +
    "sobre la realidad cubana.",
  places: [
    "Universidad de La Habana",
    "Estadio Universitario",
    "Coppelia",
    "Paseo Marítimo",
  ],
  categories: ["Fotografia", "Historia", "Arquitectura", "Naturaleza"],
  price: 0,
};

export default function VedadoPlayaExperience() {
  return <ExperiencePage experience={experience} />;
}
