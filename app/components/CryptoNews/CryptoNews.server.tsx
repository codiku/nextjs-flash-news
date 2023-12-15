import { CryptoApi } from "@/app/api/crypto-api";
import { CryptoNews as CryptoNewsClient } from "./CryptoNews.client";
import Skeleton from "react-loading-skeleton";
export async function CryptoNews() {
  const crypto = await CryptoApi.fetchBitcoin();
  return <CryptoNewsClient initialData={crypto} />;
}

export const CryptoNewsSkel = () => {
  return (
    <div>
      <Skeleton height={28} width={140} count={1} className="mb-16" />
      <Skeleton height={108} width={320} count={1} />
    </div>
  );
};
