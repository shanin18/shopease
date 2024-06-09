import React from "react";
import UpdateProfileForm from "../components/forms/UpdateProfileForm";

const MyProfile = () => {

  return (
    <section className="text-gray-600 body-font relative container mx-auto px-5 md:px-0">
      <h1 className="text-gray-900 text-3xl lg:text-4xl title-font font-bold text-center my-8">
        My Profile
      </h1>
      <div
        className="md:w-3/4 lg:w-2/4 mx-auto shadow-xl p-5 my-10 rounded-md"
        bis_skin_checked="1"
      >
        <UpdateProfileForm />
      </div>
    </section>
  );
};

export default MyProfile;
