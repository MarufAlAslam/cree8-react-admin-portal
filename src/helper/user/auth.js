import { UserService } from "../../config/axiosUrl";
import { setLoggedInUser, setAuthUser, LoggedInUser } from "../../auth/appAuth";

const Login = async (login) => {
  try {
    const params = {
      email: login?.email,
      password: login?.password,
    };

    let data = await UserService?.post("/api/v1/auth/panel-login", params);
    if (data?.data?.status) {
      setLoggedInUser(data?.data?.data?.token);
      setAuthUser(data?.data?.data?.user);
    }
    return data?.data;
  } catch (error) {
    return error;
  }
};

const ForgetPassword = async (forgetPassoword) => {
  try {
    const params = await {
      email: forgetPassoword?.email,
    };

    let data = await UserService?.post("/api/v1/auth/forget-password", params);
    return data?.data;
  } catch (error) {
    return error;
  }
};

const ForgetPasswordOtp = async (forgetPassoword) => {
  try {
    const params = {
      otp: forgetPassoword?.otp,
      hashed_otp: forgetPassoword?.hashed_otp,
      customer_id: forgetPassoword?.customer_id,
    };
    let data = await UserService?.post("/api/v1/auth/verify-otp", params);
    return data?.data;
  } catch (error) {
    return error;
  }
};

const ResetPassword = async (forgetPassoword) => {
  try {
    const params = {
      password: forgetPassoword?.password,
      confirm_password: forgetPassoword?.confirm_password,
      customer_id: forgetPassoword?.customer_id,
    };

    let data = await UserService?.post("/api/v1/auth/reset-password", params);
    return data?.data;
  } catch (error) {
    return error;
  }
};

const Logout = (logout) => {
  localStorage.clear();
};

export { Login, Logout, ForgetPassword, ForgetPasswordOtp, ResetPassword };
