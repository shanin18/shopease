import React from "react";
import SignUpForm from "../components/forms/SignUpForm";

const SignUp = () => {
  useTitle("Sign Up");
  return (
    <div
      className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      bis_skin_checked="1"
    >
      <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font ">
        Create An Account
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Enter your details below
      </p>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
