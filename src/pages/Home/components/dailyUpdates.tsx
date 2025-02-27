import React from "react";
import { Link } from "react-router-dom";
import ProductCategories from "../../../mockDate/product.json"; // ✅ 確保載入 JSON

// ✅ 定義類型
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

// ✅ 隨機選取 `N` 個產品
const getRandomProducts = (categories: Category[], count: number): Product[] => {
  const allProducts = categories.flatMap(category => category.products); // ✅ 取得所有商品
  const shuffled = allProducts.sort(() => 0.5 - Math.random()); // ✅ 隨機排序
  return shuffled.slice(0, count); // ✅ 選取 `count` 個商品
};

// ✅ 每日新發現元件
const DailyUpdate: React.FC = () => {
  const randomProducts = getRandomProducts(ProductCategories, 12); // ✅ 取得 6 個隨機商品

  return (
    <div className="mt-2">
      <h3 className="flex justify-center p-2 text-[#f63] font-bold border-b-[6px] border-[#f63] mb-2">
        每日新發現
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {randomProducts.map((product) => (
          <Link key={product.productId} to={`/product/${product.productId}`} className="w-full p-2">
            <div>
              <img src={product.productImage} alt={product.productName} className="w-full h-[150px] object-cover" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DailyUpdate;
