import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            برندها
          </h1>

          <p className="text-gray-500 text-lg">
            {brands.length} برند
          </p>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {brands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="group"
              >
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">

                  <div className="relative w-full h-32 flex items-center justify-center mb-5">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <h2 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-500 transition-colors">
                    {brand.name}
                  </h2>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              برندی ثبت نشده است
            </p>
          </div>
        )}

      </div>
    </main>
  );
}