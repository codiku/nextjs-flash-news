import { delayResponse } from "../lib/mock";
import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return delayResponse(
      (
        (await (
          await fetch(`${process.env.API_BASE_URL}/api/news`)
        ).json()) as ArticleListResponse
      ).results,
      2000
    );
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}/api/news?category=${category}`)
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = title.replace("/:/g", "");
    return (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}/api/news?qInTitle=${formatedTitle}`
        )
      ).json()) as ArticleListResponse
    ).results[0];
  }
}
