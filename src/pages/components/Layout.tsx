import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/authcContext";
import Cart from "../components/cart";
import BannerSection from "../Home/components/banner";
import "./css/layout.css";
import Footer from "./footer";
import { useCart } from "../../contexts/cartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const { state } = useCart();
  const cartQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    setShowCart(false);
  }, [location]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const LogoBtn = () => {
    navigate("/");
  };

  const SignInBtn = () => {
    navigate("/signin");
  };

  const SignUpBtn = () => {
    navigate("/signup");
  };

  const Logout = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.log("Failed to log out", error);
    }
  };

  const searchBtn = () => {
    console.log("Search access");
  };

  return (
    <>
      <header className="md:bg-[#f63] xs:p-2 text-white sticky top-0 z-[99] ">
        <nav className="w-[1200px] mx-[auto] my-0 py-1 sticky bg-[#f63] ">
          {/* nav top */}
          <div className="flex justify-between text-[10px]">
            <div className="flex">
              <button onClick={() => console.log("click")}>賣家中心</button>
              <div className="w-[1px] h-[10px] my-[auto] bg-white mx-2"></div>
              <button onClick={() => console.log("click")}>下載</button>
              <div className="w-[1px] h-[10px] my-[auto] bg-white mx-2"></div>
              <button onClick={() => console.log("click")}>追蹤我們</button>
            </div>
            <div>
              {currentUser ? (
                <div className="flex items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </div>
                  <div id="UserId">
                    <div className="mx-2 ">
                      {currentUser.displayName || currentUser.email}
                    </div>
                    <div id="UserCoutorl" className="">
                      <div className="p-1 border-solid border-1px border-[#000]">
                        <a href="/account/profile">我的帳戶</a>
                      </div>
                      <div className="p-1 border-solid border-1px border-[#000]">
                        <a className="py-2" href="/shopinglist">
                          購物清單
                        </a>
                      </div>
                      <div className="p-1 border-solid border-1px border-[#000]">
                        <button onClick={Logout}>登出</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-around">
                    <button onClick={SignUpBtn} className="mx-3">
                      註冊
                    </button>
                    <button onClick={SignInBtn} className="mx-3">
                      登入
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* nav mid */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-[26px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <h1 className="px-2" onClick={LogoBtn}>
                Shopee
              </h1>
            </div>
            <div>
              <div className=" bg-white p-1 items-center">
                <div>
                  <input
                    className="rounded-3xl p-2 mx-2 w-[700px] text-[#000]"
                    type="text"
                    placeholder="搜尋商品、品牌或賣場"
                  />
                  <button
                    className="bg-[#f63] text-[#fff] py-2 px-6 rounded-xs"
                    onClick={searchBtn}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Cart btn */}
            <div>
              <button onClick={toggleCart} className="mx-3 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                {cartQuantity > 0 && (
                  <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full px-1">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>
          {/* nav down */}
          <div className=" flex justify-center text-[12px] mt-1 ">
            <div className="flex justify-between w-[700px]">
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
              <a href="#">product</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="">
        <main className=" w-[1200px] mx-[auto] ">
          {showCart && <Cart onClose={toggleCart} />}
          {children}
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
