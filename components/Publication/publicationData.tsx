import { Publication } from "@/types/publication";

const PublicationData: Publication[] = [
  {
    _id: 1,
    category: "Les cahiers du cahdiip",
    title: "Rapport Annuel 2023",
    pdfUrl: "/pdfs/rapport-annuel-2023.pdf",
    thumbnail: "/images/pdf-thumbnail-01.png",
    metadata: "Découvrez les chiffres et analyses clés de l'année 2023.",
  },
  {
    _id: 2,
    category: "Ouvrages",
    title: "Guide de l'utilisateur",
    pdfUrl: "/pdfs/guide-utilisateur.pdf",
    thumbnail: "/images/pdf-thumbnail-02.png",
    metadata: "Instructions complètes pour les utilisateurs débutants.",
  },
  {
    _id: 3,
    category: "Archives",
    title: "Résumé des travaux",
    pdfUrl: "/pdfs/resume-travaux.pdf",
    thumbnail: "/images/pdf-thumbnail-03.png",
    metadata: "Un aperçu des projets récents et des initiatives futures.",
  },
  // Ajoutez d'autres publications ici
];

export default PublicationData;
