import React, { useState } from 'react';
import { useAuth } from '../../contexts/authcContext';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to sign in', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
