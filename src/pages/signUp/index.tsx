import React, { useState } from 'react';
import { useAuth } from '../../contexts/authcContext';
import { useNavigate } from 'react-router-dom';
import AccountBtns from '../components/accountBtns';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null);
      await signup(email, password);
      setMessage('A verification email has been sent. Please check your inbox and verify your email before logging in.');
      // Redirect to login page after successful signup and email verification
      setTimeout(() => navigate('/signin'), 5000);
    } catch (error) {
      console.error('Failed to sign up', error);
      setError('Failed to create an account');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <AccountBtns type='submit' onClick={()=>{}}>
        Sign Up
      </AccountBtns>
    </form>
  );
};

export default SignUp;
