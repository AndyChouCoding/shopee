import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authcContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const SignInBtn = () => {
    navigate('/signin');
  };

  const SignUpBtn = () => {
    navigate('/signup');
  };

  const ForgotPasswordBtn = () => {
    navigate('/forgotPassword');
  };

  const Logout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      console.log('Failed to log out', error);
    }
  };

  return (
    <>
      <div className='p-2 bg-orange-300'>
        <nav className='flex justify-between'>
          <div>
            <h1>Shopee</h1>
          </div>
          <div>
            {currentUser ? (
              <>
                <button onClick={Logout} className='mx-2'>Logout</button>
              </>
            ) : (
              <>
                <button onClick={SignInBtn} className='mx-2'>SignIn</button>
                <button onClick={SignUpBtn} className='mx-2'>SignUp</button>
                <button onClick={ForgotPasswordBtn} className='mx-2'>Forgot</button>
              </>
            )}
          </div>
        </nav>
      </div>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
