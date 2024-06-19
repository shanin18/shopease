// src/hooks/useLogin.js
import { useMutation } from "react-query";
import apiClient from "../api/axios";

const useLogin = () => {
  return useMutation(
    async ({ email, password }) => {
      const response = await apiClient.post("/users/login", {
        email,
        password,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data?.token);
      },
      onError: (error) => {
        console.error("Login error:", error.message);
      },
    }
  );
};

export default useLogin;
