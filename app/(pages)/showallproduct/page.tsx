'use client';

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import Card from "@/ui/Card";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function All() {
  // پیدا کردن دسته‌های والد
  const parentCategories = categories.filter(
    (category) => category.parentId === null
  );

  // تابع برای پیدا کردن محصولات یک دسته
  const getSubProducts = (categoryId: string) =>
    products.filter((product) => product.categoryId === categoryId);

  // تنظیمات صفحه‌بندی برای دسته‌بندی‌ها
  const itemsPerPage = 2; // 2 دسته در هر صفحه
  const [itemOffset, setItemOffset] = useState(0);

  // محاسبه دسته‌بندی‌های صفحه فعلی
  const endOffset = itemOffset + itemsPerPage;
  const currentCategories = parentCategories.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(parentCategories.length / itemsPerPage);

  // وقتی کاربر صفحه را عوض می‌کند
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % parentCategories.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            🏭 همه محصولات
          </h1>
          <p className="text-gray-500 text-lg">
            مرور تمام دسته‌بندی‌ها و محصولات صنعتی صدف
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {parentCategories.length > 0 ? (
          <>
            {currentCategories.map((parent) => {
              const subCategories = categories.filter(
                (item) => item.parentId === parent.id
              );

              return (
                <div key={parent.id} className="mb-12">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-white">
                        {parent.name}
                      </h2>
                      <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">
                        {subCategories.length} زیرمجموعه
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8 pr-4">
                    {subCategories.map((subCategory) => {
                      const subProducts = getSubProducts(subCategory.id);

                      return (
                        <div key={subCategory.id} className="relative">
                          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-blue-200 mr-4"></div>

                          <div className="mr-8">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                              <h3 className="text-xl font-semibold text-gray-800">
                                {subCategory.name}
                              </h3>
                              <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                                {subProducts.length} محصول
                              </span>
                            </div>

                            {subProducts.length > 0 ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                {subProducts.map((product) => (
                                  <Card
                                    key={product.id}
                                    name={product.name}
                                    about={product.shortDescription}
                                    slug={product.slug}
                                    q={""}
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="bg-gray-50 rounded-lg p-6 text-center border-2 border-dashed border-gray-200">
                                <p className="text-gray-400">
                                  📦 محصولی در این دسته ثبت نشده است
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* صفحه‌بندی */}
            {pageCount > 1 && (
              <div className="mt-8 flex justify-center">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="بعدی ←"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel=" →قبلی"
                  renderOnZeroPageCount={null}
                  containerClassName="flex items-center gap-2"
                  pageClassName="px-3 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  activeClassName="!bg-blue-500 !text-white !border-blue-500"
                  previousClassName="px-3 py-2 bg-white text-black  border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  nextClassName="px-3 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  disabledClassName="opacity-50 cursor-not-allowed"
                  breakClassName="px-2"
                />
              </div>
            )}

            {/* نمایش شماره صفحه و تعداد کل */}
            <div className="text-center text-gray-500 text-sm mt-4">
              صفحه {Math.floor(itemOffset / itemsPerPage) + 1} از {pageCount}
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">
              📦 دسته‌بندی ثبت نشده است
            </p>
          </div>
        )}
      </div>
    </div>
  );
}