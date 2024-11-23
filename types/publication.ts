export interface Publication {
  _id: number;
  category: string; // La catégorie à laquelle appartient la publication
  title: string;
  pdfUrl: string;
  thumbnail: string;
  metadata: string;
}
