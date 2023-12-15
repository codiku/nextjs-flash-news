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

const DEFAULT_PARAMS = "country=us";

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}/top-headlines?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
        )
      ).json()) as ArticleListResponse
    ).articles.filter((article) => article.title !== "[Removed]");
    // return FAKE_LATEST_ARTICLES;
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}/top-headlines?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}&category=${category}`
        )
      ).json()) as ArticleListResponse
    ).articles.filter((article) => article.title !== "[Removed]");
    // return FAKE_ARTICLE_BY_CATEGORIES[category];
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const d = (
      (await (
        await fetch(
          `${process.env.API_BASE_URL}/everything?q=\"${title}\"&apiKey=${process.env.API_KEY}&page=1`
        )
      ).json()) as ArticleListResponse
    ).articles;
    console.log(d);
    return d.filter((article) => article.title !== "[Removed]")[0];
    /* return FAKE_ALL_ARTICLES.find(
      (article) => article.title === decodeURIComponent(title)
    ) as Article;*/
  }
}
