"use client";
import { CryptoAPI } from "@/app/api/crypto-api";
import { CryptoItem } from "@/app/types/crypto-type";
import { useEffect, useState } from "react";

export function CryptoNews(p: { initialData?: CryptoItem }) {
  const [crypto, setCrypto] = useState<CryptoItem | undefined>(p.initialData);

  const fetchCrypto = async () => {
    const cryptoResp = await CryptoAPI.fetchBitcoin();
    setCrypto(cryptoResp);
  };
  useEffect(() => {
    fetchCrypto();
    const intervalFetchCrypto = setInterval(fetchCrypto, 20000);

    return () => clearInterval(intervalFetchCrypto);
  }, []);

  const getEvolEmoji = (value: string) => {
    const v = Number(value);
    return v > 0 ? (
      <span className="text-green-500">△</span>
    ) : v < 0 ? (
      <span className="text-red-500">▽</span>
    ) : (
      ""
    );
  };

  return (
    crypto && (
      <div>
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-xl font-bold">
            <span className="animate-pulse ">🔴</span> Crypto news
          </h2>
        </div>
        <div className="lg:w-80  border-2 p-4 rounded-lg">
          <div className="">
            <div className="text-lg font-semibold">
              {crypto.name + " market"}
            </div>
            <div className="text-slate-500">
              Real time {crypto.name} evolution
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {crypto.priceUsd.split(".")[0]}$ ({crypto.changePercent24Hr}%){" "}
            {getEvolEmoji(crypto.changePercent24Hr)}
          </div>
        </div>
      </div>
    )
  );
}
