import { BsCup, BsFillBoxSeamFill } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";


const AboutUs = () => {
    return (
        <div>
            <section className="text-black  body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl lg:text-3xl md:text-2xl font-bold title-font mb-4 ">About us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Order now and appreciate the beauty of nature</p>
                    </div>
                    <div className="flex flex-wrap -m-2 ">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full p-4  text-center ">
                                <BsCup className="w-[63px] h-16 bg-[#C1DCDC] text-black p-3 text-center object-cover object-center flex-shrink-0 rounded-full mx-auto mb-5"/>

                                <div className="flex-grow">
                                    <h2 className=" title-font font-semibold">Large Assortment</h2>
                                    <p className=" text-center">we offer many different types of products with fewer variations in each category.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  text-center ">
                                <BsFillBoxSeamFill className="w-16 h-16 bg-[#C1DCDC] text-black p-3 text-center object-cover object-center flex-shrink-0 rounded-full mx-auto mb-5"/>

                                <div className="flex-grow">
                                    <h2 className=" title-font font-semibold">Fast & Free Shipping</h2>
                                    <p className=" text-center">4-day or less delivery time, free shipping and an expedited delivery option.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full mx-auto">
                            <div className="h-full text-center ">
                                <MdAddCall className="w-16 h-16 bg-[#C1DCDC] text-black p-3 text-center object-cover object-center flex-shrink-0 rounded-full mx-auto mb-5"/>
                                <div className="flex-grow">
                                    <h2 className=" title-font font-semibold">24/7 Support</h2>
                                    <p className=" text-center">answers to any business related inquiry 24/7 and in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><div>
            </div>
        </div>

    );
};

export default AboutUs;