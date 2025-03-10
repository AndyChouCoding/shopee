import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import ProductCategories from "../../mockDate/product.json"; // 假設此 JSON 包含商品資料

// 定義商品型別（與購物車項目類型一致）
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

const ProductCategoriesData: Category[] = ProductCategories as unknown as Category[];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { dispatch } = useCart();

  let selectedProduct: Product | undefined;
  for (const category of ProductCategoriesData) {
    selectedProduct = category.products.find((p) => p.productId === productId);
    if (selectedProduct) break;
  }

  if (!selectedProduct) {
    return <div className="text-center text-xl text-red-500">找不到該商品</div>;
  }

  const handleAddToCart = () => {
    if (!selectedProduct?.productId) {
      console.error("商品 ID 不存在");
      return;
    }
  
    dispatch({
      type: "ADD_TO_CART",
      product: {
        productId: selectedProduct.productId, // ✅ 確保存在
        productName: selectedProduct.productName || "未命名商品",
        productImage: selectedProduct.productImage || "",
        productPrice: selectedProduct.productPrice || 0,
        quantity: 1,
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold my-4">{selectedProduct.productName}</h2>
      <div className="flex">
        <img
          src={selectedProduct.productImage}
          alt={selectedProduct.productName}
          className="w-1/3 h-auto"
        />
        <div className="ml-8">
          <p className="text-gray-700">{selectedProduct.description}</p>
          <p className="text-red-500 text-2xl font-bold mt-2">
            ${selectedProduct.productPrice}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
