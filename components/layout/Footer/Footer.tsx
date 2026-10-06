

import Link from "next/link";
import Image from "next/image";

import {
    Phone,
    Mail,
    Send,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-24 bg-slate-900 text-white">

            <div className="mx-auto max-w-7xl px-6 py-14">

                <div className="mb-14 flex flex-col items-center text-center">

                    <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                        <Image
                            src="/img/favicon.ico"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-white">
                        صدف
                    </h1>

                    <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">
                        مرجع تخصصی تأمین تجهیزات و اتصالات صنعتی برای صنایع نفت، گاز،
                        پتروشیمی، آب و فاضلاب با ارائه محصولات استاندارد از برندهای معتبر
                        جهانی.
                    </p>

                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    <div>

                        <h2 className="mb-5 text-xl font-bold text-sky-400">
                            حوزه‌های فعالیت
                        </h2>

                        <ul className="space-y-3 text-slate-300">

                            <li>
                                <Link href="/industries/water" className="hover:text-sky-400">
                                     آب و فاضلاب
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/oil-gas" className="hover:text-pink-500">
                                     نفت و گاز
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/petrochemical" className="hover:text-green-400">
                                     پتروشیمی
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-5 text-xl font-bold text-sky-400">
                            دسترسی سریع
                        </h3>

                        <ul className="space-y-3 text-slate-300">

                            <li className="hover:text-sky-400 lg:hover:mr-5 duration-300 ">
                                <Link className="" href="/">صفحه اصلی</Link>
                            </li>

                            <li className="hover:text-sky-400 lg:hover:mr-5 duration-300">
                                <Link href="/produ9cts">محصولات</Link>
                            </li>

                            <li className="hover:text-sky-400 lg:hover:mr-5 duration-300">
                                <Link href="/brand9s">برندها</Link>
                            </li>

                            <li className="hover:text-sky-400 lg:hover:mr-5 duration-300">
                                <Link href="/about9">درباره ما</Link>
                            </li>

                            <li className="hover:text-sky-400 lg:hover:mr-5 duration-300">
                                <Link href="/conta9ct">تماس با ما</Link>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h4 className="mb-5 text-xl font-bold text-sky-400">
                            ارتباط با ما
                        </h4>

                        <div className="space-y-4 text-slate-300">

                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>09922590575</span>
                            </div>

                            <div className="flex items-center gap-3 break-all">
                                <Mail size={18} />
                                <span>ilia.dr1384@gmail.com</span>
                            </div>

                        </div>

                    </div>


                    <div className="space-y-4 text-slate-300">
                        <h5 className="mb-5 text-xl font-bold text-sky-400">
                            پلتفرم ها
                        </h5>
                        <div className="space-y-4 text-slate-300">
                            <a
                                href="https://t.me/ily4_cfz"
                                target="_blank"
                                className="flex items-center gap-3 hover:text-sky-500 lg:hover:mb-5  lg:hover:mr-5 duration-300"
                            >
                                <Send size={18} />
                                Telegram
                            </a>

                            <a
                                href="https://instagram.com/ily4_dr00"
                                target="_blank"
                                className="flex items-center gap-3 hover:text-pink-600 lg:hover:mb-5 lg:hover:mt-5 lg:hover:mr-5 duration-300"
                            >
                                <MessageCircle size={18} />
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 hover:text-blue-700 lg:hover:mt-5 lg:hover:mr-5 duration-300"
                            >
                                <MessageCircle size={18} />
                                Rubika
                            </a>
                        </div>


                    </div>

                </div>

            </div>

            <div className="h-px w-full bg-sky-500/30" />

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row">

                <p>
                    © 2026 Sadaf Industrial. تمامی حقوق محفوظ است.
                </p>

                <p>
                    Designed & Developed by <span className="font-semibold text-sky-400">Ilia</span>
                </p>

            </div>

        </footer>
    );
}