import { StaticImageData } from "next/image";

export interface CategoryItem {
  src: StaticImageData;
  alt: string;
  category: ArticleCategory;
  date?: string;
}

export type ArticleCategory =
  | "business"
  | "crime"
  | "domestic"
  | "education"
  | "entertainment"
  | "environment"
  | "food"
  | "health"
  | "other"
  | "politics"
  | "science"
  | "sports"
  | "technology"
  | "top"
  | "tourism"
  | "world";
