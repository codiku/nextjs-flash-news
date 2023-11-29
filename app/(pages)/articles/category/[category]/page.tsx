import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { NAV_ITEMS } from "@/app/components/Nav/constant";
import { CATEGORIES_ITEMS } from "@/app/constant";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

// export const revalidate = 1000
// export function generateStaticParams() {
//   return NAV_ITEMS.map((navItem) => {
//     return {
//       category: navItem.category,
//     };
//   });
// }
export default async function ArticlesByCategoryPage(p: {
  params: { category: ArticleCategory; articles: Article[] };
}) {
  const articles = await ArticleApi.fetchByCategory(p.params.category);
  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
          src={CATEGORIES_ITEMS[p.params.category].src}
          className="h-10 w-10"
          alt="Latest news icon"
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.category} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
