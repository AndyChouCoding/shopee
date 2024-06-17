import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authcContext';
import Cart from '../components/cart';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const LogoBtn = () => {
    navigate('/')
  }

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

  const toggleCart = () =>{
    setShowCart(!showCart);
  };

  return (
    <>
      <header className=' p-2 bg-[#f63]'>
        <nav className='flex justify-between w-[1200px]  mx-[auto] my-0 sticky'>
          <div>
            <h1 onClick={LogoBtn}>Shopee</h1>
          </div>
          <div>
            {currentUser ? (
              <>
                <button onClick={toggleCart} className="mx-2">Cart</button>
                <button onClick={Logout} className='mx-2'>Logout</button>
              </>
            ) : (
              <>
                 <button onClick={toggleCart} className="mx-2">Cart</button>
                <button onClick={SignInBtn} className='mx-2'>SignIn</button>
                <button onClick={SignUpBtn} className='mx-2'>SignUp</button>
                <button onClick={ForgotPasswordBtn} className='mx-2'>Forgot</button>
              </>
            )}
          </div>
        </nav>
      </header>
      <div>
        <main className=' w-[1200px] mx-[auto] my-0'>
            {showCart && <Cart onCLose={toggleCart}/> }
            {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
