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
    const d = (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}?category=${category}&apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
        )
      ).json()) as ArticleListResponse
    ).results;
    console.log(
      `${process.env.API_BASE_URL}?category=${category}&apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
    );
    return d;
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = title.replace("/:/g", "");
    return (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}
         &qInTitle=${formatedTitle}`
        )
      ).json()) as ArticleListResponse
    ).results[0];
  }
}
