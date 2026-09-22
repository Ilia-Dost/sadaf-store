import Footer from "@/components/layout/Footer/Footer";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Card from "@/ui/Card";
import Link from "next/link";
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  const normalize = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/\u200c/g, " ")
      .replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)])
      .replace(/[٠-٩]/g, (d) => "0123456789"["٠١٢٣٤٥٦٧٨٩".indexOf(d)])
      .replace(/\s+/g, " ")
      .replace(/[-_]/g, " ")
      .trim();
  };
  const { q = "" } = await searchParams;
  const keyword = normalize(q);

  const words = keyword.split(" ").filter(Boolean);

  const results = products.map((product) => {
    const id = normalize(product.id);
    const name = normalize(product.name);
    const tags = product.tags.map((tag) => normalize(tag));

    const searchableText = [id, name, ...tags].join(" ");

    // اگر حتی یکی از کلمات پیدا نشد، حذف شود
    if (!words.every((word) => searchableText.includes(word))) {
      return null;
    }

    // امتیازدهی
    let score = 0;

    // تطابق کامل نام
    if (name === keyword) score += 1000;

    // شروع نام با عبارت
    else if (name.startsWith(keyword)) score += 700;

    // وجود عبارت در نام
    else if (name.includes(keyword)) score += 500;

    // وجود در آیدی
    if (id.includes(keyword)) score += 300;

    // وجود در تگ‌ها
    score += tags.filter((tag) => tag.includes(keyword)).length * 100;

    // هر کلمه داخل نام
    score += words.filter((word) => name.includes(word)).length * 50;

    return {
      product,
      score,
    };
  })


    .filter(
      (
        item
      ): item is {
        product: (typeof products)[number];
        score: number;
      } => item !== null
    )
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product);

  if (results.length === 0) {
    return (
      <>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5">
          <h2 className="text-2xl font-bold text-slate-700">
            محصولی پیدا نشد.
          </h2>
        </div>

        <Footer />
      </>
    );
  }
  if (q.length === 0) {
    return (
      <>
        <div className="mx-auto  min-h-[70vh] max-w-7xl  px-5">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-slate-700">
              محصولی پیدا نشد.
            </h2>
          </div>


          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">

              <Link
                href="showallproduct"
                className="flex h-9 items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50 px-3 text-xs font-medium text-sky-700 transition-all hover:bg-blue-100 hover:text-sky-800 md:h-10 md:gap-2 md:px-4 md:text-sm lg:px-5"
              >
                <span>←</span>
                <span>مشاهده همه محصولات</span>
              </Link>

              <Link
                href="/"
                className="flex h-9 items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 text-xs font-medium text-slate-700 transition-all hover:bg-slate-200 md:h-10 md:gap-2 md:px-4 md:text-sm lg:px-5"
              >
                <span>⌂</span>
                <span>صفحه اصلی</span>
              </Link>

            </div>
          </div>
        </div>



        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 py-12">
        <h1 className="mb-10 text-3xl font-bold text-slate-800">
          نتایج جستجو برای "{q}"
        </h1>
        <Link
          href="/"
          className="flex h-9 items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 text-xs font-medium text-slate-700 transition-all hover:bg-slate-200 md:h-10 md:gap-2 md:px-4 md:text-sm lg:px-5"
        >
          <span>⌂</span>
          <span>صفحه اصلی</span>
        </Link>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {results.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              about={product.shortDescription}
              slug={product.slug}
              q={q}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}