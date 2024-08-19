import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Services from "../pages/Services";
import Error from "./error/Error";
import SignIn from "../pages/signIn/signIn";
import SignUp from "../pages/signUp/signUp";
import Product from "../pages/products/product";
import AboutUs from "../Components/aboutUs/aboutUs";
import HomeCompont from "../Components/home/HomeCompont";


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