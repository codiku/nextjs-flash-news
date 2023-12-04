"use client";

import { CryptoApi } from "@/app/api/crypto-api";
import { useEffect, useState } from "react";

export function CryptoNews(p: { initialData: CryptoItem }) {
  const [crypto, setCrypto] = useState<CryptoItem>(p.initialData);

  const fetchCrypto = async () => {
    const cryptoResp = await CryptoApi.fetchBitcoin();
    setCrypto(cryptoResp);
  };

  useEffect(() => {
    fetchCrypto();
    const intervalId = setInterval(fetchCrypto, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getEvolutionEmoji = (value: string) => {
    const v = Number(value);
    return v > 0 ? (
      <span className="text-green-500">△</span>
    ) : (
      <span className="text-red-500">▽</span>
    );
  };
  return (
    crypto && (
      <div>
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-xl font-bold">
            <span className="animate-pulse">🔴</span> Crypto news
          </h2>
        </div>
        <div className="w-80 border-2 p-4 rounded-lg">
          <div>
            <div className="text-lg font-semibold">
              {crypto.name + " market"}
            </div>
            <div className="text-slate-500">
              Real time {crypto.name} evolution
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {crypto.priceUsd.split(".")[0]}$ ({crypto.changePercent24Hr}%)
            {getEvolutionEmoji(crypto.changePercent24Hr)}
          </div>
        </div>
      </div>
    )
  );
}
