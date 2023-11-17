import { CRYPTOS } from "@/app/components/CryptoNews/constant";
import { delayedFetch } from "@/app/lib/mock";
import { BinanceCurrencyItem } from "@/app/types/binance-type";

export class CryptoAPI {
  static async fetchAll() {
    let cryptoListResp: BinanceCurrencyItem[] = await delayedFetch(
      await (
        await fetch(
          `${process.env.NEXT_PUBLIC_CRYPTO_API}?symbols=${JSON.stringify(
            CRYPTOS.map((c) => c.symbol)
          )}`
        )
      ).json(),
      3
    );
    return cryptoListResp;
  }
}
