import { Article, ArticleListResponse } from "../types/article-type";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `https://newsdata.io/api/1/news?apiKey=${process.env.API_KEY}&language=en&country=us`
        )
      ).json()) as ArticleListResponse
    ).results;
  }
}
