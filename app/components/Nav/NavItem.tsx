import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const NavItem = (p: { alt: string; src: StaticImageData; category: string }) => {
  return (
    <Link
      href={"/articles/category/"}
      className={`flex items-center h-12 cursor-pointer gap-2 p-3 hover:bg-slate-100  transform transition hover:scale-105 rounded-xl`}
    >
      <div className="flex justify-center items-center w-10 h-10 rounded-full border border-[#BBC2CC]">
        <Image alt={p.alt} src={p.src} className="w-5 h-5" />
      </div>
      <div className="font-semibold capitalize ">{p.category}</div>
    </Link>
  );
};
