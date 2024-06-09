import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfileForm = () => {
  const { user, updateUserPassword, updateUserProfile, updateUserEmail } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const firstName = user?.displayName.split(" ")[0];
  const lastName = user?.displayName.split(" ")[1];
  const email = user?.email;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Extract form data
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = `${firstName} ${lastName}`;

    try {
      // Update user password
      await updateUserPassword(password);

      // Update user profile
      await updateUserProfile(displayName, "");

      // Update user email
      await updateUserEmail(email);

      Swal.fire({
        title: "Profile Updated!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      // Navigate to the specified location
      navigate(from, { replace: true });
    } catch (error) {
      // Handle errors
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleUpdateProfile} className="space-y-8">
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="w-full">
            <label htmlFor="firstName" className="block font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              defaultValue={firstName}
              required
              className="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="block font-medium mb-2">
              Last Name
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              defaultValue={lastName}
              className="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="w-full">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              defaultValue={email}
              className="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block font-medium mb-2">
              New Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="New Password"
              className="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="text-right">
        <input
          type="submit"
          value="Update profile"
          className="text-white btn bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-base"
        />
      </div>
    </form>
  );
};

export default UpdateProfileForm;
