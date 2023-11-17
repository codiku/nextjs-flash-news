import { ArticleAPI } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { NAV_ITEMS } from "@/app/components/Nav/constant";
import { findImgByCat } from "@/app/lib/images";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

export const revalidate = 1000;

// Static rendering
export async function generateStaticParams() {
  return NAV_ITEMS.map((nav) => {
    return {
      params: {
        category: nav.category,
      },
    };
  });
}

export default async function ArticlesFilteredByCategories(p: {
  params: { category: ArticleCategory; articles: Article[] };
}) {
  const articles = await ArticleAPI.fetchByCategory(p.params.category);
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
          src={findImgByCat(p.params.category) || ""}
          className="w-10 h-10"
          alt={`Top icon`}
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.category} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
