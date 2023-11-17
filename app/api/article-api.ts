import {
  Article,
  ArticleCategory,
  ArticlesResponse,
} from "@/app/types/article-type";
import {
  FAKE_ARTICLE_BY_CATEGORIES,
  FAKE_ARTICLE_LIST,
  delayedFetch,
} from "../lib/mock";
const DEFAULT_PARAMS = `apikey=${process.env.NEWS_API_KEY}&country=us&language=en`;

export class ArticleAPI {
  static async fetchToday(): Promise<Article[]> {
    // const resp = (await (
    //   await fetch(`${process.env.NEWS_API}news?${DEFAULT_PARAMS}`)
    // ).json()) as ArticlesResponse;
    // return resp.results;

    return delayedFetch(FAKE_ARTICLE_LIST.results, 1);
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.NEWS_API}news?${DEFAULT_PARAMS}&category=${category}`
    //     )
    //   ) // 1 day cache
    //     .json()) as ArticlesResponse
    // ).results;

    return delayedFetch(FAKE_ARTICLE_BY_CATEGORIES[category]);
  }

  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = decodeURIComponent(title).replace(/:/g, "");
    return (
      (await (
        await fetch(
          `${process.env.NEWS_API}news?${DEFAULT_PARAMS}&qInTitle=${formatedTitle}`
        )
      ).json()) as ArticlesResponse
    ).results[0];
    // return delayedFetch(FAKE_ARTICLE_LIST.results[7]);
  }
}
