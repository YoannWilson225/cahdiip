"use client";

import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const SecurePdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  return (
    <div
      className="secure-pdf-viewer"
      style={{
        height: "80vh", // Occupe 80% de la hauteur disponible du modal
        width: "100%", // Prend tout l'espace horizontal disponible
      }}
    >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default SecurePdfViewer;
