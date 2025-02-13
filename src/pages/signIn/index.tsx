import React, { useState } from "react";
import { useAuth } from "../../contexts/authcContext";
import { useNavigate } from "react-router-dom";
import AccountBtns from "../components/accountBtns";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Failed to sign in", error);
      setError("Failed to sign in");
    }
  };

  return (
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
        className=" bg-yellow-100 p-2 mt-[150px] mr-[30px] w-[500px] h-[400px] flex justify-center"
      >
        <div className="">
          <h2 className="my-4 text-[20px]">登入</h2>
          {error && <p>{error}</p>}
          <div className="my-4">
            <div>
              <label>登入帳號或登入信箱</label>
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
          <div className="my-4">
            <div>
              <label>密碼</label>
            </div>
            <div>
              <input
                className=" border-[1px] border-[soild] border-black px-2 py-1 w-[350px]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <AccountBtns
            type="submit"
            className="bg-[#f63] text-white p-2 w-[350px]"
            onClick={() => {}}
          >
            登入
          </AccountBtns>
          <div className="flex justify-between my-2 text-[12px] text-blue-700 ">
            <a href="#">忘記密碼</a>
            <a href="#">使用簡訊登入</a>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="mx-2 text-gray-400 text-[12px]">或</div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-between my-2 ">
            <a
              href=""
              className="flex justify-center w-[170px] p-2 border-[1px] border-solid border-black"
            >
              <div></div>
              <div>Facebook</div>
            </a>
            <a
              href=""
              className="flex justify-center w-[170px] p-2 border-[1px] border-solid border-black"
            >
              <div></div>
              <div>Google</div>
            </a>
          </div>
          <div className="flex justify-center">
            <p>
              蝦皮新朋友？
              <a href="/signup" className="text-[#f63] font-medium">
                註冊
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
