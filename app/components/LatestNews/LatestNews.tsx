import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "@/app/components/ArticleCard/ArticleCard";
import { ArticleList } from "../ArticleList/ArticleList";
import topPng from "@/public/top.png";
import Image from "next/image";
export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} className="h-10 w-10" alt="Latest news icon" />
        <h1>Latest news</h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
