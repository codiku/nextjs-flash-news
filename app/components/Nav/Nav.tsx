import Image from "next/image";
import Link from "next/link";

import logoPng from "@/public/logo.png";

import { NavItem } from "./NavItem";
import { NAV_ITEMS } from "./constant";

export function Nav() {
  return (
    <div>
      {/* Logo */}
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
          <Image src={logoPng} alt="Flash news logo" className="w-40" />
        </Link>
      </div>
      {/* Nav */}
      <div className="hidden md:flex">
        <nav className="space-y-4">
          {NAV_ITEMS.map((navItem, i) => (
            <NavItem key={i} {...navItem} />
          ))}
        </nav>
        <div className="ml-12 w-[0.3px] bg-[#BBC2CC] opacity-50 " />
      </div>
    </div>
  );
}
