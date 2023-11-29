import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";

const DEFAULT_PARAMS = `apiKey=${process.env.API_KEY}&language=en&country=us`;
const DEFAULT_URL = `${process.env.API_BASE_URL}?${DEFAULT_PARAMS}`;
export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return ((await (await fetch(DEFAULT_URL)).json()) as ArticleListResponse)
      .results;
  }

  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(`${DEFAULT_URL}&category=${category}`)
      ).json()) as ArticleListResponse
    ).results;
  }
}
