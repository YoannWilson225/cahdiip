"use client";

import React, { useState, useEffect } from "react";
import { FeatureTab } from "@/types/featureTab";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";

// Chargement dynamique du visualiseur PDF
const SecurePdfViewer = dynamic(() => import("../Publication/SecurePdfViewer"), { ssr: false });

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, pdfUrl, thumbnail } = featureTab;
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
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Texte descriptif */}
        <div className="lg:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p
            className="mb-5 cursor-pointer text-primary hover:underline"
            onClick={() => setIsViewerOpen(true)}
          >
            {desc1}
          </p>
          <p
            className="cursor-pointer text-primary hover:underline"
            onClick={() => setIsViewerOpen(true)}
          >
            {desc2}
          </p>
        </div>

        {/* Carte PDF */}
        <motion.div
          className="relative w-full max-w-[500px] lg:w-1/2 rounded-lg bg-white shadow-solid-8 dark:bg-blacksection"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            className="relative block aspect-video cursor-pointer"
            onClick={() => setIsViewerOpen(true)}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-black dark:text-white flex items-center">
              <FiFileText className="mr-2 text-primary" />
              <button
                className="hover:text-primary dark:hover:text-primary underline"
                onClick={() => setIsViewerOpen(true)}
              >
                Voir le PDF
              </button>
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Modale pour afficher le PDF */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setIsViewerOpen(false)} // Ferme la modale au clic sur le fond
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur la modale
          >
            <button
              className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded"
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

export default FeaturesTabItem;
