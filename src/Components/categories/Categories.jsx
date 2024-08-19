
import { Link } from "react-router-dom";


const Categories = () => {
   

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12 ">
                  {/* text - start */}
                    <div className="mb-40 ">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Categories</h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500  md:text-lg">Find what you are looking for</p>
                    </div>
                    {/* text - end */}
                <div className="mx-auto max-w-screen-2xl  bg-[#C1DCDC]  lg:h-[650px] md:h-[1115px] h-[1500px] ">
                    <div  className="">
                        <div className="grid lg:gap-4 md:gap-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mx-10 md:mx-20 ">
                            {/* product - start */}
                            <div className="-mt-14">
                                <a href="#" className="group  block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://i.ibb.co/hyXYtRZ/Ladies-Three-Piece-Dk-Red.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Woman T-Shirts</p>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div className="mt-14">
                                <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://i.ibb.co/MBJnPvQ/Cotton-T-shirt-with-Pocket-for-Men-Sky-Blue.png " loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3 mb-28">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Man T-Shirts</p>
                                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Link to="/products"><button type="button" className="mt-4 btn hover:bg-indigo-600 bg-[#97b6b6] border-none mx-auto">Explore ➡ </button></Link>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div className="-mt-10">
                                <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                    <img src="https://i.ibb.co/D4tPCRT/Kieslect-KR-Smartwatch-Price-in-BD-RYANS.webp" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div >
                                    <div className="flex flex-col text-center mt-3">
                                        <p className="font-bold text-gray-800 text-center transition duration-100 lg:text-lg">Electronics</p>
                                    </div>
                                </div>
                            </div>
                            {/* product - end */}
                        </div>
                    </div>

                </div>
            </div>

        </>


    );
};

export default Categories;