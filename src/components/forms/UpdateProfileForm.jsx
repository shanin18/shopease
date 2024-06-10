import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { SlCamera } from "react-icons/sl";
import LoadingSpinner from "../others/LoadingSpinner";

const UpdateProfileForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfileImage, setUserProfileImage] = useState(null);

  const { user, updateUserPassword, updateUserProfile, updateUserEmail } =
    useAuth();

  useEffect(() => {
    setUserProfileImage(user?.photoURL);
  }, [user?.photoURL]);

  const firstName = user?.displayName?.split(" ")[0];
  const lastName = user?.displayName?.split(" ")[1];
  const email = user?.email;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = `${firstName} ${lastName}`;

    let uploadedImageUrl = userProfileImage;

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=cd327fd692b409d198b2f746dd912553",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        uploadedImageUrl = data?.data?.display_url;
        setUserProfileImage(uploadedImageUrl);

        // Reset the file input and preview
        setImage(null);
        setPreview(null);
      } catch (error) {
        console.error("Error uploading the image:", error);
        Swal.fire({
          title: "Error",
          text: "Error uploading the image",
          icon: "error",
        });
        return;
      }
    }

    try {
      if (password) {
        await updateUserPassword(password);
      }
      await updateUserProfile(displayName, uploadedImageUrl);
      await updateUserEmail(email);

      Swal.fire({
        title: "Profile Updated!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleUpdateProfile} className="space-y-8">
      <div className="flex justify-center">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-32 h-32 rounded-full overflow-hidden relative"
        >
          {isLoading && <div className="w-32 h-32 rounded-full skeleton"></div>}
          <img
            src={
              preview ||
              userProfileImage ||
              "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            }
            onLoad={handleImageLoad}
            alt="Preview"
            loading="lazy"
            className="w-full"
          />
          <label
            htmlFor="profileImage"
            className={`text-white absolute bottom-0 z-10 w-full h-1/2 flex justify-center backdrop-blur-sm cursor-pointer transition-all duration-300 ${
              hover ? "bottom-0" : "-bottom-full"
            }`}
          >
            <SlCamera className="text-xl mt-3" />
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
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
              type="text"
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
              type="password"
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
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-base cursor-pointer"
        />
      </div>
    </form>
  );
};

export default UpdateProfileForm;
