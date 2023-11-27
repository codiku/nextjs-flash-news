import { ArticleApi } from "@/app/api/article-api";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();

  http: return <div>{JSON.stringify(articles)}</div>;
}
