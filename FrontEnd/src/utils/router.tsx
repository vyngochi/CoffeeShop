import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Products from "../pages/user/Products";
import Blog from "../pages/user/Blog";
import AboutUs from "../pages/user/AboutUs";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "products", element: <Products /> },
      { path: "blog", element: <Blog /> },
      { path: "aboutus", element: <AboutUs /> },
    ],
  },
  { path: "test", element: <Test /> },
]);

export default router;
