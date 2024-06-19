// src/api/axios.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor to include the JWT token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
