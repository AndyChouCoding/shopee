import React from "react";
import { useCart } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import ProductCategoriesData from "../../mockDate/product.json"; // ✅ 匯入商品資料

const OrderConfirmation: React.FC = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  const getRandomProducts = () => {
    let allProducts = ProductCategoriesData.flatMap((category) => category.products);
    return allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  const recommendedProducts = getRandomProducts();
  const totalAmount = state.orderDetails?.totalAmount ?? 0; // ✅ 確保 `totalAmount` 不會是 undefined

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-600 text-center">🎉 訂單完成！</h2>
      <p className="text-center text-gray-600">感謝您的購買，我們正在處理您的訂單。</p>

      <div className="mt-4 p-4 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">訂單資訊</h3>
        <p><strong>收件地址：</strong> {state.orderDetails?.shippingAddress || "未填寫"}</p>
        <p><strong>付款方式：</strong> {state.orderDetails?.paymentMethod || "未選擇"}</p>
        <p><strong>總金額：</strong> ${totalAmount.toFixed(2)}</p> {/* ✅ 確保 totalAmount 不會報錯 */}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => navigate("/")}>
          回到首頁
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded mx-2" onClick={() => navigate("/account/orders")}>
          查看訂單
        </button>
      </div>

      {/* ✅ 推薦商品區塊 */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-center">💡 您可能還喜歡</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {recommendedProducts.map((product) => (
            <div key={product.productId} className="border p-4 rounded-lg text-center">
              <img src={product.productImage} alt={product.productName} className="w-full h-40 object-cover rounded-md" />
              <p className="mt-2 font-semibold">{product.productName}</p>
              <p className="text-red-500 font-bold">${product.productPrice}</p>
              <button
                className="bg-green-500 text-white px-4 py-1 mt-2 rounded"
                onClick={() => navigate(`/product/${product.productId}`)}
              >
                查看商品
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
