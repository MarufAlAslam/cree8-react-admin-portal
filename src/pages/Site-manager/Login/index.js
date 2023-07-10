import React from "react";
import logo from "../../../assets/images/Login/logo.png";

const Login = () => {
  return (
    <div className="site-manager-login min-h-screen bg-[#0F4C7D] text-white md:p-[80px] flex justify-center items-center">
      <div className="flex justify-between items-center w-full">
        <div className="lg:w-1/2 w-full text-center md:block hidden">
          <h2 className="font-medium text-3xl mb-[15px]">
            Building your dreams, one brick at a time
          </h2>
          <p>
            With 20 years of experience in the industry, We have built a solid{" "}
            <br />
            reputation for delivering high-quality projects on time.
          </p>
        </div>
        <div className="lg:w-1/2 w-full text-center md:p-24">
          <div className="bg-white py-[60px] px-[40px] w-full">
            <div className="text-center">
              <img src={logo} alt="logo" className="mx-auto mb-[24px]" />
              <h2 className="text-[22px] text-black font-semibold">
                Welcome to AM8 Onsite
              </h2>
              <p className="text-[10px] text-[#a1a1a1]">
                Please enter your credentials to access your account.
              </p>
            </div>

            <form className="mt-[40px] text-left">
                <div className="mb-[20px]">
                    <label htmlFor="email" className="block text-sm text-black mb-[10px]">E-mail</label>
                    <input type="email" name="email" id="email" className="w-full border border-[#a1a1a1] rounded-[5px] py-[15px] px-[15px] text-[#a1a1a1] focus:outline-none" placeholder="mail@gmail.com" />
                </div>
                <div className="mb-[20px]">
                    <label htmlFor="password" className="block text-sm text-black mb-[10px]">E-mail</label>
                    <input type="password" name="password" id="password" className="w-full border border-[#a1a1a1] rounded-[5px] py-[15px] px-[15px] text-[#a1a1a1] focus:outline-none" placeholder="Password" />
                </div>
                <div className="mb-[20px] text-right">
                    <a href="/site-manager" className="text-[#111] text-sm">Forgot Password?</a>
                </div>

                <div>
                    <button className="bg-[#0F4C7D] text-white w-full py-[15px] rounded-[5px]">Login</button>
                </div>
                
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
