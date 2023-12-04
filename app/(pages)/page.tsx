import {
  LatestNews,
  LatestNewsSkel,
} from "@/app/components/LatestNews/LatestNews";
import {
  CryptoNews,
  CryptoNewsSkel,
} from "../components/CryptoNews/CryptoNews.server";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default function IndexPage() {
  return (
    <div className="flex justify-between">
      <Suspense fallback={<LatestNewsSkel />}>
        <LatestNews />
      </Suspense>
      <Suspense fallback={<CryptoNewsSkel />}>
        <CryptoNews />
      </Suspense>
    </div>
  );
}
