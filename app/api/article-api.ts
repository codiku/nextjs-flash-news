import { Article, ArticleListResponse } from "../types/article-type";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_3280569b014cbfc0b9a13f2b4fd6883c50139&language=en&country=us"
        )
      ).json()) as ArticleListResponse
    ).results;
  }
}
