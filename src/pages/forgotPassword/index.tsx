import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authcContext";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (evnet: React.FormEvent) => {
    evnet.preventDefault();
    try {
      setError(null);
      setMessage(null);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      console.error("Failed to reset password", error);
      setError("Failed to reset password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
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
        <button type="submit">Reset Password</button>
      </form>
    </>
  );
};
export default ForgotPassword;
