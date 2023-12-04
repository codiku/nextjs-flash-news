import { CryptoItem, CryptoResponse } from "@/app/types/crypto-type";
import { delayResponse } from "../lib/mock";

export class CryptoAPI {
  static async fetchBitcoin(): Promise<CryptoItem> {
    let cryptoResp: CryptoResponse = await (
      await fetch(`${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/assets/bitcoin`)
    ).json();
    return delayResponse(cryptoResp.data, 4000);
  }
}
