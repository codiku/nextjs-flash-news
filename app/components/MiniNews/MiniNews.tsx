import { Suspense } from "react";
import { CardMiniNewsSkel } from "../CardMiniNews/CardMiniNews";
import { CoronavirusNews } from "../CoronavirusNews/CoronavirusNews";
import { CryptoDisclaimer } from "../CryptoDisclaimer/CryptoDisclaimer";
import { CryptoNews } from "../CryptoNews/CryptoNews.server";
import { IssNews } from "../IssNews/IssNews";


export async function MiniNews() {
  console.log("CRYPTO MiniNews");
  return (
    <div>
      <h3 className="font-bold pb-10">
        <span className="animate-pulse mr-4">🔴</span> Real time data
      </h3>
      <ul className="space-y-3 whitespace-nowrap">
        <Suspense fallback={<CardMiniNewsSkel />}>
          <IssNews />
        </Suspense>
        <Suspense
          fallback={
            <div className="space-y-3">
              <CardMiniNewsSkel />
              <CardMiniNewsSkel />
            </div>
          }
        >
          <CryptoNews>
            <CryptoDisclaimer />
          </CryptoNews>
        </Suspense>
        <Suspense fallback={<CardMiniNewsSkel />}>
          <CoronavirusNews />
        </Suspense>
      </ul>
    </div>
  );
}
