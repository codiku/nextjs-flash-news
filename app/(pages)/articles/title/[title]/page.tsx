import { ArticleApi } from "@/app/api/article-api";
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback";
import { CATEGORIES_ITEMS } from "@/app/constant";

import defaultNews from "@/public/default-news.png";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export default async function ArticleDetail(p: { params: { title: string } }) {
  const article = await ArticleApi.fetchByTitle(p.params.title);
  const category = article.category[0];

  const header = (
    <div className="space-y-2">
      <div className="text-md capitalize flex items-center gap-2">
        <div className="flex justify-center items-center border border-slate-300 rounded-full w-10 h-10  ">
          <Image
            alt={`Icon for ${category}`}
            src={CATEGORIES_ITEMS[category].src}
          />
        </div>
        <div className="font-semibold">{category}</div>
      </div>
      <div className="text-xs text-slate-500">
        Published {new Date(article.pubDate).toDateString()}
      </div>
    </div>
  );

  const body = (
    <div className="prose max-w-6xl space-y-4">
      <h1>{article.title}</h1>
      <h3>{article.description}</h3>
      <div className="flex justify-center">
        <ImageWithFallback
          alt={"Image for article"}
          className="rounded-lg"
          height={200}
          width={300}
          src={article.image_url || defaultNews}
          fallback={defaultNews}
        />
      </div>
      <p className="prose-lg text-justify">{article.content}</p>
    </div>
  );

  const footer = (
    <div className="flex justify-between">
      <div>
        Written by <span className="font-semibold">{article.creator}</span>
      </div>
      <Link className="text-blue-500 underline " href={article.link}>
        Source
      </Link>
    </div>
  );
  return (
    <div className="flex flex-col justify-center max-w-7xl p-4 space-y-6">
      {header}
      {body}
      {footer}
    </div>
  );
}
