import inception from "../assets/inception.jpg";
import amelie from "../assets/Amelie.jpg";
import interstellar from "../assets/interstellar.jpg";
import Conjuring from "../assets/Conjuring.jpg";
import lord from "../assets/seigneurAnneau.jpg";

const Movies = [
    {
      titre: "Inception",
      description: "Un voleur qui pénètre dans les rêves des autres pour voler des secrets.",
      Image: inception,
      note: 8.8
    },
    {
      titre: "Le Fabuleux Destin d'Amélie Poulain",
      description: "L'histoire d'une jeune femme qui décide de changer la vie des gens autour d'elle.",
      Image: amelie,
      note: 8.3
    },
    {
      titre: "Interstellar",
      description: "Un groupe d'explorateurs voyage à travers un trou de ver dans l'espace.",
      Image:interstellar,
      note: 8.6
    }
    ,
    {
      titre: "Conjuring",
      description: "L'histoire vraie d'un couple qui enquête sur des événements paranormaux.",
      Image: Conjuring,
      note: 7.5
    },
    {
      titre: "Le Seigneur des Anneaux",
      description: "Un jeune hobbit doit détruire un anneau pour sauver la Terre du Milieu.",
      Image: lord,
      note: 8.8

    }

  ];

  export default  Movies;
