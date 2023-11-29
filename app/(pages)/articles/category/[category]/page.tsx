import { Article, ArticleCategory } from "@/app/types/article-type";

export default async function ArticlesByCategoryPage(p: {
  params: { category: ArticleCategory; articles: Article[] };
}) {
  return <div>Hi from {p.params.category}</div>;
}
