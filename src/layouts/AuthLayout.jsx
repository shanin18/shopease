import React from "react";
import LoginImage from "../assets/images/login/login.png";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const AuthLayout = () => {
  return (
    <section>
      <Navbar />
      <div className="text-gray-600 body-font relative">
        <div
          className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
          bis_skin_checked="1"
        >
          <div
            className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
            bis_skin_checked="1"
          >
            <img src={LoginImage} alt="login image" />
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AuthLayout;
