"use client";

import { Publication } from "@/types/publication";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiFileText } from "react-icons/fi";
import SecurePdfViewer from "./SecurePdfViewer";

const PublicationItem = ({ publication }: { publication: Publication }) => {
  const { thumbnail, title, metadata, pdfUrl } = publication;
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Bloque le scroll de la page principale lorsque le modal est ouvert
  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
    } else {
      document.body.style.overflow = ""; // Rétablit le scroll
    }
  }, [isViewerOpen]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <div
          className="relative block aspect-[368/239] cursor-pointer"
          onClick={() => setIsViewerOpen(true)} // Ouvre le PDF au clic sur l'image
        >
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        </div>
        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white flex items-center">
            <FiFileText className="mr-2 text-primary" />
            <button
              className="hover:text-primary dark:hover:text-primary underline"
              onClick={() => setIsViewerOpen(true)} // Ouvre aussi au clic sur le titre
            >
              {title}
            </button>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{metadata}</p>
        </div>
      </motion.div>

      {/* Modal pour le PDF */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-start justify-center"
          onClick={() => setIsViewerOpen(false)} // Ferme le modal en cliquant sur l'arrière-plan
          style={{
            paddingTop: "5rem", // Ajoute un espace de 5rem en haut
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
            style={{
              maxHeight: "90vh", // Limite la hauteur pour éviter qu'il dépasse l'écran
            }}
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur le modal
          >
            <button
              className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded focus:outline-none"
              onClick={() => setIsViewerOpen(false)}
            >
              Fermer
            </button>
            <SecurePdfViewer pdfUrl={pdfUrl} />
          </div>
        </div>
      )}
    </>
  );
};

export default PublicationItem;
