import React from "react";
import { Link } from "react-router-dom";
import ProductCategoriesData from "../../../mockDate/product.json"; // ✅ 確保正確載入 JSON

// ✅ 定義類型
interface Category {
  categoryId: string;
  categoryName: string;
  categoryImage: string;
}

// ✅ 明確指定 `ProductCategories` 的類型
const ProductCategories: Category[] = ProductCategoriesData as Category[];

// 單個分類卡片
const CategoryCard: React.FC<Category> = ({ categoryId, categoryName, categoryImage }) => {
  return (
    <Link to={`/category/${categoryId}`} className="block w-[100px] text-center">
      <div className="flex justify-center p-4">
        <img src={categoryImage} alt={categoryName} className="w-14 h-14 object-cover" />
      </div>
      <p className="text-sm font-medium">{categoryName}</p>
    </Link>
  );
};

// 商品分類頁面
const ProductClassification: React.FC = () => {
  return (
    <section className="w-[1200px] mx-auto shadow-sm pb-4 bg-slate-200">
      <h2 className="text-xl font-bold text-center py-4">商品分類</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {ProductCategories.map((category) => (
          <CategoryCard
            key={category.categoryId}
            categoryId={category.categoryId}
            categoryName={category.categoryName}
            categoryImage={category.categoryImage}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductClassification;
