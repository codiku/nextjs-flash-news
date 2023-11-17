import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { findImgByCat } from "@/app/lib/images";
import { Article } from "@/app/types/article-type";
import defaultNewsPng from "@/public/default-news.png";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export function CardArticle(p: { article: Article }) {
  const { article } = p;
  const category = article.category[0];
  return (
    <Link href={"/articles/title/" + article.title}>
      <Card className="w-80 cursor-pointer hover:bg-slate-50 transition transform hover:scale-105">
        <CardHeader className="py-4">
          <CardTitle className="text-md capitalize flex items-center gap-2 ">
            <div className="flex w-10 h-10 justify-center items-center border border-slate-300 rounded-full ">
              <Image
                alt={`Icon for ${category}`}
                height={20}
                width={20}
                className="w-5 h-5"
                src={findImgByCat(category) || ""}
              />
            </div>
            <div>{category}</div>
          </CardTitle>
          <CardDescription>
            Published {new Date(article.pubDate).toDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
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
        </CardContent>
      </Card>
    </Link>
  );
}

export const CardArticleSkel = () => {
  return <Skeleton className="w-80 h-[348px]" />;
};
