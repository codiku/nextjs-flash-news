import { CryptoAPI } from "@/app/api/crypto-api";
import { ReactNode } from "react";
import { CryptoNews as CryptoNewsCli } from "./CryptoNews.client";

export async function CryptoNews(p: { children: ReactNode }) {
  const crypto = await CryptoAPI.fetchAll();
  console.log("*******", crypto);
  return <CryptoNewsCli initialData={crypto}>{p.children}</CryptoNewsCli>;
}
