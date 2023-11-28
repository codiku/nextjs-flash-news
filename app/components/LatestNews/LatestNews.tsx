import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "@/app/components/ArticleCard/ArticleCard";
import { ArticleList } from "../ArticleList/ArticleList";

export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
