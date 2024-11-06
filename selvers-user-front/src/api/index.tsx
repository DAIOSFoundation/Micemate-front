// api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.micemate.io/",
});

export default apiClient;
