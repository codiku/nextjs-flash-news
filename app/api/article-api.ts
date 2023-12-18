import { Article, ArticleListResponse } from "../types/article-type";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    console.log("ENV API KEY accessible on server only", process.env.API_KEY);
    return (
      (await (
        await fetch(`http://localhost:3090/news`)
      ).json()) as ArticleListResponse
    ).results;
  }
}
