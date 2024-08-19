import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Services from "../pages/Services";
import Error from "./error/Error";
import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";
import AboutUs from "../Components/aboutUs/aboutUs";
import HomeCompont from "../Components/home/HomeCompont";
import Product from "../pages/products/Product";
import Contract from "../pages/Contract/Contract";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children:
      [
        {
          path: "/",
          element: <HomeCompont />
        },
        {
          path: "/about",
          element: <AboutUs />
        },

        {
            path: "/products",
            element: <Product/>,
        },
        {
          path:"/contact",
          element:<Contract></Contract>
        },
        {
            path: "/signin",
            element: <SignIn/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
      ]
  },
]);