export interface ArticleListResponse {
  status: string;
  totalResults: number;
  results: Article[];
  nextPage: string;
}

export interface Article {
  article_id: string;
  title: string;
  link: string;
  keywords?: string[] | null;
  creator?: string[] | null;
  video_url: any;
  description: string;
  content: string;
  pubDate: string;
  image_url?: string | null;
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
