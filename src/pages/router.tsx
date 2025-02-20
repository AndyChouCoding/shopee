import React from "react";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import Checkout from "./Checkout";
import ForgotPassword from "./forgotPassword";
import Home from "./Home";
import SignIn from "./signIn";
import SignUp from "./signUp";
import PrivateRoute from "../components/PrivateRouter";
import Layout from "./components/Layout";
import AccountPage from "./account";
import ProfilePage from "./account/pages/profilpage";
import OrdersPage from "./account/pages/orderpage";
import NotificationsPage from "./account/pages/notificationspage";
import CouponsPage from "./account/pages/couponspage";
import CoinsPage from "./account/pages/coinspage";
import TransactionsPage from "./account/pages/transactionspage";
import SettingsPage from "./account/pages/settingspage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout><Outlet /></Layout>,
    children: [
      { index: true, element: <PrivateRoute><Home /></PrivateRoute> },
      { path: "checkout", element: <PrivateRoute><Checkout /></PrivateRoute> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      {
        path: "account",
        element: <PrivateRoute><AccountPage /></PrivateRoute>,
        children: [
          { index: true, element: <ProfilePage /> }, // ✅ `/account` 進入時，載入 `ProfilePage`
          { path: "profile", element: <ProfilePage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "orders", element: <OrdersPage /> },
          { path: "notifications", element: <NotificationsPage /> },
          { path: "coupons", element: <CouponsPage /> },
          { path: "coins", element: <CoinsPage /> },
          { path: "transactions", element: <TransactionsPage /> },
        ],
      },
    ],
  },
];

const Router = createBrowserRouter(routes);
export default Router;
