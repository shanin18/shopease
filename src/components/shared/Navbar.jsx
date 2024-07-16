import { useEffect, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useCart } from "../../providers/CartProvider";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const signup = location.pathname.includes("signup");
  const { logout, user } = useAuth();
  const { cart, filteredText, setFilteredText } = useCart();
  const filteredCart = cart?.filter((item) => item?.email === user?.email);

  console.log(sidebarOpen)

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    Swal.fire({
      title: "Logout Successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const getClassNames = ({ isActive }) => (isActive ? "active" : "inactive");
  const getClassNames2 = ({ isActive }) => (isActive ? "active2" : "inactive2");

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredText(e.target.value);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <nav className="border-b relative">
      <div className="container mx-auto">
        <div
          className="flex flex-wrap p-5 lg:px-0 items-center justify-between"
          bis_skin_checked="1"
        >
          <Link to="/">
            <span className="text-2xl font-bold">ShopEase</span>
          </Link>
          <div className="text-base hidden lg:block">
            <NavLink to="/" className={getClassNames2}>
              Home
            </NavLink>
            <NavLink
              onClick={() => setFilteredText("")}
              to="/products"
              className={getClassNames2}
            >
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
                {signup ? (
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
          <div className="sm:flex items-center gap-6 hidden">
            {location.pathname === "/products" && (
              <div className="relative">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search"
                  defaultValue={filteredText}
                  className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-full text-sm outline-none"
                />
                <CiSearch className="absolute text-xl top-2 right-2" />
              </div>
            )}

            {user?.email && <MdFavoriteBorder className="text-2xl" />}
            {user?.email && (
              <Link to="/cart" className="relative">
                <span className="bg-red-500 text-white px-1 rounded-full text-xs absolute -right-2 top-0">
                  {filteredCart?.length}
                </span>
                <CiShoppingCart className="text-3xl" />
              </Link>
            )}

            {user?.email && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {isLoading && (
                      <div className="w-10 h-10 rounded-full skeleton"></div>
                    )}
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      }
                      loading="lazy"
                      onLoad={handleImageLoad}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                    </Link>
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
        <div className="flex items-center justify-end gap-6 p-5 pt-0 sm:hidden">
          {location.pathname === "/products" && (
            <div className="relative">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search"
                className="border pl-3 pr-8 py-2 rounded bg-gray-200 w-full text-sm outline-none"
              />
              <CiSearch className="absolute text-xl top-2 right-2" />
            </div>
          )}
          {user?.email && (
            <div>
              {" "}
              <MdFavoriteBorder className="text-2xl" />
            </div>
          )}
          {user?.email && (
            <Link to="/cart" className="relative">
              <span className="bg-red-500 text-white px-1 rounded-full text-xs absolute -right-2 top-0">
                {filteredCart?.length}
              </span>
              <CiShoppingCart className="text-3xl" />
            </Link>
          )}

          {user?.email && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {isLoading && (
                    <div className="w-10 h-10 rounded-full skeleton"></div>
                  )}
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                    }
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
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
          className={`flex flex-col h-full lg:hidden z-30 bg-white top-0 fixed w-full sm:w-[300px] duration-300 shadow-xl left-0 ${
            !sidebarOpen && "-left-[675px]"
          } overflow-hidden`}
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
              onClick={() => {
                setSidebarOpen(false);
                setFilteredText("");
              }}
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
            {!user?.email && signup && (
              <NavLink
                to="/auth/signup"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Sign Up
              </NavLink>
            )}

            {!user?.email && !signup && (
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
