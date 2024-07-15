// src/hooks/useSignUp.js
import { useMutation } from "react-query";
import apiClient from "../api/axios";

const useSignUp = () => {
  return useMutation(
    async ({ email, password }) => {
      const response = await apiClient.post("/users/register", {
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
        console.error("Sign-up error:", error.message);
      },
    }
  );
};

export default useSignUp;
