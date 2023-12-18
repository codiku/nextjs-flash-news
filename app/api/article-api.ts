import { delayResponse } from "../lib/mock";
import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";
import { headers } from "next/headers";
const headersList = headers();

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    // const host = headersList.get("host"); // to get domain
    // const url = headersList.get("next-url"); // to get url
    // console.log(host, " and ", url);
    // const reqUrl = headersList.get("referer");
    // console.log("he rereqUrl);
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
        await fetch(`${process.env.API_BASE_URL}?category=${category}`)
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = title.replace("/:/g", "");
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}?qInTitle=${formatedTitle}`)
      ).json()) as ArticleListResponse
    ).results[0];
  }
}
