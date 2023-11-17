import { delayedFetch } from "@/app/lib/mock";
import { CovidData } from "@/app/types/coronavirus-type";

export class CovidApi {
  static async fetchCases() {
    let cryptoListResp: CovidData = await delayedFetch(
      await (
        await fetch(
          `${process.env.CORONA_API}country/US.json?apiKey=${process.env.CORONA_API_KEY}`
        )
      ).json(),
      4
    );

    return cryptoListResp;
  }
}
