import inception from "../assets/inception.jpg";
import amelie from "../assets/Amelie.jpg";
import interstellar from "../assets/interstellar.jpg";
import Conjuring from "../assets/Conjuring.jpg";
import lord from "../assets/seigneurAnneau.jpg";

const Movies = [
    {
      id: 1,
      titre: "Inception",
      description: "Un voleur qui pénètre dans les rêves des autres pour voler des secrets.",
      Image: inception,
      note: 8.8, 
      More:"https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      id: 2,
      titre: "Le Fabuleux Destin d'Amélie Poulain",
      description: "L'histoire d'une jeune femme qui décide de changer la vie des gens autour d'elle.",
      Image: amelie,
      note: 8.3,
      More:"https://www.youtube.com/watch?v=HUECWi5pX7o"
    },
    {
      id: 3,
      titre: "Interstellar",
      description: "Un groupe d'explorateurs voyage à travers un trou de ver dans l'espace.",
      Image:interstellar,
      note: 8.6,
      More:"https://www.youtube.com/watch?v=0vxOhd4qlnA"
    }
    ,
    {
      id: 4,
      titre: "Conjuring",
      description: "L'histoire vraie d'un couple qui enquête sur des événements paranormaux.",
      Image: Conjuring,
      note: 7.5,
      More:"https://www.youtube.com/watch?v=McOmzgX09wo"
    },
    {
      id: 5,
      titre: "Le Seigneur des Anneaux",
      description: "Un jeune hobbit doit détruire un anneau pour sauver la Terre du Milieu.",
      Image: lord,
      note: 8.8 ,
      More:"https://www.youtube.com/watch?v=nalLU8i4zgs"

    }

  ];

  export default  Movies;
