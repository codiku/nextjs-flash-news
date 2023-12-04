import { delayResponse } from "@/app/lib/mock";
export class CryptoApi {
  static async fetchBitcoin(): Promise<CryptoItem> {
    const cryptoResp: CryptoResponse = await (
      await fetch(`${process.env.NEXT_PUBLIC_CRYPO_BASE_URL}/assets/bitcoin`)
    ).json();
    return delayResponse(cryptoResp.data, 4000);
  }
}
