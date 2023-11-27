import { CATEGORIES_ITEMS } from "@/app/constant";
import { Article } from "@/app/types/article-type";
import defaultNewsPng from "@/public/default-news.png";
import Image from "next/image";
import Link from "next/link";

export function ArticleCard(p: { article: Article }) {
  const { article } = p;
  const category = article.category[0];

  return (
    <Link href={"#"}>
      <div className="w-80 cursor-pointer hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 pt-1 pb-4 px-6 rounded-xl shadow-xs ">
        <div className="py-4">
          <div className="text-md capitalize flex items-center gap-2 ">
            <div className="flex w-10 h-10 justify-center items-center border border-slate-300 rounded-full ">
              <Image
                alt={`Icon for ${category}`}
                height={20}
                width={20}
                className="w-5 h-5"
                src={CATEGORIES_ITEMS[category].src}
              />
            </div>
            <div className="font-bold text-md">{category}</div>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            Published {new Date(article.pubDate).toDateString()}
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-xl line-clamp-2 h-14">
            {article.title}
          </div>
          <Image
            className="rounded-xl w-full h-40"
            priority
            alt={"Image for article"}
            height={200}
            width={300}
            src={article.image_url || defaultNewsPng}
          />
        </div>
      </div>
    </Link>
  );
}
