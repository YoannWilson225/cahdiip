"use client";

import { Publication } from "@/types/publication";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiFileText } from "react-icons/fi";

const SecurePdfViewer = dynamic(() => import("./SecurePdfViewer"), { ssr: false });

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
        <div className="relative block aspect-[368/239]">
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        </div>
        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white flex items-center">
            <FiFileText className="mr-2 text-primary" />
            <button
              className="hover:text-primary dark:hover:text-primary underline"
              onClick={() => setIsViewerOpen(true)}
            >
              {title}
            </button>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{metadata}</p>
        </div>
      </motion.div>

      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setIsViewerOpen(false)} // Ferme le modal en cliquant sur le fond
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
            <SecurePdfViewer pdfUrl={pdfUrl} />
          </div>
        </div>
      )}
    </>
  );
};

export default PublicationItem;
