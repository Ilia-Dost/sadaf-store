"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";

export default function DesktopMenu() {
    const [showProducts, setShowProducts] = useState(false);

    // دسته‌بندی‌های اصلی
    const mainCategories = categories.filter(
        (category) => category.parentId === null
    );

    // زیرشاخه‌های هر دسته
    const getSubCategories = (parentId: string) =>
        categories.filter((category) => category.parentId === parentId);

    return (
        <div className="relative hidden lg:flex lg:items-center lg:gap-8">
            <Link
                href="/"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-white"
            >
                صفحه اصلی
            </Link>

            <button
                onClick={() => setShowProducts(!showProducts)}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-white"
            >
                محصولات
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${showProducts ? "rotate-180" : ""
                        }`}
                />
            </button>

            <Link
                href="/about"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-white"
            >
                درباره ما
            </Link>

            <div
                className={`absolute right-0 top-14 z-50 w-[900px] rounded-3xl border border-slate-200 bg-white dark:bg-slate-800 p-8 shadow-2xl transition-all duration-1000 ease-out ${showProducts
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-8 opacity-0 invisible"
                    }`}
            >
                <div className="mb-6 flex items-center justify-between border-b border-slate-200  pb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white/85">
                        دسته‌بندی محصولات
                    </h3>

                    <button
                        onClick={() => setShowProducts(false)}
                        className="text-sm text-slate-500 transition hover:text-slate-700 dark:text-white dark:hover:text-sky-500"
                    >
                        بستن
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {mainCategories.map((category) => {
                        const children = getSubCategories(category.id);

                        return (
                            <div key={category.id} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-sky-500" />

                                    <Link
                                        href={`/category/${category.slug}`}
                                        className="font-semibold text-slate-900 transition hover:text-sky-600 dark:text-slate-200"
                                    >
                                        {category.name}
                                    </Link>
                                </div>

                                <ul className="space-y-2 pr-4">
                                    {children.map((sub) => (
                                        <li key={sub.id}>
                                            <Link
                                                href={`/subcategory/${sub.slug}`}
                                                onClick={() => setShowProducts(false)}
                                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-sky-500 dark:text-slate-200/85"
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-4">
                    <Link
                        href="/showallproduct"
                        onClick={() => setShowProducts(false)}
                        className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
                    >
                        مشاهده همه محصولات
                    </Link>
                </div>
            </div>
        </div>
    );
}