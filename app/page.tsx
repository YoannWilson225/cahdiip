import { Metadata } from "next";
import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
// import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Publication from "@/components/Publication";
import SearchAxe from "@/components/SearchAxe";
// import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";
import Member from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "CAHDIIP",
  description: "Site web du Centre Africain d’Histoire du Droit des Institutions et des Idées Politiques",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Feature /> */}
      <FeaturesTab />
      <Publication />
      <SearchAxe />
      <Member />
      {/* <Brands />
      <About />
      <FunFact />
      <Integration />
      <CTA />
      <Pricing />
      <Contact /> */}
    </main>
  );
}
