"use client";

import Counter from "./Counter";

const stats = [
  {
    title: "دسته‌بندی محصول",
    value: 9,
    suffix: "",
  },
  {
    title: "محصولات موجود",
    value: 50,
    suffix: "+",
  },
  {
    title: "برندهای معتبر",
    value: 12,
    suffix: "+",
  },
  {
    title: "استانداردهای جهانی",
    value: 6,
    suffix: "",
  },
];

export default function StatsSection() {
  return (
    <section className="h-[200px]">
      <div className="w-[350px] md:w-[800px] lg:w-[1000px] xl:w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-2xl mt-3 md:h-[130px] bg-white shadow-md border border-slate-200"
          >
            <p className=" mb-3 text-slate-800 text-xl lg:text-3xl">
              {item.title}
            </p>
            <Counter
              end={item.value}
              suffix={item.suffix}
              delay={2000 + index * 300}
              duration={2000}
              className="text-2xl lg:text-4xl font-bold text-sky-600"
            />


          </div>
        ))}
      </div>
    </section>
  );
}