import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authcContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();
  
  console.log('PrivateRoute currentUser:', currentUser); // 添加日志输出

  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
