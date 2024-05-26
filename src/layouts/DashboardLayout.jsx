import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation().pathname.includes("edit-products");
  console.log(location);

  return (
    <section className="text-gray-600 h-screen overflow-hidden">
      <div className="flex" bis_skin_checked="1">
        <div className="w-1/5">
          <div
            className={`h-screen w-full shadow-2xl text-gray-700 bg-white duration-500 `}
          >
            <div className="px-5 py-6 border-b flex items-center justify-between">
              <Link to="/">
                <span className="text-xl font-bold">ShopEase</span>
              </Link>
              <button className="">
                <RxCross1 className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col">
              <NavLink
                to="/"
                className="mr-5 hover:text-gray-900 hover:bg-gray-100 w-full py-3 px-5"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard/all-products"
                className="mr-5 hover:text-gray-900 hover:bg-gray-100 w-full py-3 px-5"
              >
                All Products
              </NavLink>
              <NavLink
                to="/dashboard/add-products"
                className="mr-5 hover:text-gray-900 hover:bg-gray-100 w-full py-3 px-5"
              >
                Add Products
              </NavLink>
              {location && (
                <NavLink
                  to="/dashboard/edit-products"
                  className="mr-5 hover:text-gray-900 hover:bg-gray-100 w-full py-3 px-5"
                >
                  Edit Products
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="w-4/5" bis_skin_checked="1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
