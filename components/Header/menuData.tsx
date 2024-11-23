import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Actualités",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Scientifiques",
        newTab: false,
        path: "/#scientifiques",
      },
      {
        id: 32,
        title: "Académiques",
        newTab: false,
        path: "/#academiques",
      },
    ],
  },
  {
    id: 3,
    title: "Publications",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Les cahiers du cahdiip",
        newTab: false,
        path: "/#publications",
        // path: "/cahierDuCahdiip",
      },
      {
        id: 32,
        title: "Ouvrages",
        newTab: false,
        path: "/#publications",
        // path: "/ouvrages",
      },
      {
        id: 32,
        title: "Archives",
        newTab: false,
        path: "/#publications",
        // path: "/archives",
      },
    ],
  },
  {
    id: 4,
    title: "Axes de recherches",
    newTab: false,
    path: "/#axederecherche",
  },
  {
    id: 4,
    title: "Membres",
    newTab: false,
    path: "/#membre",
  },
  {
    id: 4,
    title: "Contacts",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;
