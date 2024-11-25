import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import image3 from "@/public/images/user/user-03.png";
import image4 from "@/public/images/user/user-04.png";
import { Testimonial } from "@/types/testimonial";


export const memberData: Testimonial[] = [
  {
    id: 1,
    name: "Séraphin Néné",
    designation: "Le Directeur du CAHDIIP",
    image: image1,
    content:"Le Directeur du CAHDIIP, le Professeur Séraphin Néné",
  },
  {
    id: 2,
    name: "Francis Yeo",
    designation: "Dr. Francis Yeo",
    image: image2,
    content:"Membre",
  },
  {
    id: 3,
    name: "Josée Damana",
    designation: "Dr. Josée Damana",
    image: image3,
    content:"Trésorière",
  },
  {
    id: 4,
    name: "Fidèle Tra Bi,",
    designation: "Dr.  Fidèle Tra Bi,",
    image: image4,
    content:"Secrétaire",
  },
];
