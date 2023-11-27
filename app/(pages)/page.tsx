import { ArticleApi } from "@/app/api/article-api";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();
  return (
    <div>
      <br />
      <br />- {JSON.stringify(articles)}
    </div>
  );
}
