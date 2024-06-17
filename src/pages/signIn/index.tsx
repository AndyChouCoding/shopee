import React, { useState } from 'react';
import { useAuth } from '../../contexts/authcContext';
import { useNavigate } from 'react-router-dom';
import AccountBtns from '../components/accountBtns';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null);
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to sign in', error);
      setError('Failed to sign in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
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
        Sign In
      </AccountBtns>
    </form>
  );
};

export default SignIn;
