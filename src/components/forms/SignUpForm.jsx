import React, { useEffect, useState } from "react";
import googleImage from "../../assets/images/login/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useSignUp from "../../hooks/useSignUp";
import apiClient from "../../api/axios";

const SignUpForm = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, updateUserProfile, user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const signUpMutation = useSignUp();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = "";
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    try {
      if (password === confirm_password) {
        await createUser(email, password);
        await updateUserProfile(name, image);
        await signUpMutation.mutateAsync({ email, password });
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  const signInWithGoogle = async (email) => {
    try {
      const response = await apiClient.post("/users/login", {
        email,
        password: "google12345",
      });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(
        "Error signing in with Google:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleLogin();
      const email = response?.user?.email;
      console.log(email)

      // Check if user already exists
      const userExists = await checkUserExists(email);

      if (userExists) {
        // User exists, handle login
        await signInWithGoogle(email);
      } else {
        // New user, handle registration
        await signUpMutation.mutateAsync({
          email,
          password: "google12345",
        });
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  const checkUserExists = async (email) => {
    try {
      const response = await apiClient.get(`/users`);
      const users = response.data; // Assuming this returns an array of users
      const userExists = users.some((user) => user.email === email);
      return userExists;
    } catch (error) {
      console.error(
        "Error checking user existence:",
        error.response ? error.response.data : error.message
      );
      return false;
    }
  };

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Sign Up Successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="name"
            className="outline:none w-full"
            placeholder="user name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            name="email"
            className="outline:none w-full"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            className="outline:none w-full"
            placeholder="Password"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="confirm_password"
            placeholder="confirm password"
            className="outline:none w-full"
          />
        </label>
        {!passMatch && (
          <div className="my-2">
            <p className="text-red-500">Passwords do not match!</p>
          </div>
        )}
        <input
          type="submit"
          value="Sign up"
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded btn w-full"
        />
      </form>
      <div className="divider font-medium">OR</div>
      <button
        onClick={handleGoogleSignIn}
        type="submit"
        className="border py-2 px-6 focus:outline-none bg-gray-100 rounded btn w-full h-fit"
      >
        <img src={googleImage} alt="google logo" loading="lazy" />
        Sign up with Google
      </button>
      <p className="text-center mt-5">
        Already have an account?
        <Link to="/auth/login" className="text-red-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
