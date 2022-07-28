import Axios from "axios";
import { LOGIN_USER } from "./types.js";

export function loginUser(dataTosubmit) {
  const request = Axios.post("/api/user/login", dataTosubmit).then(
    (response) => response.data
  );
  return {
    type: "LOGIN_USER",
    payload: request,
  };
}
