// checkout.tsx
import React, { useState } from "react";
import { useCart } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_ORDER_DETAILS", order: { ...state.orderDetails!, shippingAddress, paymentMethod } });
    dispatch({ type: "CLEAR_CART" });
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">結帳</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.productId} className="border p-2">
            <p>{item.productName} - ${item.productPrice} x {item.quantity}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>收件地址</label>
        <input className="border p-2 w-full" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />
        <label>付款方式</label>
        <select className="border p-2 w-full" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit-card">信用卡</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit" className="w-full bg-green-500 text-white p-2 mt-4">確認付款</button>
      </form>
    </div>
  );
};

export default Checkout;
