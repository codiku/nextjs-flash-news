import { ArticleCard } from "@/app/components/ArticleCard/ArticleCard";
import { Article } from "@/app/types/article-type";

export function ArticleList(p: { articles: Article[] }) {
  return (
    <div className="flex justify-center md:justify-normal flex-wrap gap-x-8 gap-y-20">
      {p.articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
