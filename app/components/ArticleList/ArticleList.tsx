import { Article } from "@/app/types/article-type";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export function ArticleList(p: { articles: Article[] }) {
  return (
    <div className="flex justify-center flex-wrap gap-x-8 gap-y-20 md:justify-normal">
      {p.articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
