import React from "react";
import LoginForm from "../components/forms/LoginForm";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  return (
    <section
      className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      bis_skin_checked="1"
    >
      <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font ">
        Log In to Exclusive
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Enter your details below
      </p>
      <div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
