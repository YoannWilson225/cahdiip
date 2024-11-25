"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";

// Chargement dynamique du visualiseur PDF
const SecurePdfViewer = dynamic(
  () => import("../Publication/SecurePdfViewer"),
  { ssr: false }
);

const Hero = () => {
  // Informations sur le PDF à afficher
  const heroPublication = {
    _id: 1,
    title: "Découvrez le CAHDIIP",
    pdfUrl: "/pdf/RESSUSCITER LE FUTUR 2.pdf",
    thumbnail: "/images/pdf-thumbnail-hero.png",
    metadata:
      "Un aperçu complet des objectifs, de la vision, et des réalisations du CAHDIIP.",
  };

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
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Texte de la section */}
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 CAHDIIP
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              RESSUSCITER{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                LE FUTUR
              </span>
            </h1>
            <p>
              Découvrez les racines juridiques, institutionnelles et politiques
              de l'Afrique pour éclairer les défis de demain.
            </p>

            {/* Affichage du PDF */}
            <div className="mt-10">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top rounded-lg bg-white p-4 shadow-solid-8 dark:bg-blacksection"
              >
                <div
                  className="relative block aspect-[368/239] cursor-pointer"
                  onClick={() => setIsViewerOpen(true)}
                >
                  <Image
                    src={heroPublication.thumbnail}
                    alt={heroPublication.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4">
                  <h3 className="mt-4 text-lg font-medium text-black dark:text-white flex items-center">
                    <FiFileText className="mr-2 text-primary" />
                    <button
                      className="hover:text-primary dark:hover:text-primary underline"
                      onClick={() => setIsViewerOpen(true)}
                    >
                      {heroPublication.title}
                    </button>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {heroPublication.metadata}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image de la section Hero */}
          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="shadow-solid-l dark:hidden"
                  src="/images/hero/hero.png"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden shadow-solid-l dark:block"
                  src="/images/hero/hero.png"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modale pour afficher le PDF */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setIsViewerOpen(false)} // Ferme la modale au clic sur le fond
        >
          <div
            className="relative w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant sur le modal
          >
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded"
              onClick={() => setIsViewerOpen(false)}
            >
              Fermer
            </button>
            <SecurePdfViewer pdfUrl={heroPublication.pdfUrl} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
