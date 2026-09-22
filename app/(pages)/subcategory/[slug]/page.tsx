import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Card from "@/ui/Card";

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const q = "";
  
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }


  const categoryProducts =
    products.filter((product) => product.categoryId === category.id);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-12">
      <div className="mx-auto max-w-7xl space-y-10 py-10">
        <h1 className="mb-10 text-3xl font-bold text-slate-800">
          {category.name}
        </h1>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                about={product.shortDescription}
                slug={product.slug}
                q={q}
              />
            ))}
          </div>
        ) : (
          <p className="text-slate-500">
            محصولی در این دسته ثبت نشده است.
          </p>
        )}
      </div>
    </main>
  );
}
