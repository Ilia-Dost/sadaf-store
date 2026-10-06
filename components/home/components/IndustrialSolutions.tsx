import Link from "next/link";
import Image from "next/image";
import { useMemo } from 'react';
import { categories, type ApplicationType } from "@/data/categories";

const sections: {
    id: ApplicationType;
    title: string;
}[] = [
        {
            id: "water",
            title: " آب و فاضلاب",
        },
        {
            id: "oil-gas",
            title: " نفت و گاز",
        },
        {
            id: "petrochemical",
            title: " پتروشیمی",
        },
    ];

export function IndustrialSolutions() {
    // استفاده از useMemo برای کش کردن sections (هرچند ثابته)
    const memoizedSections = useMemo(() => sections, []);

    return (
        <>
            <section className="block md:hidden mx-auto max-w-7xl py-16">
                {memoizedSections.map((section) => {
                    // ✅ استفاده از useMemo برای فیلتر کردن آیتم‌ها
                    const items = useMemo(() => {
                        return categories.filter(
                            (category) =>
                                category.applications?.includes(section.id)
                        );
                    }, [section.id]);

                    return (
                        <div
                            key={section.id}
                            className="mb-16"
                        >
                            <h2 className="mb-8 text-2xl text-black font-bold dark:text-white">
                                {section.title}
                            </h2>
                            <div className="overflow-x-auto">
                                <div className="flex gap-6 flex-nowrap h-52">
                                    {items.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/category/${category.slug}`}
                                            className="group shrink-0 "
                                        >
                                            <div className="w-[160px] h-[170px] rounded-2xl border border-slate-200 bg-white pt-8 mt-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_8px_30px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)]">                                                <div className="relative mx-auto h-20 w-20">
                                                <Image
                                                    src="/img/CategoryBannerGrid/package.png"
                                                    alt={category.name}
                                                    fill
                                                    className="object-contain"
                                                    sizes="80px"
                                                />
                                            </div>
                                                <p className="mt-4 text-center text-sm font-semibold text-slate-700 dark:text-white group-hover:text-sky-600">
                                                    {category.name}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            <section className="hidden md:block mx-auto max-w-7xl py-16">
                {memoizedSections.map((section) => {
                    const items = useMemo(() => {
                        return categories.filter(
                            (category) =>
                                category.applications?.includes(section.id)
                        );
                    }, [section.id]);

                    return (
                        <div key={section.id} className="mb-16">
                            <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                                {section.title}
                            </h2>
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                                {items.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/category/${category.slug}`}
                                        className="group"
                                    >
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_8px_30px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)]">
                                            <div className="relative md:w-[150px] h-[150px] lg:w-[200px]">
                                                <Image
                                                    src="/img/package.png"
                                                    alt={category.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="mt-4 text-center text-sm font-semibold text-slate-700 dark:text-white group-hover:text-sky-600">
                                                {category.name}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );

}
