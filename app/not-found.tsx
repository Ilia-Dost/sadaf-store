import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 px-5 flex items-center justify-center dark:bg-slate-950">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top right glow */}
        <div
          className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-blue-400/20
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        {/* Bottom left glow */}
        <div
          className="
            absolute
            -left-32
            -bottom-32
            h-80
            w-80
            rounded-full
            bg-sky-400/20
            blur-3xl
            dark:bg-sky-500/10
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/5
            blur-3xl
            dark:bg-blue-400/5
          "
        />

      </div>


      {/* Main card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[2rem]
          border
          border-slate-200
          bg-white/80
          p-8
          text-center
          shadow-2xl
          backdrop-blur-xl

          dark:border-slate-700
          dark:bg-slate-900/80
          dark:shadow-[0_8px_40px_rgba(255,255,255,0.08)]

          md:p-12
          lg:p-16
        "
      >

        {/* Small top line */}
        <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-blue-500" />


        {/* 404 */}
        <div className="relative">

          <h1
            className="
              select-none
              text-8xl
              font-black
              leading-none
              tracking-tighter
              text-transparent
              bg-gradient-to-b
              from-blue-500
              to-sky-600
              bg-clip-text

              dark:from-blue-400
              dark:to-sky-400

              md:text-9xl
            "
          >
            404
          </h1>

          {/* Decorative dots */}
          <div className="absolute -right-2 top-2 h-3 w-3 rounded-full bg-blue-500/70 dark:bg-blue-400/70" />

          <div className="absolute -left-2 bottom-2 h-2 w-2 rounded-full bg-sky-500/70 dark:bg-sky-400/70" />

        </div>


        {/* Title */}
        <h2
          className="
            mt-8
            text-2xl
            font-bold
            text-slate-900

            dark:text-slate-100

            md:text-3xl
            lg:text-4xl
          "
        >
          صفحه مورد نظر پیدا نشد
        </h2>


        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-base
            leading-8
            text-slate-500

            dark:text-slate-400

            md:text-lg
          "
        >
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد
          یا ممکن است آدرس آن تغییر کرده باشد.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-3

            sm:flex-row
            sm:gap-4
          "
        >

          {/* Home */}
          <Link
            href="/"
            className="
              group
              flex
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
              px-7
              py-3.5
              font-bold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
              hover:shadow-blue-500/30

              active:scale-95
            "
          >
            <span>
              بازگشت به صفحه اصلی
            </span>

            <span
              className="
                mr-2
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>
          </Link>


          {/* Products */}
          <Link
            href="/showallproduct"
            className="
              flex
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-300
              bg-white/70
              px-7
              py-3.5
              font-bold
              text-slate-700
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-600

              active:scale-95

              dark:border-slate-700
              dark:bg-slate-800/70
              dark:text-slate-200
              dark:hover:border-blue-500
              dark:hover:bg-slate-800
              dark:hover:text-blue-400
            "
          >
            مشاهده محصولات
          </Link>

        </div>


        {/* Bottom brand */}
        <div className="mt-10">

          <Link
            href="/"
            className="
              text-sm
              font-extrabold
              tracking-wide
              text-slate-400
              transition-colors
              hover:text-blue-600

              dark:text-slate-500
              dark:hover:text-blue-400
            "
          >
            صدف
          </Link>

        </div>

      </div>

    </main>
  );
}