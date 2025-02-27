import { useNavigate } from "react-router-dom";
import Product from "./productList";

interface CartProps {
    onClose: () => void;
}

const Cart:React.FC<CartProps> =({onClose}) => {
    const navigate = useNavigate();
    const checkoutCart = () =>{
        navigate('/checkout')
        
    };
    return<>
        <div className='bg-gray-200 w-[1200px] h-[500px] text-black absolute z-50'>
            <div className="flex justify-between bg-gray-400">
                <div></div>
                <div className=" m-2 px-1 border-2 border-solid border-black rounded-lg">
                    <button onClick={onClose}>X
                    </button>
                </div>
            </div>
            <div>
                shop 
            </div>
            <div className="flex justify-center">
                <button onClick={checkoutCart}>Checkout</button>
            </div>
        </div>
    </>
}
export default Cart;