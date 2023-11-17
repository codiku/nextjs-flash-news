import { IssResponse } from "@/app/types/space-api";
import { CardMiniNews } from "../CardMiniNews/CardMiniNews";

export async function IssNews(p: {}) {
  // revalidate (Use the same cache 5 seconds max)
  let currentIssPosition: IssResponse = await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        await (
          await fetch("http://api.open-notify.org/iss-now.json", {
            next: { revalidate: 5 },
          })
        ).json()
      );
    }, 2000);
  });

  return (
    <CardMiniNews
      title="🛰️ ISS localation"
      description="Real time coordinates of ISS"
    >
      Lat : {currentIssPosition.iss_position.latitude}
      <br />
      Lng : {currentIssPosition.iss_position.latitude}
    </CardMiniNews>
  );
}
