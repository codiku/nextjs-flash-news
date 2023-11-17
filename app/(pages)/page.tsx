import { LatestNews } from "@/app/components/LatestNews/LatestNews";
import { MiniNews } from "@/app/components/MiniNews/MiniNews";

export default async function Home() {
  return (
    <div className="lg:flex lg:flex-row-reverse space-y-14 lg:space-y-0 space-x-reverse space-x-12 ">
      <MiniNews />
      <LatestNews />
    </div>
  );
}
