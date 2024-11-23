"use client";
import { Publication } from "@/types/publication";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiFileText } from "react-icons/fi"; // Icône PDF

const PublicationItem = ({ publication }: { publication: Publication }) => {
  const { thumbnail, title, metadata, pdfUrl } = publication;

  return (
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
      <Link href={pdfUrl} target="_blank" className="relative block aspect-[368/239]">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
      </Link>
      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white flex items-center">
          <FiFileText className="mr-2 text-primary" />
          <Link href={pdfUrl} target="_blank" className="hover:text-primary dark:hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{metadata}</p>
      </div>
    </motion.div>
  );
};

export default PublicationItem;
