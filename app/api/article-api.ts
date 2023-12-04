import {
  FAKE_ALL_ARTICLES,
  FAKE_ARTICLE_BY_CATEGORIES,
  FAKE_LATEST_ARTICLES,
  delayResponse,
} from "../lib/mock";
import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";

const DEFAULT_PARAMS = "language=en&country=us";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results;
    return FAKE_LATEST_ARTICLES;
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}
    //       &category=${category}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results;
    return FAKE_ARTICLE_BY_CATEGORIES[category];
  }
  static async fetchByTitle(title: string): Promise<Article> {
    // const formatedTitle = title.replace("/:/g", "");
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}
    //       &qInTitle=${formatedTitle}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results[0];
    return FAKE_ALL_ARTICLES.find(
      (article) => article.title === decodeURIComponent(title)
    ) as Article;
  }
}
