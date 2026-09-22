
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CircleUserRound, Search } from "lucide-react";
import { useState } from "react";

export default function Logo() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className=" flex flex-1 items-center justify-between gap-2">
      <form onSubmit={handleSearch} className="flex items-center gap-1">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو..."
            className="h-10 w-48 mr-10 rounded-xl border  bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition-all duration-200 border-slate-200 hover:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <button
            type="submit"
            className="absolute left-1 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-sky-600"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
      <div className="hidden md:block">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-slate-900 transition hover:text-sky-600 md:text-2xl"
        >
          صدف
        </Link>
      </div>


      <Link
        href="/login"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-sky-600"
      >
        <CircleUserRound size={22} />
      </Link>
    </div>
  );
}