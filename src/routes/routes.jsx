import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProducts from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import EditProducts from "../pages/EditProducts";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "products",
        element: <Products />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "products/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params?.id}`),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "edit-products/:id",
        element: <EditProducts />,
      },
    ],
  },
]);

export default router;
