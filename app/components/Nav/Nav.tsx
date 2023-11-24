import Image from "next/image";
import { NAV_ITEMS } from "./constant";
import logoPng from "@/public/logo.png";
import { NavItem } from "./NavItem";
export function Nav() {
  return (
    <div>
      {/* Logo */}
      <Image src={logoPng} alt="Logo" className="w-40" />

      {/* Nav list */}
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem} />
        ))}
      </nav>
    </div>
  );
}
