
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/data/categories";

export default function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const mainCategories = categories.filter(
        (category) => category.parentId === null
    );

    const getSubCategories = (parentId: string) =>
        categories.filter((category) => category.parentId === parentId);

    const closeMenu = () => {
        setShowMenu(false);
        setShowProducts(false);
        setOpenCategory(null);
    };

    return (
        <div className="lg:hidden">
            {/* دکمه همبرگری */}
            <button
                onClick={() => {
                    setShowMenu(!showMenu);
                    setShowProducts(false);
                    setOpenCategory(null);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-100"
            >
                {showMenu ? (
                    <X size={24} className="text-slate-700" />
                ) : (
                    <Menu size={24} className="text-slate-700" />
                )}
            </button>

            {/* منو */}
            {showMenu && (
                <div className="absolute top-16 right-4 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <ul className="py-2">

                        <li>
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="block px-5 py-3 text-slate-700 transition hover:bg-slate-100 hover:text-sky-600"
                            >
                                صفحه اصلی
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => {
                                    setShowProducts(!showProducts);
                                    setOpenCategory(null);
                                }}
                                className="flex w-full items-center justify-between px-5 py-3 text-slate-700 transition hover:bg-slate-100 hover:text-sky-600"
                            >
                                محصولات

                                <ChevronDown
                                    size={18}
                                    className={`transition ${showProducts ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {showProducts && (
                                <ul className="border-t border-slate-200 bg-slate-50">

                                    {mainCategories.map((category) => {
                                        const children = getSubCategories(category.id);

                                        return (
                                            <li key={category.id}>
                                                {children.length > 0 ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                setOpenCategory(
                                                                    openCategory === category.id
                                                                        ? null
                                                                        : category.id
                                                                )
                                                            }
                                                            className="flex w-full items-center justify-between px-8 py-3 text-slate-700 transition hover:bg-slate-100"
                                                        >
                                                            {category.name}

                                                            <ChevronDown
                                                                size={16}
                                                                className={`transition ${openCategory === category.id
                                                                        ? "rotate-180"
                                                                        : ""
                                                                    }`}
                                                            />
                                                        </button>

                                                        {openCategory === category.id && (
                                                            <ul className="border-r-2 border-slate-200 mr-8 mb-2">

                                                                {children.map((sub) => (
                                                                    <li key={sub.id}>
                                                                        <Link
                                                                            href={`/category/${sub.slug}`}
                                                                            onClick={closeMenu}
                                                                            className="block px-4 py-2 text-sm text-slate-600 transition hover:text-sky-600"
                                                                        >
                                                                            {sub.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}

                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={`/category/${category.slug}`}
                                                        onClick={closeMenu}
                                                        className="block px-8 py-3 text-slate-700 transition hover:bg-slate-100"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/about"
                                onClick={closeMenu}
                                className="block px-5 py-3 text-slate-700 transition hover:bg-slate-100 hover:text-sky-600"
                            >
                                درباره ما
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </div>
    );
}