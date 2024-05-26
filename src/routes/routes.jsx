import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/products" ,
        element: <Products />,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/signup",
        element: <SignUp />,
      },

    ],
  },
]);

export default router;
