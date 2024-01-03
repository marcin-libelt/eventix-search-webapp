"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };
  const [searchText, setSearchText] = useState("");

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        type="text"
        value={searchText}
        onChange={(ev) => setSearchText(ev.target.value)}
        spellCheck={false}
        placeholder="Search events in any city..."
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:bg-white/10 focus:ring-2 transition"
      />
    </form>
  );
}
