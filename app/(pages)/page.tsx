import { LatestNews } from "@/app/components/LatestNews/LatestNews";
import { CryptoNews } from "../components/CryptoNews/CryptoNews.server";
//import { CryptoNews } from "../components/CryptoNews/CryptoNews.client";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
export default function IndexPage() {
  return (
    <div className="flex justify-between">
      <Suspense
        fallback={
          <div>
            <Skeleton height={40} width={218} count={1} />
            {Array.from({ length: 5 }).map((i) => (
              <Skeleton height={344} width={320} count={1} className="mt-16" />
            ))}
          </div>
        }
      >
        <LatestNews />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <Skeleton height={28} width={140} count={1} />
            <Skeleton height={108} width={320} count={1} className="mt-14" />
          </div>
        }
      >
        <CryptoNews />
      </Suspense>
    </div>
  );
}
