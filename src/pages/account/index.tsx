import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const AccountPage = () => {
  const location = useLocation();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="flex justify-between">
      {/* 側邊選單 */}
      <div className="w-[250px] bg-gray-100 p-4">
        <div className="py-4 my-2 font-bold">UserName</div>
        <div>
          {/* 我的帳戶 - 可展開子選單 */}
          <div
            className="py-2 cursor-pointer flex justify-between items-center"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          >
            <span className={isAccountOpen ? "text-orange-500 font-bold" : "text-gray-700"}>我的帳戶</span>
            <span>{isAccountOpen ? "▲" : "▼"}</span> {/* 展開箭頭 */}
          </div>

          {/* 子選單 */}
          {isAccountOpen && (
            <div className="ml-4">
              <NavLink to="/account/profile" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-500"}>
                <div className="py-1">個人資料</div>
              </NavLink>
              <NavLink to="/account/settings" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-500"}>
                <div className="py-1">帳戶設定</div>
              </NavLink>
            </div>
          )}

          {/* 其他選單 */}
          <NavLink to="/account/orders" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>
            <div className="py-2">購買清單</div>
          </NavLink>
          <NavLink to="/account/notifications" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>
            <div className="py-2">通知總覽</div>
          </NavLink>
          <NavLink to="/account/coupons" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>
            <div className="py-2">我的優惠卷</div>
          </NavLink>
          <NavLink to="/account/coins" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>
            <div className="py-2">我的蝦幣</div>
          </NavLink>
          <NavLink to="/account/transactions" className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>
            <div className="py-2">交易支付與退款查詢</div>
          </NavLink>
        </div>
      </div>

      {/* 右側內容區域 */}
      <div className="w-[950px] p-4">
        {location.pathname === "/account" ? (
          <div>歡迎來到帳戶管理頁面，請選擇左側選單進入不同的管理頁面。</div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AccountPage;
