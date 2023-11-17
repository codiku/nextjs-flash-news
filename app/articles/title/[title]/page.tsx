import { ArticleAPI } from "@/app/api/article-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import defaultNews from "@/public/default-news.png";
import topPng from "@/public/top.png";
import Image from "next/image";
import Link from "next/link";

export default async function ArticleDetail(p: { params: { title: string } }) {
  const article = await ArticleAPI.fetchByTitle(p.params.title);
  const category = article.category[0];
  return (
    <div className="flex justify-center">
      <Card className="max-w-7xl p-4">
        <CardHeader className="py-4 ">
          <CardTitle className="text-md capitalize flex items-center gap-2 ">
            <div className="flex justify-center items-center border border-slate-300 rounded-full w-10 h-10  ">
              <Image alt={`Icon for ${category}`} src={topPng} />
            </div>
            <div>{category}</div>
          </CardTitle>
          <CardDescription>
            Published {new Date(article.pubDate).toDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-6xl">
          <h1>{article.title}</h1>
          <h3>{article.description}</h3>
          <div className="flex justify-center">
            <Image
              alt={"Image for article"}
              className="rounded-lg"
              height={200}
              width={300}
              src={article.image_url || defaultNews}
            />
          </div>
          <p className="prose-lg text-justify">{article.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            Written by <span className="font-semibold">{article.creator}</span>
          </div>
          <Link className="text-blue-500 underline " href={article.link}>
            Source{" "}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
