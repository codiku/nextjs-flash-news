import { ArticleApi } from "@/app/api/article-api";
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback";
import { CATEGORIES_ITEMS } from "@/app/constant";
import Image from "next/image";
import defaultNewsPng from "@/public/default-news.png";
import Link from "next/link";
export default async function ArticleDetailPage(p: {
  params: { title: string };
}) {
  const article = await ArticleApi.fetchByTitle(p.params.title);

  //const category = article.category[0];
  const header = (
    <div className="space-y-2">
      {/*<div className="text-md capitalize flex items-center gap-2">
       <div className="flex justify-center items-center border border-slate-300 rounded-full w-10 h-10">
          <Image
            className="w-7 h-7"
            alt={"Icon for " + category}
            src={CATEGORIES_ITEMS[category].src}
          />
        </div>
        <div className="font-semibold">{category}</div>
      </div>*/}
      {article.publishedAt && (
        <div className="text-xs text-slate-500">
          Published {new Date(article.publishedAt).toDateString()}
        </div>
      )}
    </div>
  );
  const body = (
    <div className="space-y-4">
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <div className="flex justify-center">
        <ImageWithFallback
          alt="Image for article"
          className="rounded-lg"
          height={200}
          width={300}
          src={article.urlToImage || defaultNewsPng}
          fallback={defaultNewsPng}
        />
      </div>
      <p className="text-justify">{article.content}</p>
    </div>
  );
  const footer = (
    <div className="flex justify-between">
      <div>
        Written by <span className="font-semibold">{article.author}</span>
      </div>
      <Link className="text-blue-500 underline" href={article.url}>
        Source
      </Link>
    </div>
  );

  return (
    <div className="flex justify-center items-center ">
      <div className="prose space-y-6 max-w-6xl">
        {header}
        {body}
        {footer}
      </div>
    </div>
  );
}
