"use client";

import { products } from "@/data/products";
import Card from "@/ui/Card";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function NewProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const newProducts = products.filter((item) => item.isNew === true);

  // تعداد محصولات در هر صفحه
  const itemsPerPage = 6;

  // شماره صفحه از URL
  const pageParam = Number(searchParams.get("page")) || 1;

  // جلوگیری از وارد کردن شماره صفحه نامعتبر
  const currentPage = Math.min(
    Math.max(pageParam, 1),
    Math.ceil(newProducts.length / itemsPerPage)
  );

  // محاسبه Offset
  const itemOffset = (currentPage - 1) * itemsPerPage;

  // محصولات صفحه فعلی
  const currentItems = newProducts.slice(
    itemOffset,
    itemOffset + itemsPerPage
  );

  // تعداد صفحات
  const pageCount = Math.ceil(newProducts.length / itemsPerPage);

  // تغییر صفحه
  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;

    // صفحه اول بدون query
    if (newPage === 1) {
      router.push("/newproduct");
    } else {
      router.push(`/newproduct?page=${newPage}`);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            🆕 محصولات جدید
          </h1>

          <p className="text-gray-500 text-lg">
            {newProducts.length} محصول جدید
          </p>

          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentItems.map((product) => (
                <Card
                  key={product.id}
                  name={product.name}
                  about={product.shortDescription}
                  slug={product.slug}
                  q={""}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel="بعدی ←"
                previousLabel="→ قبلی"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center gap-2"
                pageClassName="px-3 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                activeClassName="!bg-blue-500 !text-white !border-blue-500"
                previousClassName="px-3 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                nextClassName="px-3 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                disabledClassName="opacity-50 cursor-not-allowed"
                breakClassName="px-2"
              />
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">
              📦 محصول جدیدی ثبت نشده است
            </p>
          </div>
        )}
      </div>
    </div>
  );
}