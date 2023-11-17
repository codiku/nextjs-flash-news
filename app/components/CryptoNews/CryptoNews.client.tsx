"use client";
import { CryptoAPI } from "@/app/api/crypto-api";
import { BinanceCurrencyItem } from "@/app/types/binance-type";
import { ReactNode, useEffect, useState } from "react";
import { CardMiniNews } from "../CardMiniNews/CardMiniNews";
import { CRYPTOS } from "./constant";

export interface CryptoNewsProps {
  children: ReactNode;
  initialData: BinanceCurrencyItem[];
}
export function CryptoNews(p: CryptoNewsProps) {
  //const cryptoList = p.initialData || [];
  const [cryptoList, setCryptoList] = useState<BinanceCurrencyItem[]>(
    p.initialData || []
  );

  const fetchCryptoList = async () => {
    const cryptoListResp = await CryptoAPI.fetchAll();
    setCryptoList(cryptoListResp);
  };
  useEffect(() => {
    fetchCryptoList();
    const intervalFetchCrypto = setInterval(fetchCryptoList, 3000);

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
    <>
      {cryptoList.length > 1 &&
        CRYPTOS.map((crypto, i) => (
          <CardMiniNews
            key={i}
            title={crypto.emoji + "" + crypto.label + " market"}
            description={`Real time ${crypto.label} evolution`}
          >
            {cryptoList[i].lastPrice}$ ({cryptoList[i].priceChangePercent}%){" "}
            {getEvolEmoji(cryptoList[i].priceChangePercent)}
            {p.children}
          </CardMiniNews>
        ))}
    </>
  );
}
