import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation().pathname.includes("signup");
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    Swal.fire({
      title: "Logout Successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const getClassNames = ({ isActive }) => (isActive ? "active" : "inactive");
  const getClassNames2 = ({ isActive }) => (isActive ? "active2" : "inactive2");

  return (
    <nav className="border-b relative">
      <div className="container mx-auto">
        <div
          className="flex flex-wrap p-5 items-center justify-between"
          bis_skin_checked="1"
        >
          <Link to="/">
            <span className="text-2xl font-bold">ShopEase</span>
          </Link>
          <div className="text-base hidden lg:block">
            <NavLink to="/" className={getClassNames2}>
              Home
            </NavLink>
            <NavLink to="/products" className={getClassNames2}>
              Products
            </NavLink>
            <NavLink to="/contact" className={getClassNames2}>
              Contact
            </NavLink>
            <NavLink to="/about" className={getClassNames2}>
              About
            </NavLink>
            {!user?.email && (
              <span>
                {location ? (
                  <NavLink to="/auth/signup" className={getClassNames2}>
                    Sign Up
                  </NavLink>
                ) : (
                  <NavLink to="/auth/login" className={getClassNames2}>
                    Login
                  </NavLink>
                )}
              </span>
            )}
            {user?.email && (
              <NavLink to="/dashboard/all-products" className={getClassNames2}>
                Dashboard
              </NavLink>
            )}
          </div>
          <div className="md:flex items-center gap-6 hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-full text-sm outline-none"
              />
              <CiSearch className="absolute text-xl top-2 right-2" />
            </div>
            {user?.email && <MdFavoriteBorder className="text-2xl" />}
            {user?.email && <CiShoppingCart className="text-3xl" />}

            {user?.email && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="#" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <HiOutlineBars3 className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center justify-end gap-6 p-5 pt-0 md:hidden">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-full text-sm outline-none"
            />
            <CiSearch className="absolute text-xl top-2 right-2" />
          </div>
          {user?.email && (
            <div>
              {" "}
              <MdFavoriteBorder className="text-2xl" />
            </div>
          )}
          {user?.email && (
            <div>
              <CiShoppingCart className="text-3xl" />
            </div>
          )}

          {user?.email && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="#" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="#">Settings</Link>
                </li>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* mobile sidebar */}
        <div
          className={`h-screen lg:hidden z-50 w-full sm:w-[300px] shadow-2xl text-gray-700 bg-white duration-500 absolute top-0 ${
            sidebarOpen ? "left-0" : "-left-[670px]"
          }`}
        >
          <div className="px-5 py-6 border-b flex items-center justify-between">
            <Link to="/">
              <span className="text-xl font-bold">ShopEase</span>
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <RxCross1 className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col">
            <NavLink
              to="/"
              className={getClassNames}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={getClassNames}
              onClick={() => setSidebarOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={getClassNames}
              onClick={() => setSidebarOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={getClassNames}
              onClick={() => setSidebarOpen(false)}
            >
              About
            </NavLink>
            {!user?.email && location && (
              <NavLink
                to="/auth/signup"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Sign Up
              </NavLink>
            )}

            {!user?.email && !location && (
              <NavLink
                to="/auth/login"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Login
              </NavLink>
            )}

            {user?.email && (
              <NavLink
                to="/dashboard/all-products"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
