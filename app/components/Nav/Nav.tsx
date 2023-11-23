import Image from "next/image";
import logoPng from "@/public/logo.png";
import Link from "next/link";
import { NAV_ITEMS } from "./constant";
export function Nav() {
  return (
    <div>
      {/*Logo*/}
      <div>
        <Link href="/">
          <Image src={logoPng} alt="Logo for flash news" className="w-40" />
        </Link>
      </div>
      {/* Nav */}
      {NAV_ITEMS.map((navItem) => (
        <li>{navItem.category}</li>
      ))}
    </div>
  );
}
