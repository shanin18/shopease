import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdAddShoppingCart } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const location = useLocation().pathname.includes("edit-products");

  const getClassNames = ({ isActive }) => (isActive ? "active" : "inactive");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
        setLargeScreen(true);
      } else {
        setSidebarOpen(false);
        setLargeScreen(false);
      }
    };

    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-gray-600 h-screen overflow-hidden">
      <div className="flex relative" bis_skin_checked="1">
        <div className="lg:w-1/5 border">
          <div
            className={`h-screen w-full sm:w-[300px] lg:w-auto shadow-2xl lg:shadow-none text-gray-700 bg-white duration-500 absolute lg:relative top-0 z-50 ${
              sidebarOpen ? "left-0" : "-left-[670px]"
            }`}
          >
            <div className="px-5 py-6 border-b flex items-center justify-between">
              <Link to="/">
                <span className="text-xl font-bold">ShopEase</span>
              </Link>
              <button
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <RxCross1 className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col">
              <NavLink to="/" className={getClassNames}>
                <AiOutlineHome className="text-lg inline mr-2 mb-1" />
                Home
              </NavLink>
              <NavLink
                to="/dashboard/all-products"
                className={getClassNames}
                onClick={() => !largeScreen && setSidebarOpen(false)}
              >
                <AiOutlineProduct className="text-lg inline mr-2 mb-1" />
                All Products
              </NavLink>
              <NavLink
                to="/dashboard/add-products"
                className={getClassNames}
                onClick={() => !largeScreen && setSidebarOpen(false)}
              >
                <MdAddShoppingCart className="text-lg inline mr-2 mb-1" />
                Add Products
              </NavLink>
              {location && (
                <NavLink
                  to="/dashboard/edit-products"
                  className={getClassNames}
                  onClick={() => !largeScreen && setSidebarOpen(false)}
                >
                  <FaRegEdit className="text-lg inline mr-2 mb-1" />
                  Edit Products
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5" bis_skin_checked="1">
          <div
            className="flex flex-wrap p-5 items-center justify-between border-b lg:hidden"
            bis_skin_checked="1"
          >
            <Link to="/">
              <span className="text-2xl font-bold">ShopEase</span>
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <HiOutlineBars3 className="text-2xl" />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
