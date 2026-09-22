import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/ui/BackButton";
export default async function AboutProduct({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ q?: string }>;
}) {
    const { slug } = await params;
    const { q = "" } = await searchParams;

    const product = products.find(
        (item) => item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
    );

    if (!product) {
        notFound();
    }
    const relatedProducts = product.relatedProducts
        ?.map((relatedId) =>
            products.find((item) => item.id === relatedId)
        )
        .filter(
            (item): item is typeof products[number] => item !== undefined
        );

    return (
        <>
            <div className="block md:hidden w-full min-h-screen bg-slate-50">

                <div className="sticky top-0 z-20 w-full bg-white/95 backdrop-blur border-b border-slate-200 px-4 py-3">

                    <div className="flex items-center gap-2">

                        <BackButton></BackButton>

                        <Link
                            href="/"
                            className="flex-1 h-10 flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 transition-all active:scale-95"
                        >
                            <span>⌂</span>
                            <span>صفحه اصلی</span>
                        </Link>

                    </div>

                </div>


                <div className="w-full px-4 pt-4">

                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">

                        <div className="flex h-full w-full items-center justify-center border rounded-xl  border-slate-300 shadow-sm md:rounded-2xl bg-slate-200">
                            <span className="text-slate-600 text-sm">
                                تصویر محصول
                            </span>
                        </div>

                    </div>

                </div>


                <div className="w-full px-4 py-5">

                    <div className="mb-5">

                        <h1 className="text-2xl font-bold leading-9 text-slate-900">
                            {product.name}
                        </h1>

                        <div className="mt-3 flex flex-wrap gap-2">

                            <div className="rounded-full bg-purple-100 px-4 py-1.5">
                                <p className="text-xs font-medium text-purple-700">
                                    دسته: {product.categoryId}
                                </p>
                            </div>

                            {product.isFeatured && (
                                <div className="rounded-full bg-yellow-100 px-4 py-1.5">
                                    <p className="text-xs font-semibold text-yellow-700">
                                        ویژه
                                    </p>
                                </div>
                            )}

                            {product.isNew && (
                                <div className="rounded-full bg-green-100 px-4 py-1.5">
                                    <p className="text-xs font-semibold text-green-700">
                                        جدید
                                    </p>
                                </div>
                            )}

                        </div>

                    </div>


                    <div className="grid grid-cols-2 gap-3 mb-6">

                        <div className="rounded-xl bg-white border border-slate-200 p-3">
                            <p className="text-xs text-slate-500 mb-1">
                                برند
                            </p>

                            <p className="text-sm font-semibold text-slate-900">
                                {product.brandId}
                            </p>
                        </div>

                        <div className="rounded-xl bg-white border border-slate-200 p-3">
                            <p className="text-xs text-slate-500 mb-1">
                                کشور سازنده
                            </p>

                            <p className="text-sm font-semibold text-slate-900">
                                {product.countryId}
                            </p>
                        </div>

                    </div>


                    <div className="mb-6">

                        <h2 className="mb-3 text-lg font-bold text-slate-900">
                            سایزهای موجود
                        </h2>

                        <div className="grid grid-cols-2 gap-3">

                            {product.sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-slate-200 bg-white p-3"
                                >

                                    <p className="text-xs text-slate-500">
                                        کد
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-800">
                                        {size.code}
                                    </p>

                                    <div className="mt-2 border-t border-slate-100 pt-2">

                                        <p className="text-xs text-slate-500">
                                            سایز
                                        </p>

                                        <p className="mt-1 text-base font-bold text-slate-900">
                                            {size.size}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>


                    <div className="mb-6">

                        <h2 className="mb-3 text-lg font-bold text-slate-900">
                            توضیحات
                        </h2>

                        <div className="rounded-xl border border-slate-200 bg-white p-4">

                            <p className="text-sm leading-7 text-slate-700">
                                {product.description}
                            </p>

                        </div>

                    </div>


                    {product.specifications &&
                        product.specifications.length > 0 && (
                            <div className="mb-6">

                                <h2 className="mb-3 text-lg font-bold text-slate-900">
                                    مشخصات فنی
                                </h2>

                                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                                    {product.specifications.map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3 last:border-b-0"
                                        >

                                            <span className="text-sm font-medium text-slate-600">
                                                {spec.title}
                                            </span>

                                            <span className="text-sm font-semibold text-slate-900 text-left">
                                                {spec.value}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}


                    <div className="mb-6">

                        <h2 className="mb-3 text-lg font-bold text-slate-900">
                            ویژگی‌های برجسته
                        </h2>

                        <div className="flex flex-wrap gap-2">

                            {product.features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-sky-700"
                                >
                                    {feature}
                                </span>
                            ))}

                        </div>

                    </div>


                    <div className="mb-6">

                        <h2 className="mb-3 text-lg font-bold text-slate-900">
                            کاربردهای محصول
                        </h2>

                        <div className="flex flex-wrap gap-2">

                            {product.applications.map((application, index) => (
                                <span
                                    key={index}
                                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                                >
                                    {application}
                                </span>
                            ))}

                        </div>

                    </div>


                    {product.tags &&
                        product.tags.length > 0 && (
                            <div className="mb-6">

                                <h2 className="mb-3 text-lg font-bold text-slate-900">
                                    برچسب‌ها
                                </h2>

                                <div className="flex flex-wrap gap-2">

                                    {product.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                                        >
                                            #{tag}
                                        </span>
                                    ))}

                                </div>

                            </div>
                        )}


                    {relatedProducts &&
                        relatedProducts.length > 0 && (

                            <div className="mt-8 border-t border-slate-200 pt-6">

                                <h2 className="mb-4 text-lg font-bold text-slate-900">
                                    محصولات مرتبط
                                </h2>

                                <div className="grid grid-cols-1 gap-3">

                                    {relatedProducts.map((related) => (

                                        <Link
                                            key={related.id}
                                            href={`/ShowProduct/${related.slug}?q=${encodeURIComponent(q)}`}
                                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all active:scale-[0.98]"
                                        >

                                            <div className="min-w-0">

                                                <p className="truncate text-sm font-semibold text-slate-900">
                                                    {related.name}
                                                </p>

                                            </div>

                                            <span className="mr-3 shrink-0 text-lg text-sky-600">
                                                ←
                                            </span>

                                        </Link>

                                    ))}

                                </div>

                            </div>

                        )}

                </div>

            </div>



            <div className="hidden md:block w-full min-h-screen bg-slate-50">

                <div className="w-full border-b border-slate-200 bg-white px-4 py-4 md:px-6 md:py-4 lg:px-10 lg:py-5">

                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                        <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">

                            <BackButton></BackButton>

                            <Link
                                href="/"
                                className="flex h-9 items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 text-xs font-medium text-slate-700 transition-all hover:bg-slate-200 md:h-10 md:gap-2 md:px-4 md:text-sm lg:px-5"
                            >
                                <span>⌂</span>
                                <span>صفحه اصلی</span>
                            </Link>

                        </div>
                        <h1 className="text-base font-bold md:ml-[300px] lg:ml-[500px] text-slate-800 md:text-lg lg:text-lg">
                            جزئیات محصول
                        </h1>



                    </div>

                </div>


                <main className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-6 lg:px-10 lg:py-8">

                    <div className="grid grid-cols-2 gap-5 md:gap-6 lg:gap-8">


                        <div className="h-fit">

                            <div className="sticky top-6 md:top-7 lg:top-8">

                                <div className="aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:rounded-2xl">

                                    <div className="flex h-full w-full items-center justify-center border rounded-xl  border-slate-300 shadow-sm md:rounded-2xl bg-slate-200">

                                        <span className="text-xs text-slate-600 md:text-sm">
                                            تصویر محصول
                                        </span>

                                    </div>

                                </div>




                            </div>

                        </div>




                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-5 lg:p-7">



                            <div className="border-b border-slate-200 pb-5 md:pb-5 lg:pb-6">



                                <h2 className="mt-3 text-2xl font-bold leading-8 text-slate-900 md:mt-4 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10">
                                    {product.name}
                                </h2>

                                <div className="flex flex-wrap mt-2 items-center gap-2 md:gap-3">

                                    <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700 md:px-4 md:py-2 md:text-sm">
                                        دسته: {product.categoryId}
                                    </span>

                                    <div className="flex flex-wrap gap-2 ">

                                        {product.isFeatured && (
                                            <div className="rounded-full bg-yellow-100 px-3 py-1.5 md:px-4 md:py-2">
                                                <p className="text-xs font-semibold text-yellow-700 md:text-sm">
                                                    محصول ویژه
                                                </p>
                                            </div>
                                        )}

                                        {product.isNew && (
                                            <div className="rounded-full bg-green-100 px-3 py-1.5 md:px-4 md:py-2">
                                                <p className="text-xs font-semibold text-green-700 md:text-sm">
                                                    محصول جدید
                                                </p>
                                            </div>
                                        )}

                                    </div>




                                </div>
                                {product.shortDescription && (
                                    <p className="mt-2 text-xs leading-6 text-slate-500 md:mt-3 md:text-sm md:leading-7">
                                        {product.shortDescription}
                                    </p>
                                )}

                            </div>



                            <div className="grid grid-cols-2 gap-2.5 border-b border-slate-200 py-5 md:gap-3 md:py-5 lg:py-6">

                                <div className="rounded-lg bg-slate-50 p-3 md:rounded-xl md:p-4">

                                    <p className="text-[11px] text-slate-500 md:text-xs">
                                        برند
                                    </p>

                                    <p className="mt-1.5 text-sm font-semibold text-slate-900 md:mt-2 md:text-sm lg:text-base">
                                        {product.brandId}
                                    </p>

                                </div>


                                <div className="rounded-lg bg-slate-50 p-3 md:rounded-xl md:p-4">

                                    <p className="text-[11px] text-slate-500 md:text-xs">
                                        کشور سازنده
                                    </p>

                                    <p className="mt-1.5 text-sm font-semibold text-slate-900 md:mt-2 md:text-sm lg:text-base">
                                        {product.countryId}
                                    </p>

                                </div>

                            </div>



                            <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                    سایزهای موجود
                                </h3>

                                <div className="grid grid-cols-2 gap-2.5 md:gap-3">

                                    {product.sizes.map((size, index) => (

                                        <div
                                            key={index}
                                            className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-sky-300 hover:bg-sky-50 md:rounded-xl md:p-4"
                                        >

                                            <div className="flex items-center justify-between gap-2 md:gap-3">

                                                <span className="text-[11px] text-slate-500 md:text-xs">
                                                    سایز
                                                </span>

                                                <span className="text-sm font-bold text-slate-900 md:text-base">
                                                    {size.size}
                                                </span>

                                            </div>

                                            <div className="mt-2 border-t border-slate-200 pt-2 md:mt-3 md:pt-3">

                                                <span className="text-[11px] text-slate-500 md:text-xs">
                                                    کد محصول
                                                </span>

                                                <p className="mt-1 text-xs font-medium text-slate-700 md:text-sm">
                                                    {size.code}
                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>



                            <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                <h3 className="mb-2 text-base font-bold text-slate-900 md:mb-3 md:text-lg">
                                    توضیحات
                                </h3>

                                <p className="rounded-lg bg-slate-50 p-4 text-xs leading-7 text-slate-700 md:rounded-xl md:p-5 md:text-sm md:leading-8">
                                    {product.description}
                                </p>

                            </div>



                            {product.specifications &&
                                product.specifications.length > 0 && (

                                    <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                        <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                            مشخصات فنی
                                        </h3>

                                        <div className="overflow-hidden rounded-lg border border-slate-200 md:rounded-xl">

                                            {product.specifications.map((spec, index) => (

                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-3 py-3 last:border-b-0 md:gap-5 md:px-5 md:py-4"
                                                >

                                                    <span className="text-xs font-medium text-slate-600 md:text-sm">
                                                        {spec.title}
                                                    </span>

                                                    <span className="text-xs font-bold text-slate-900 md:text-sm">
                                                        {spec.value}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                )}



                            <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                    ویژگی‌های برجسته
                                </h3>

                                <div className="flex flex-wrap gap-1.5 md:gap-2">

                                    {product.features.map((feature, index) => (

                                        <span
                                            key={index}
                                            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-sky-700 md:px-4 md:py-2 md:text-sm"
                                        >
                                            {feature}
                                        </span>

                                    ))}

                                </div>

                            </div>



                            <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                    کاربردهای محصول
                                </h3>

                                <div className="flex flex-wrap gap-1.5 md:gap-2">

                                    {product.applications.map((application, index) => (

                                        <span
                                            key={index}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 md:px-4 md:py-2 md:text-sm"
                                        >
                                            {application}
                                        </span>

                                    ))}

                                </div>

                            </div>



                            {product.tags &&
                                product.tags.length > 0 && (

                                    <div className="border-b border-slate-200 py-5 md:py-5 lg:py-6">

                                        <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                            برچسب‌ها
                                        </h3>

                                        <div className="flex flex-wrap gap-1.5 md:gap-2">

                                            {product.tags.map((tag, index) => (

                                                <span
                                                    key={index}
                                                    className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600 md:px-3 md:py-1.5 md:text-xs"
                                                >
                                                    #{tag}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                )}



                            {relatedProducts &&
                                relatedProducts.length > 0 && (

                                    <div className="pt-5 md:pt-6">

                                        <h3 className="mb-3 text-base font-bold text-slate-900 md:mb-4 md:text-lg">
                                            محصولات مرتبط
                                        </h3>

                                        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">

                                            {relatedProducts.map((related) => (

                                                <Link
                                                    key={related.id}
                                                    href={`/ShowProduct/${related.slug}?q=${encodeURIComponent(q)}`}
                                                    className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all hover:border-sky-300 hover:bg-sky-50 md:rounded-xl md:p-4"
                                                >

                                                    <span className="text-xs font-semibold text-slate-800 group-hover:text-sky-700 md:text-sm">
                                                        {related.name}
                                                    </span>

                                                    <span className="mr-2 text-base text-sky-600 transition-transform group-hover:-translate-x-1 md:mr-3 md:text-lg">
                                                        ←
                                                    </span>

                                                </Link>

                                            ))}

                                        </div>

                                    </div>

                                )}

                        </div>

                    </div>

                </main>

            </div>
        </>

    );
}