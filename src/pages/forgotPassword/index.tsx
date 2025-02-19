import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authcContext";
import AccountBtns from "../components/accountBtns";

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
      {/* <form onSubmit={handleSubmit}>
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
        <AccountBtns type="submit" onClick={()=>{}}>
            Reset
        </AccountBtns>
      </form> */}
       <div
    className="flex justify-end h-[700px]"
    style={{
      backgroundImage: "url('/images/signIn/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <form
      onSubmit={handleSubmit}
      className=" bg-white p-2 mt-[250px] mr-[30px] w-[500px] h-[230px] flex justify-center"
    >
      <div className="">
        <h2 className="my-4 text-[20px]">忘記密碼</h2>
        {error && <p>{error}</p>}
        <div className="my-4">
          <div>
            <label>登入信箱</label>
          </div>
          <div>
            <input
              className=" border-[1px] border-[soild] border-black px-2 py-1 w-[350px]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <AccountBtns
          type="submit"
          className="bg-[#f63] text-white p-2 w-[350px]"
          onClick={() => {}}
        >
          發送認證信
        </AccountBtns>
      </div>
    </form>
  </div>
    </>
  );
};
export default ForgotPassword;
