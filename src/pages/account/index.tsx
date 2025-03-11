import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authcContext"; // 🔥 確保正確引入 useAuth

const AccountPage = () => {
  const location = useLocation();
  const { currentUser } = useAuth(); // 🔥 從 AuthContext 取得當前使用者資訊
  const [isAccountOpen, setIsAccountOpen] = useState(true); // 預設展開 "我的帳戶"

  // ✅ 當路徑變化時，根據當前頁面判斷是否要展開「我的帳戶」子選單
  useEffect(() => {
    if (location.pathname.startsWith("/account/profile") || location.pathname.startsWith("/account/settings")) {
      setIsAccountOpen(true); // 在 "我的帳戶" 子選單內時展開
    } else {
      setIsAccountOpen(false); // 其他頁面時收起
    }
  }, [location.pathname]);

  // ✅ 判斷當前是否在 "我的帳戶" 下的子選單
  const isAccountSection = location.pathname.startsWith("/account/profile") || location.pathname.startsWith("/account/settings");

  // ✅ 獲取用戶名稱，如果沒有則顯示 Email
  const userName = currentUser?.displayName || currentUser?.email || "訪客";

  return (
    <div className="flex justify-between">
      {/* 側邊選單 */}
      <div className="w-[250px] bg-gray-100 p-4">
        <div className="py-4 my-2 font-bold">{userName}</div> {/* 🔥 顯示使用者名稱 */}

        <div>
          {/* 我的帳戶 - 可展開子選單 */}
          <div
            className="py-2 cursor-pointer flex justify-between items-center"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          >
            <span className={isAccountSection ? "text-orange-500 font-bold" : "text-gray-700"}>
              我的帳戶
            </span>
            <span>{isAccountOpen ? "▲" : "▼"}</span>
          </div>

          {/* 子選單 */}
          {isAccountOpen && (
            <div className="ml-4">
              <NavLink
                to="/account/profile"
                className={({ isActive }) =>
                  isActive || location.pathname === "/account"
                    ? "text-orange-500 font-bold"
                    : "text-gray-500"
                }
              >
                <div className="py-1">個人資料</div>
              </NavLink>
              <NavLink
                to="/account/settings"
                className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-500")}
              >
                <div className="py-1">帳戶設定</div>
              </NavLink>
            </div>
          )}

          {/* 其他選單 */}
          <NavLink
            to="/account/orderHistory"
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-700")}
          >
            <div className="py-2">購買清單</div>
          </NavLink>
          <NavLink
            to="/account/notifications"
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-700")}
          >
            <div className="py-2">通知總覽</div>
          </NavLink>
          <NavLink
            to="/account/coupons"
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-700")}
          >
            <div className="py-2">我的優惠卷</div>
          </NavLink>
          <NavLink
            to="/account/coins"
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-700")}
          >
            <div className="py-2">我的蝦幣</div>
          </NavLink>
          <NavLink
            to="/account/transactions"
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-gray-700")}
          >
            <div className="py-2">交易支付與退款查詢</div>
          </NavLink>
        </div>
      </div>

      {/* 右側內容區域 */}
      <div className="w-[950px] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
