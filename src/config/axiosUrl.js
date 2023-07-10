import axios from "axios";
import { APP_URL } from "./url";

const UserService = axios.create({
  baseURL: APP_URL?.User,
});

const SettingService = axios.create({
  baseURL: APP_URL?.Setting,
});

export { UserService, SettingService };
