import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const LoginForm = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-5">
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
        <p className="text-right font-medium mt-5">
          <Link to="#" className="text-red-500 hover:underline">
            Forget Password
          </Link>
        </p>
        <input
          type="submit"
          value="Log In"
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded btn w-full text-lg"
        />
      </form>
      <p className="text-right mt-5">
        No Account? please
        <Link to="/auth/signup" className="text-red-500 ml-2 underline">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default LoginForm;
