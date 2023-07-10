export const AUTH_SESSION_KEY = "cree8_auth";
export const Auth_USER_KEY = "cree8_user";

const setLoggedInUser = (user) => {
  localStorage.setItem(AUTH_SESSION_KEY, user);
};

const setAuthUser = (user) => {
  localStorage.setItem(Auth_USER_KEY, JSON.stringify(user));
};

const LoggedInUser = () => {
  let user = localStorage.getItem(AUTH_SESSION_KEY);
  return user;
};

const Authuser = () => {
  let user = localStorage.getItem(Auth_USER_KEY);
  return JSON.parse(user);
};

const ApiAuthorizaion = () => {
  let user = localStorage.getItem(AUTH_SESSION_KEY);
  let auth = "JWT " + user;
  return auth;
};

export {
  setLoggedInUser,
  LoggedInUser,
  setAuthUser,
  Authuser,
  ApiAuthorizaion,
};
