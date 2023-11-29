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
        await fetch(
          `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
        )
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}&category=${category}`
        )
      ).json()) as ArticleListResponse
    ).results;
  }
}
