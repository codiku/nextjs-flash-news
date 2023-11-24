import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function NavItem(p: {
  category: string;
  alt: string;
  src: StaticImageData;
}) {
  return (
    <Link
      href={"/articles/category/" + p.category}
      className="flex items-center h-12 gap-2 p-3 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl"
    >
      <div className="flex justify-center items-center rounded-full border border-[#BBC2CC] w-10 h-10">
        <Image src={p.src} alt={p.alt} className="w-5 h-5" />
      </div>
      <div className="capitalize font-semibold">{p.category}</div>
    </Link>
  );
}
