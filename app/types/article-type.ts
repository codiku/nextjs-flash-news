export interface ArticleListResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export type ArticleCategory =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

interface ArticleSource {
  id: string | null;
  name: string | null;
}

export interface Article {
  source: ArticleSource;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
