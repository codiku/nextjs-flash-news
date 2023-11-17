import {
  CardArticle,
  CardArticleSkel,
} from "@/app/components/CardArticle/CardArticle";
import { Article } from "@/app/types/article-type";

export function ArticleList(p: { articles: Article[] }) {
  return (
    <div className="flex justify-center md:justify-normal flex-wrap gap-x-8 gap-y-20">
      {p.articles.map((article) => (
        <CardArticle key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export const ArticleListSkel = () => {
  return (
    <div className="flex justify-center md:justify-normal flex-wrap gap-x-8 gap-y-20">
      {Array.from({ length: 5 }).map((j, i) => (
        <CardArticleSkel key={i} />
      ))}
    </div>
  );
};
