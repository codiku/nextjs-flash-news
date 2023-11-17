import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function CardMiniNews(p: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="lg:w-80">
      <CardHeader className="py-4">
        <CardTitle className="text-md ">{p.title}</CardTitle>
        <CardDescription>{p.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">{p.children}</CardContent>
    </Card>
  );
}

export function CardMiniNewsSkel() {
  return <Skeleton className="h-[148px] min-w-[320px]" />;
}
