import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCategoriesData from "../../mockDate/product.json"; // ✅ 確保載入 JSON

// ✅ 定義類別和商品的類型
interface Product {
  productId: string;
  productName: string;
  description: string;
  productImage: string;
  productPrice: number;
}

interface Category {
  categoryId: string;
  categoryName: string;
  categoryImage: string;
  products: Product[];
}

// ✅ 明確告知 TypeScript 這個 JSON 的類型
const ProductCategories: Category[] = ProductCategoriesData as unknown as Category[];

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // ✅ 確保找尋的 `categoryId` 存在
  const selectedCategory = ProductCategories.find(cat => cat.categoryId === categoryId);

  if (!selectedCategory) {
    return <div className="text-center text-xl text-red-500">找不到該分類</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold my-4">{selectedCategory.categoryName}</h2>
      <div className="grid grid-cols-4 gap-4">
        {selectedCategory.products.map(product => (
          <Link key={product.productId} to={`/product/${product.productId}`} className="border p-4 text-center">
            <img src={product.productImage} alt={product.productName} className="w-full h-40 object-cover" />
            <p className="mt-2 font-semibold">{product.productName}</p>
            <p className="text-red-500 font-bold">${product.productPrice}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
