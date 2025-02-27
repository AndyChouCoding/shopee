import React from "react";
import { useParams } from "react-router-dom";
import ProductCategories from "../../mockDate/product.json";

// 定義商品類型
interface Product {
  productId: string;
  productName: string;
  description: string;
  productImage: string;
  productPrice: number;
}

// 定義分類類型
interface Category {
  categoryId: string;
  categoryName: string;
  categoryImage: string;
  products: Product[];
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  let selectedProduct: Product | undefined;

  // 確保 TypeScript 知道 ProductCategories 是 Category[]
  const categories: Category[] = ProductCategories as unknown as Category[];

  for (const category of categories) {
    selectedProduct = category.products.find((product) => product.productId === productId);
    if (selectedProduct) break;
  }

  if (!selectedProduct) {
    return <div className="text-center text-xl text-red-500">找不到該商品</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold my-4">{selectedProduct.productName}</h2>
      <div className="flex">
        <img src={selectedProduct.productImage} alt={selectedProduct.productName} className="w-1/3 h-auto" />
        <div className="ml-8">
          <p className="text-gray-700">{selectedProduct.description}</p>
          <p className="text-red-500 text-2xl font-bold mt-2">${selectedProduct.productPrice}</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">加入購物車</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
