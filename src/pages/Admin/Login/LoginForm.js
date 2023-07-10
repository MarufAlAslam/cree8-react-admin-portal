import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../../helper/user/auth";
import { Navigate } from "react-router-dom";
import { LoggedInUser } from "../../../auth/appAuth";
import { ButtonSpinner } from "../../../components/spinners";

const LoginForm = () => {
  //default state values
  const initialvalue = {
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
    validate: {
      email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
    isLoading: false,
  };

  //states
  const [login, setLogin] = useState(initialvalue);

  //refs
  let email = useRef();
  let password = useRef();

  //function
  const handleLogin = {
    getLogin: (e) => {
      setLogin({
        ...login,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitLogin: async () => {
      if (!login?.email) {
        setLogin({
          ...login,
          error: {
            email: "Enter email",
            password: "",
          },
        });
        email.current.focus();
      } else if (!login?.password) {
        setLogin({
          ...login,
          error: {
            email: "",
            password: "Enter password",
          },
        });
        password.current.focus();
      } else {
        setLogin({
          isLoading: true,
        });
        let loginData = await Login(login);
        if (loginData?.status) {
          setLogin(initialvalue);
        } else {
          setLogin({
            ...login,
            error: {
              email: "",
              password: loginData?.message,
              isLoading: false,
            },
          });
        }
      }
    },
  };

  useEffect(() => {
    email.current.focus();
    setLogin({
      user: LoggedInUser(),
    });
  }, [LoggedInUser()]);

  return (
    <div>
      {login?.user && <Navigate to="/admin/dashboard" replace={true} />}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-3" htmlFor="email">
          E-mail
        </label>
        <input
          className={
            login?.error?.email
              ? "border-1 border-rose-600 hover:border-rose-600 appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3"
              : "appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3"
          }
          value={login?.email}
          ref={email}
          onChange={handleLogin?.getLogin}
          id="email"
          type="text"
          name="email"
          placeholder="mail@mail.com"
        />
        {login?.error?.email && (
          <p className="pt-2 text-red-600 text-sm">{login?.error?.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-3" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className={
            login?.error?.password
              ? "border-1 border-rose-600 hover:border-rose-600 appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3 "
              : "appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3"
          }
          ref={password}
          name="password"
          value={login?.password}
          onChange={handleLogin?.getLogin}
          onKeyPress={(e) => e?.key == "Enter" && handleLogin?.submitLogin()}
        />
        {login?.error?.password && (
          <p className="pt-2 text-red-600 text-sm">{login?.error?.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex justify-start items-center">
          <input type="checkbox" id="rem" className="mr-2" checked={true} />
          <label htmlFor="rem" className="text-sm">
            Remember me
          </label>
        </div>
        <Link
          className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
          to="/reset-password"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <button
          className={
            login?.isLoading
              ? "bg-blue-500 w-full text-white  mt-5 py-3 px-4 rounded opacity-50 cursor-not-allowed"
              : "btn-blue w-full mt-5 py-3 hover:bg-orange-600 text-white px-4 rounded focus:outline-none focus:shadow-outline"
          }
          onClick={handleLogin?.submitLogin}
        >
          {login?.isLoading ? <ButtonSpinner /> : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
