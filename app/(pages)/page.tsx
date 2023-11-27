import { ArticleApi } from "../api/article-api";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();
  console.log("***", articles);

  return <div>{JSON.stringify(articles)}</div>;
}
