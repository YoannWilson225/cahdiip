import { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturesTab from "@/components/FeaturesTab";
import Publication from "@/components/Publication";
import SearchAxe from "@/components/SearchAxe";
import Contact from "@/components/Contact";
import Member from "@/components/Members";

export const metadata: Metadata = {
  title: "CAHDIIP",
  description: "Site web du Centre Africain d’Histoire du Droit des Institutions et des Idées Politiques",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesTab />
      <Publication />
      <SearchAxe />
      <Member />
      <Contact />
    </main>
  );
}
