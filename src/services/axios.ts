import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_BASE_ENDPOINT}/api/v1`;
console.log("BASE_URL", import.meta.env.VITE_APP_BASE_ENDPOINT);

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true
});
