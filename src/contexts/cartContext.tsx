// cartContext.tsx
import React, { createContext, useContext, useReducer } from "react";

// 購物車商品類型
interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
}

// 訂單資料
interface OrderDetails {
  items: CartItem[];
  totalAmount: number;
  shippingAddress: string;
  paymentMethod: string;
}

// 購物車狀態
interface CartState {
  cartItems: CartItem[];
  orderDetails?: OrderDetails;
}

// 購物車操作類型
type CartAction =
  | { type: "ADD_TO_CART"; product: CartItem }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "SET_ORDER_DETAILS"; order: OrderDetails };

// 初始狀態
const initialState: CartState = {
  cartItems: [],
};

// 購物車 Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find((item) => item.productId === action.product.productId);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.productId === action.product.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, { ...action.product, quantity: 1 }] };

    case "REMOVE_FROM_CART":
      return { ...state, cartItems: state.cartItems.filter((item) => item.productId !== action.productId) };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.productId ? { ...item, quantity: action.quantity } : item
        ),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

      case "SET_ORDER_DETAILS":
        return {
          ...state,
          orderDetails: {
            items: action.order.items,
            totalAmount: action.order.totalAmount, // ✅ 確保 `totalAmount` 存入 state
            shippingAddress: action.order.shippingAddress,
            paymentMethod: action.order.paymentMethod,
          },
        };
    default:
      return state;
  }
};

// 建立 Context
const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

// Provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// 自定義 Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart 必須在 CartProvider 內使用");
  }
  return context;
};
