import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const routeLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All events",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9 ">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routeLinks.map(({ path, name }) => (
            <li
              key={path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={path} className="">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
