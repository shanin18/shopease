import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  console.log(user);

  const getClassNames = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <nav className="border-b  relative">
      <div className="container mx-auto">
        <div
          className="flex flex-wrap p-5 items-center justify-between"
          bis_skin_checked="1"
        >
          <Link to="/">
            <span className="text-2xl font-bold">ShopEase</span>
          </Link>
          <div className="text-base hidden lg:block">
            <NavLink to="/" className="mr-5 hover:text-gray-900">
              Home
            </NavLink>
            <NavLink to="/products" className="mr-5 hover:text-gray-900">
              Products
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </NavLink>
            <NavLink to="/about" className="mr-5 hover:text-gray-900">
              About
            </NavLink>
            {!user?.email && (
              <NavLink to="/auth/login" className="mr-5 hover:text-gray-900">
                Login
              </NavLink>
            )}
            {user?.email && (
              <NavLink
                to="/dashboard/all-products"
                className="mr-5 hover:text-gray-900"
              >
                Dashboard
              </NavLink>
            )}
          </div>
          <div className="md:flex items-center gap-6 hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-auto sm:w-60 text-sm outline-none"
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
                      src={"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"}
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
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-auto sm:w-60 text-sm outline-none"
            />
            <CiSearch className="absolute text-xl top-2 right-2" />
          </div>
          <MdFavoriteBorder className="text-2xl" />
          <CiShoppingCart className="text-3xl" />
        </div>

        {/* mobile sidebar */}
        <div
          className={`h-screen lg:hidden z-50 w-full sm:w-[300px] shadow-2xl text-gray-700 bg-white duration-500 absolute  top-0  ${
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
            <NavLink to="/" className={getClassNames}>
              Home
            </NavLink>
            <NavLink to="/products" className={getClassNames}>
              Products
            </NavLink>
            <NavLink to="/contact" className={getClassNames}>
              Contact
            </NavLink>
            <NavLink to="/about" className={getClassNames}>
              About
            </NavLink>
            {!user?.email && (
              <NavLink to="/auth/login" className={getClassNames}>
                Login
              </NavLink>
            )}
            {user?.email && (
              <NavLink to="/dashboard/all-products" className={getClassNames}>
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
