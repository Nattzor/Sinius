import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function saveUserToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function userAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// export async function login(email, password) {
//   return await axios.post("/auth/", { email, password });
// }

export async function getItems() {
  return await axios.get("/items");
}

export async function registerUser(email, name, password, address) {
  return await axios.post("/register/", { email, name, password, address });
}

export async function authUser(email, password) {
  return await axios.post("/auth/", { email, password });
}

export async function userAccount() {
  return await axios.get("/me/");
}