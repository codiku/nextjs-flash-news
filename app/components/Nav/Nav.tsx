import Image from "next/image";
import { NAV_ITEMS } from "./constant";
import logoPng from "@/public/logo.png";
export function Nav() {
  return (
    <div>
      {/* Logo */}
      <Image src={logoPng} alt="Logo" className="w-40" />
      {/* Nav list */}
      <ul>
        {NAV_ITEMS.map((navItem) => (
          <li>{navItem.category}</li>
        ))}
      </ul>
    </div>
  );
}
