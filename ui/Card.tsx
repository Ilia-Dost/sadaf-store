import Link from "next/link";
interface CardProps {
    name: string;
    about: string;
    slug: string;
    q: string;
}

export default function card({ name, about, slug, q }: CardProps) {
    return (
        <>
            <div className="relative flex w-80 flex-col mt-10  border border-black/25 rounded-xl bg-white   bg-clip-border text-gray-700 shadow-2xl dark:bg-slate-900 dark:shadow-[0_8px_30px_rgba(255,255,255,0.5)] dark:border-white">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div className="p-6 h-[40%]">
                    <h5 className="mb-2 block font-bold text-xl  leading-snug tracking-normal text-blue-gray-900 antialiased dark:text-white/85">
                        {name}
                    </h5>
                    <p className="block text-base leading-relaxed text-inherit antialiased dark:text-white/85">
                        {about}
                    </p>
                </div>
                <div className="p-6 pt-0 h-[20%]">
                    <Link href={`/ShowProduct/${slug}?q=${encodeURIComponent(q)}`}>
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            رفتن به صفحه
                        </button>
                    </Link>

                </div>
            </div>
        </>
    );
}