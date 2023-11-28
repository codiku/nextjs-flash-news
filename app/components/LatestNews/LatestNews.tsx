import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "@/app/components/ArticleCard/ArticleCard";

export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();
  return (
    <>
      <ArticleCard article={articles[0]} />
    </>
  );
}
