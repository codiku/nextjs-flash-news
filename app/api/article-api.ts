import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";

const DEFAULT_PARAMS = "language=en&country=us";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}`)
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}?category=${category}`)
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByTitle(title: string): Promise<Article[]> {
    const formatedTitle = title.replace("/:/g", "");
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}?title=${formatedTitle}`)
      ).json()) as ArticleListResponse
    ).results;
  }
}
