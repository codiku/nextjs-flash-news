import { ArticleAPI } from "@/app/api/article-api";
import topPng from "@/public/top.png";
import Image from "next/image";

export async function LatestNews() {
  let latestArticles = await ArticleAPI.fetchToday();
  console.log("*** RUNNING the component");
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} className="w-10 h-10" alt={`Top icon`} />
        <h1 className="text-4xl font-bold capitalize">Latest news</h1>
      </div>
      {Math.random()}
      <br />
      {JSON.stringify(latestArticles)}
    </div>
  );
}
