import { Article, ArticleListResponse } from "../types/article-type";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch("http://localhost:3090/news")
      ).json()) as ArticleListResponse
    ).results;
  }
}
