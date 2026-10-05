import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: 1, title: "پکیج ها", img: "/img/CategoryBannerGrid/package.png", size: "large" },
  { id: 2, title: "محصولات جدید", img: "/img/CategoryBannerGrid/ChatGPT Image Jul 22, 2026, 05_54_23 PM.png", size: "small" },
  { id: 3, title: "تخفیف‌ها", img: "/img/CategoryBannerGrid/ChatGPT Image Jul 22, 2026, 05_49_30 PM.png", size: "small" },
  { id: 4, title: "برندها", img: "/img/CategoryBannerGrid/BRAND.png", size: "large" },
];

export default function CategoryBannerGrid() {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden relative mt-10 space-y-5 px-4">
        <Link href="no-page">
          <div className="relative mt-10 w-full max-w-[400px] mx-auto h-52 overflow-hidden rounded-3xl">
            <Image
              src={categories[0].img}
              alt={categories[0].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[0].title}</h3>
            </div>
          </div>
        </Link>

        <Link href="newproduct">
          <div className="relative mt-10 w-full max-w-[400px] mx-auto h-52 overflow-hidden rounded-3xl">
            <Image
              src={categories[1].img}
              alt={categories[1].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[1].title}</h3>
            </div>
          </div>
        </Link>

        <Link href="no-page">
          <div className="relative mt-10 w-full max-w-[400px] mx-auto h-52 overflow-hidden rounded-3xl">
            <Image
              src={categories[2].img}
              alt={categories[2].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[2].title}</h3>
            </div>
          </div>
        </Link>

        <Link href="showbrands">
          <div className="relative mt-10 w-full max-w-[400px] mx-auto h-52 overflow-hidden rounded-3xl">
            <Image
              src={categories[3].img}
              alt={categories[3].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[3].title}</h3>
            </div>
          </div>
        </Link>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden relative mt-10 px-6">
        <div className="grid grid-cols-3 gap-4">

          <Link href="no-page" className="relative col-span-2 h-64">
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src={categories[0].img}
                alt={categories[0].title}
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[0].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="newproduct" className="relative col-span-1 h-64">
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src={categories[1].img}
                alt={categories[1].title}
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[1].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="no-page" className="relative col-span-1 h-64">
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src={categories[2].img}
                alt={categories[2].title}
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[2].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="showbrands" className="relative col-span-2 h-64">
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src={categories[3].img}
                alt={categories[3].title}
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold dark:text-slate-950">{categories[3].title}</h3>
              </div>
            </div>
          </Link>

        </div>
      </div>

      <div className="hidden lg:block relative mt-10 px-8">
        <div className="grid grid-cols-3 gap-6">

          <Link href="no-page" className="relative col-span-2 h-[450px]">
            <div className="relative col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={categories[0].img}
                alt={categories[0].title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold dark:text-slate-950">{categories[0].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="newproduct">
            <div className="relative col-span-1 h-[450px] rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={categories[1].img}
                alt={categories[1].title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold dark:text-slate-950">{categories[1].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="no-page">
            <div className="relative col-span-1 h-[450px] rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={categories[2].img}
                alt={categories[2].title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold dark:text-slate-950">{categories[2].title}</h3>
              </div>
            </div>
          </Link>

          <Link href="showbrands" className="relative col-span-2 h-[450px]">
            <div className="relative col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={categories[3].img}
                alt={categories[3].title}
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold dark:text-slate-950">{categories[3].title}</h3>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </>
  );
}