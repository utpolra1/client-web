import { Outlet } from "react-router-dom";
import NavBar from "../Components/shareComponents/Navbar";
import Footer from "../Components/shareComponents/Footer";



const MainLayOut = () => {
    return (
        <div className="w-full min-h-screen">
            <NavBar />
               <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayOut;