import { StaticImageData } from "next/image";

export interface Article {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string;
  content: string | null;
  pubDate: string;
  image_url: string | StaticImageData | null;
  source_id: string;
  source_priority: number;
  country: string[];
  category: ArticleCategory[];
  language: string;
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

export interface ArticlesResponse {
  status: string;
  totalResults: number;
  nextPage: string;
  results: Article[];
}

export interface CategoryItem {
  src: StaticImageData;
  alt: string;
  category: ArticleCategory;
  date?: string;
}
