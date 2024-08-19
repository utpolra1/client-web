import { useContext, useState } from "react";
import "../Style.css";
import { TfiAlignRight } from "react-icons/tfi";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { MdShoppingCartCheckout } from "react-icons/md";
import { AuthContext } from "../../hook/provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();

    //LogOut Handle
    const onSignout = () => {
        logOut()
            .then(() => {
                navigate("/signin")
            })
            .catch(err => console.log(err))
    }

    //responsive Navbar Modal
    const [open, setOpen] = useState(false);

    return (
        <>
         <header className="bg-slate-200 ">
                <nav className="flex justify-between xl:px-16 lg:px-10 md:px-6 px-3 py-3 items-center w-full mx-auto ">
                    <div className="lg:text-3xl font-bold font-serif">
                       ALIEXPRESS                    
                    </div>
                    <div className={`md:static md:min-h-fit  md:w-auto  absolute min-h-[30vh]  left-0  w-full flex items-center  pl-1 duration-500   ${open ? 'top-14 lg:bg-hidden md:hidden-bg-amber-200  bg-amber-200 z-50 ' : 'top-[-100%] '}`}>
                        <ul className="  flex md:flex-row flex-col md:items-center md:gap-10  gap-4 font-bold">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending" : ""}> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending" : ""}> Products </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "active text-orange-400" : isPending ? "pending" : ""}> Contacts </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
         
                        {
                            user ? <>
                                <div className="flex justify-center items-center gap-2">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                        <div className="w-24 flex justify-center items-center mb-7 rounded-full">
                                            {
                                                user &&
                                                <div>
                                                    <img className="w-5 h-6" src={user?.photoURL} alt="User Image" />
                                                </div>

                                            }
                                        </div>

                                    </label>
                                </div>
                                <button className="btn hidden bg-[#97b6b6] lg:flex" onClick={onSignout}>SignOut</button>
                            </>
                                :
                                <Link to="/signin">
                                    <button className="bg-[#577dc0] text-white lg:px-2 lg:py-2   rounded-xl hover:bg-[#87acec]">Sign in
                                    </button>
                                </Link>
                        }

                        <div onClick={() => setOpen(!open)} className="text-3xl  cursor-pointer md:hidden lg:hidden mt-2">
                            <TfiAlignRight className="text-[30px] ml-5" name={open ? 'close' : 'menu'} ></TfiAlignRight>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;