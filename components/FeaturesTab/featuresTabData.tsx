import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Actualités Scientifiques",
    desc1: `Programme COLLOQUE Faire et défaire les rois  (novembre 2024).`,
    desc2: ``,
    pdfUrl: "/pdf/programme COLLOQUE Faire et défaire les rois  (novembre 2024).pdf",
    thumbnail: "/images/pdf-thumbnail-scientifiques.png", // Assurez-vous que le chemin est valide
  },
  {
    id: "tabTwo",
    title: "Actualités Académiques",
    desc1: `Soutenance de thèse`,
    desc2: ``,
    pdfUrl: "/pdf/Thèse_finale__Amettey,_après_prise_en_compte_des_observations_definitifs_des_rapports_11_nov_24[1]_1-1 (1).pdf",
    thumbnail: "/images/pdf-thumbnail-academique.png", // Assurez-vous que le chemin est valide
  },
];


export default featuresTabData;
