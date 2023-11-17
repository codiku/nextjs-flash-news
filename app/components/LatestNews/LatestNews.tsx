import { ArticleAPI } from "@/app/api/article-api";
import { ArticleList, ArticleListSkel } from "../ArticleList/ArticleList";

import { Article } from "@/app/types/article-type";
import topPng from "@/public/top.png";
import Image from "next/image";
import { Suspense } from "react";

export const revalidate = 0;

export async function LatestNews() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} className="w-10 h-10" alt={`Top icon`} />
        <h1 className="text-4xl font-bold capitalize">Latest news</h1>
      </div>
      <Suspense fallback={<ArticleListSkel />}>
        <LatestNewsList />
      </Suspense>
    </div>
  );
}
const LatestNewsList = async () => {
  let latestArticles: Article[] = [];
  latestArticles = await ArticleAPI.fetchToday();

  if (latestArticles.length === 0) {
    return <div>No articles found</div>;
  }
  return <ArticleList articles={latestArticles} />;
};
