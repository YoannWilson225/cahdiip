'use client';

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import PublicationItem from "./PublicationItem";
import PublicationData from "./publicationData";

const categories = ["Les cahiers du cahdiip", "Ouvrages", "Archives"];

const Publications = () => {
  const [visibleCount, setVisibleCount] = useState<{ [key: string]: number }>({
    "Les cahiers du cahdiip": 3,
    "Ouvrages": 3,
    "Archives": 3,
  });

  const handleShowMore = (category: string) => {
    setVisibleCount((prev) => ({
      ...prev,
      [category]: prev[category] + 3, // Affiche 3 publications supplémentaires
    }));
  };

  return (
    <section id="publications" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Nos Publications`,
              subtitle: `Explorez nos documents PDF`,
              description: `Accédez à une collection variée de rapports, ouvrages et archives.`,
            }}
          />
        </div>
      </div>

      {categories.map((category) => {
        const publications = PublicationData.filter(
          (pub) => pub.category === category
        );
        return (
          <div key={category} className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {publications.slice(0, visibleCount[category]).map((publication) => (
                <PublicationItem key={publication._id} publication={publication} />
              ))}
            </div>
            {publications.length > visibleCount[category] && (
              <button
                onClick={() => handleShowMore(category)}
                className="mt-6 block mx-auto px-6 py-2 text-white bg-primary rounded hover:bg-primary-dark"
              >
                Voir plus
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Publications;
