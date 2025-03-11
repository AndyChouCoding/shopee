import React, { createContext, useContext, useReducer, ReactNode } from "react";

// 定義購物車商品類型
export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
}

// 定義訂單資料類型
export interface OrderDetails {
  items: CartItem[];
  totalAmount: number;
  shippingAddress: string;
  paymentMethod: string;
}

// 定義購物車狀態類型，增加 orderHistory
interface CartState {
  cartItems: CartItem[];
  orderDetails?: OrderDetails;
  orderHistory: OrderDetails[];
}

// 定義購物車動作類型
type CartAction =
  | { type: "ADD_TO_CART"; product: CartItem }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "SET_ORDER_DETAILS"; order: OrderDetails }
  | { type: "ADD_ORDER_HISTORY"; order: OrderDetails };

const initialState: CartState = {
  cartItems: [],
  orderHistory: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item.productId === action.product.productId);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.productId === action.product.productId
              ? { ...item, quantity: item.quantity + action.product.quantity }
              : item
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, { ...action.product, quantity: action.product.quantity }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cartItems: state.cartItems.filter(item => item.productId !== action.productId) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.productId === action.productId ? { ...item, quantity: action.quantity } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cartItems: [] };
      case "SET_ORDER_DETAILS":
        const newOrder = {
          ...action.order,
          items: state.cartItems, // ✅ 存入當前購物車的商品
          totalAmount: state.cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0), // ✅ 計算總金額
        };
        return { 
          ...state, 
          orderDetails: newOrder, 
          orderHistory: [...state.orderHistory, newOrder] // ✅ 存入歷史訂單
        };
    case "ADD_ORDER_HISTORY":
      return { ...state, orderHistory: [...state.orderHistory, action.order] };
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart 必須在 CartProvider 內使用");
  }
  return context;
};
