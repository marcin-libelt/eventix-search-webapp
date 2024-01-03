"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

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
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9 ">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routeLinks.map(({ path, name }) => (
            <li
              key={path}
              className={clsx(
                " hover:text-white flex items-center transition relative",
                {
                  "text-white": activePathname === path,
                  "text-white/50": activePathname !== path,
                }
              )}
            >
              <Link href={path} className="">
                {name}
              </Link>
              {activePathname === path && (
                <motion.span
                  layoutId="nav-link"
                  className="block bg-accent h-1 w-full absolute bottom-0"
                ></motion.span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
