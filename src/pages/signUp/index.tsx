import React, { useState } from 'react';
import { useAuth } from '../../contexts/authcContext';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null);
      await signup(email, password);
      navigate('/'); // 注册成功后导航到首页或其他页面
    } catch (error) {
      console.error('Failed to sign up', error);
      setError('Failed to create an account');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
