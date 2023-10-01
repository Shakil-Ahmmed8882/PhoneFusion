import { createBrowserRouter } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import HomeDisplay from "../../../Pages/Home/HomeDisplay";
import ProductDetails from "../../../Pages/Product/ProductDetails/ProductDetails";
import About from "../../../Pages/Header/About";
import Contact from "../../../Pages/Header/Contact";
import Login from "../../../Pages/Header/Login";
import DashboardLaout from "../Dashboard/DashboardLaout";
import Profile from "./Profile";
import Edit from "./Edit";
import Register from "../../../Pages/Header/Register";
import PrivateRoute from "../../../../🔒 Private-route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <HomeDisplay></HomeDisplay>,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
            path:'/register',
            element:<Register></Register>
      },
      {
        path: "/dashboard",
        element:<PrivateRoute> <DashboardLaout></DashboardLaout></PrivateRoute>,
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/edit",
            element: <Edit></Edit>,
          },
        ],
      },
    ],
  },
]);

export default router;
