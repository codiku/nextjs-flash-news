import { LatestNews } from "@/app/components/LatestNews/LatestNews";
import { CryptoNews } from "../components/CryptoNews/CryptoNews.server";

export default function IndexPage() {
  return (
    <div className="flex justify-between">
      <LatestNews />
      <CryptoNews />
    </div>
  );
}
