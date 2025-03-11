import React from "react";
import { useCart } from "../../../contexts/cartContext";
import { useNavigate } from "react-router-dom";

const OrderHistory: React.FC = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">📜 訂單歷史</h2>
      
      {state.orderHistory.length === 0 ? (
        <p className="text-center text-gray-600 mt-4">目前沒有訂單記錄。</p>
      ) : (
        state.orderHistory.map((order, index) => (
          <div key={index} className="border p-4 my-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">訂單 #{index + 1}</h3>
            <p><strong>收件地址：</strong> {order.shippingAddress}</p>
            <p><strong>付款方式：</strong> {order.paymentMethod}</p>
            <p><strong>總金額：</strong> ${order.totalAmount.toFixed(2)}</p>

            <h4 className="text-md font-semibold mt-3">商品列表：</h4>
            <ul className="list-disc pl-6">
              {order.items.map((item) => (
                <li key={item.productId} className="border-b py-2">
                  <div className="flex items-center">
                    <img src={item.productImage} alt={item.productName} className="w-16 h-16 object-cover rounded-md" />
                    <div className="ml-4">
                      <p className="font-semibold">{item.productName}</p>
                      <p>${item.productPrice} x {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => navigate("/")}>
          回到首頁
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
