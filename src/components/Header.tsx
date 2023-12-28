import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <Link href="/">ss</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
}
