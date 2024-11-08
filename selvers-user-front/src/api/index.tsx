// api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // baseURL: "https://api.micemate.io/",
});

export default apiClient;
