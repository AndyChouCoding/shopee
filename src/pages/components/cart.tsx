import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const checkoutCart = () => {
    navigate("/checkout");
  };
  const { state, dispatch } = useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  };

  const handleRemove = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 w-[100%] bg-gray-200 text-black shadow-lg z-50 flex flex-col">
      {/* 關閉按鈕 */}
      <div className="w-[1200px] m-[auto] ">
        <div className="flex justify-between bg-gray-400 p-4">
          <h2 className="text-lg font-bold">購物車</h2>
          <button
            onClick={onClose}
            className="px-2 py-1 border border-black rounded-lg"
          >
            X
          </button>
        </div>

        {/* 購物車內容 */}
        <div className="flex-1 overflow-y-auto p-4 h-[75vh]">
          {state.cartItems.length === 0 ? (
            <p className="text-center text-gray-500">購物車是空的</p>
          ) : (
            <>
              <div className="space-y-4">
                {state.cartItems.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center border-b py-4"
                  >
                    <img
                      src={item.productImage}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-semibold">{item.productName}</p>
                      <p className="text-red-500 font-bold">
                        ${item.productPrice} x {item.quantity}
                      </p>
                    </div>
                    <div>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.productId,
                            Number(e.target.value)
                          )
                        }
                        className="border p-1 w-16 text-center"
                      />
                    </div>
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="ml-4 text-red-500"
                    >
                      移除
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <p className="text-xl font-bold">總計: ${totalPrice}</p>
              </div>
            </>
          )}
        </div>
        {/* Checkout 按鈕 */}
        <div className="p-4 bg-gray-300">
          <button
            onClick={checkoutCart}
            className="w-full bg-red-500 text-white py-2 rounded-md"
          >
            前往結賬
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
