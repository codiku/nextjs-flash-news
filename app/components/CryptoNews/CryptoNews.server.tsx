import { CryptoAPI } from "@/app/api/crypto-api";
import { CryptoNews as CryptoNewsCli } from "./CryptoNews.client";

export async function CryptoNews() {
  const crypto = await CryptoAPI.fetchBitcoin();
  return <CryptoNewsCli initialData={crypto} />;
}
