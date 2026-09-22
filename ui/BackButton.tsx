"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="flex h-9 items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50 px-3 text-xs font-medium text-sky-700 transition-all hover:bg-blue-100 hover:text-sky-800 md:h-10 md:gap-2 md:px-4 md:text-sm lg:px-5"
        >
            <span>←</span>
            <span>بازگشت به صفحه قبل</span>
        </button>
    );
}