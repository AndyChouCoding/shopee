import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import Checkout from './Checkout';
import ForgotPassword from './forgotPassword';
import Home from './Home';
import SignIn from './signIn';
import SignUp from './signUp';
import PrivateRoute from '../components/PrivateRouter';
import Layout from './components/Layout';

const routes: RouteObject[] = [
  { path: '/', element: <Layout><PrivateRoute><Home /></PrivateRoute></Layout> },
  { path: '/Checkout', element: <Layout><PrivateRoute><Checkout /></PrivateRoute></Layout> },
  { path: '/signup', element: <Layout><SignUp /></Layout> },
  { path: '/signin', element: <Layout><SignIn /></Layout> },
  { path: '/forgotPassword', element:<Layout><ForgotPassword /></Layout> },
  { path: '/checkout',element:<Layout><Checkout/></Layout>}
  ];

const Router = createBrowserRouter(routes);

export default Router;
