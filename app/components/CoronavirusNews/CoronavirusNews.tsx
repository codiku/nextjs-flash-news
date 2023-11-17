import { delayedFetch } from "@/app/lib/mock";
import { CovidData } from "@/app/types/coronavirus-type";
import { CardMiniNews } from "../CardMiniNews/CardMiniNews";
import { CovidApi } from "@/app/api/covid-api";
export async function CoronavirusNews() {
  const covidData = await CovidApi.fetchCases();

  return (
    <CardMiniNews
      title={"🦠 Coronavirus"}
      description={"Number of positive cases (US)"}
    >
      <div>New cases : {covidData.actuals.newCases}</div>
      <div>Since beginning : {covidData.actuals.cases}</div>
      <div className="text-xs text-slate-400">
        Last update : {covidData.lastUpdatedDate}
      </div>
    </CardMiniNews>
  );
}
