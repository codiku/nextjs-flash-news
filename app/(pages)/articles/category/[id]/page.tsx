import { CATEGORIES_ITEMS } from "@/app/constant";
import Image from "next/image";

export default function CategoryDetailPage(p: {
  params: { id: keyof typeof CATEGORIES_ITEMS; date: string };
  searchParams: { date: string };
}) {
  const cat = CATEGORIES_ITEMS[p.params.id];
  return (
    <div className="flex items-center space-x-4">
      <Image src={cat.src} alt={cat.alt} className="w-10 h-10" />
      <h1 className="capitalize font-bold text-3xl">{p.params.id} News</h1>
    </div>
  );
}
