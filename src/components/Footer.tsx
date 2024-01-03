import Link from "next/link";
import React from "react";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 md:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 Lumost It. ALl rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
