import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";
import Pagination from "../../Components/shareComponents/Pagination";

const Product = () => {
    const axiosPublic = useAxiosPublic();
    const [allData, setAllData] = useState([]);
    // searching
    const [search, setSearch] = useState('');
    // sorting
    const [sort, setSort] = useState();
    // filter
    const [category, setCategory] = useState('');
    const [brandName, setBrandName] = useState('');


     // @ Pagination Api   
    const [parPage, setParPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(10);
    useEffect(() => {
        axiosPublic.get(`/api/productsPagination?page=${currentPage}&parPage=${parPage}`)
            .then(res => {
                setTotalItems(res.data.total);
            })
            .catch(err => console.error(err));
    }, [axiosPublic,currentPage, parPage]);




    //Search Product Form
    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        setSearch(data.ProductName);
    }

    // // Handle input changes
    // const handleChange = (event) => {
    //     setSearch(event.target.value);
    // };


    //Get All Product 
    useEffect(() => {
        axiosPublic.get(`/api/getAllData`)
            .then(res => {
                setAllData(res.data);
            })
    }, [axiosPublic]);

    //Search Product 
    useEffect(() => {
        // console.log(search);
        if (search) {
            axiosPublic.get(`/api/productSearching?ProductName=${search}`)
                .then(res => {
                    // console.log(res.data);
                    setAllData(res?.data);
                })
        }
        else {
            // যদি search term না থাকে, তাহলে সব প্রোডাক্ট আবার দেখানো হবে
            axiosPublic.get("/api/getAllData")
                .then(res => {
                    setAllData(res.data);
                })

        }
    }, [axiosPublic, search]);

    //@ Sorting Api Price
    useEffect(() => {
        axiosPublic.get(`/api/sortingProduct?sortOrder=${sort}`)
            .then(res => {
                setAllData(res.data);
            })
    }, [sort, axiosPublic]);
    //@ Sorting Api Date
    useEffect(() => {
        axiosPublic.get(`/api/sortingProductDate?sortDate=${sort}`)
            .then(res => {
                setAllData(res.data);
            })
    }, [sort, axiosPublic]);

    const handleSorting = (e) => {
        console.log(e.target.value)
        setSort(e.target.value)
    }
    const handleItemPerPage = (e) => {
        const val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0);
    };

    //filter 
    useEffect(() => {
        axiosPublic.get(`/api/filterProducts?categoryName=${category}`)
            .then(res => {
                // console.log(res.data)
                setAllData(res.data);
            })
    }, [category, axiosPublic]);
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    useEffect(() => {
        axiosPublic.get(`/api/filterProducts?brandName=${brandName}`)
            .then(res => {
                // console.log(res.data)
                setAllData(res.data);
            })
    }, [brandName, axiosPublic]);
    const handlebrandName = (e) => {
        setBrandName(e.target.value);
    }
    return (
        <div>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="  flex items-center gap-[6rem] mt-5 mb-5" >
                    <input
                        type="text" {...register("ProductName", { required: false })}
                        className="grow input input-bordered flex items-center gap-[6rem] mt-5 mb-5 w-1/2 mx-auto"
                        placeholder="Search Your Product Name"
                    />
                </form>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between gap-5 mx-10">
                {/* ! sorting */}
                <div className="h-10 w-full">
                    <p className="w-52">Sorting</p>
                    <select defaultValue="" onChange={handleSorting} className="bg-[#0cc4b0] text-white" >

                        <option value=""> Sort by price</option>
                        <option value="1">Asending sort by price</option>
                        <option value="-1">desending sort by price</option>
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>
                {/*! sorting  end*/}

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-start items-center mb-10 gap-5">
                    {/* filtering */}
                    {/* category Name */}
                    <div className="h-10 w-full ">
                        <p className="w-fit">Category Name Filter</p>
                        <select value={category} onChange={handleCategory} className="bg-[#0cc4b0] text-white">
                            <option value="">Filtering</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Woman Dress">Woman Dress</option>
                            <option value="Man Dress">Man Dress</option>
                        </select>


                    </div>
                    {/* Product Name */}
                    <div className="h-10 w-full">
                        <p className="w-52">Product Name Filter</p>
                        <select value={brandName} onChange={handlebrandName} className="bg-[#0cc4b0] text-white">
                            <option value="">Filtering</option>
                            <option value="Men T-shirt">Men T-shirt</option>
                            <option value="Wireless Watch">Wireless Watch</option>
                            <option value="Smart TV">Smart TV</option>
                            <option value="Wireless Men Watch">Wireless Men Watch</option>
                            <option value="Orage Thri Paish">Orage Thri Paish</option>
                            <option value="New 2023 Shirts Men">New 2023 Shirts Men </option>
                            <option value="Women Multicolor">Women Multicolor</option>
                            <option value="Watch Smartwatch">Watch Smartwatch</option>
                            <option value="Dslr Camera on White Surface">Dslr Camera</option>
                            <option value="HY Shirt Men 2020 Fall Men s Slim Long Sleeve Shirt Casual Fashion">HY Shirt Men</option>
                            <option value="Apple introduces i Phone 12">i Phone 12</option>
                            <option value="Fashion Big Size M5 XL Mens Long Sleeve Casual Shirt High Quality">Fashion Big Size</option>
                            <option value="Premium Solid Color Formal Shirt For Men UR Fashion">Premium Formal Shirt</option>
                            <option value="Three Piece Dress With Embroidery">Three Piece Dress</option>
                            <option value="Xiaomi Mi Band 8 NFC Metal magnetic wristband Miband8 smartwatch">Xiaomi Mi Band</option>
                            <option value="Jam Color Half Silk Saree – Matribhumi Fashion">Jam Half Silk Saree</option>
                            <option value="Best Watches For Men Fashonation">Best Watches For Men</option>
                            <option value="Wedding Silk Saree for Brides Find Best Bridal Sarees BharatSthali">Wedding Silk Saree</option>
                            <option value="The best TV 2024 chosen by our reviewers for all budgets Tech Radar">The best TV 2024</option>
                            <option value="J.VER Men's Dress Shirts Solid Long">J.VER Mens Dress Shirts</option>
                            <option value="Cotton Batik Three Piece MT 2197 SMT">Cotton Batik Three Piece</option>
                            <option value="vivo v30">vivo v30</option>
                            <option value="New 2023 Shirts Men">New 2023 Shirts Men</option>
                            <option value="Xiaomi 14">Xiaomi 14</option>
                            <option value="Cotton Three Piece For Women">Cotton Three Piece</option>
                            <option value="Xiaomi Mi TV P1 32 inch Android HD Tv With 12 Months Warranty">Xiaomi Mi TV</option>
                            <option value="HUAWEI Wearables HUAWEI Bangladesh">HUAWEI Wearables</option>
                            <option value="Long Sleeve Stylish Shirt">Long Sleeve Shirt</option>
                            <option value="Xiaomi 14 Ultra Xiaomi Global">Xiaomi 14 Ultra</option>
                            <option value="i Phone SE">i Phone SE</option>
                            <option value="Rajshahi Samu Silk Saree Price in Bangladesh Bostro by Diamu">Samu Silk Saree </option>
                            <option value="Xiaomi 13 Ultra">Xiaomi 13 Ultra</option>
                            <option value="Ladies Three Piece Dk Red">Ladies Three Piece</option>
                            <option value="Garmin Bounce Smartwatch for Kids">Garmin Smartwatch</option>
                            <option value="POEDAGAR Chronograph Watch for Men 988 ICONIC SHOP">POEDAGAR Watch</option>
                            <option value="Apple Watch Apple">Apple Watch Apple</option>
                            <option value="The best cameras in 2024 Tom's Guide">The best cameras</option>
                            <option value="Black Transistor Beside Capacitor">Black Transistor</option>
                            <option value="Yasuka 43 Inch FHD Frameless Android Smart LED TV">Android Smart TV</option>
                        </select>


                    </div>
                    {/* Price  */}
                    <div className="h-10 w-full">
                        <p className="w-52">Price Filter</p>
                        <select value={category} onChange={handleCategory} className="bg-[#0cc4b0] text-white">
                            <option value="">Filtering</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Woman Dress">Woman Dress</option>
                            <option value="Man Dress">Man Dress</option>
                        </select>


                    </div>
                    {/* filtering end */}
                </div>

            </div>
            {/* component */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-4">
                {allData.length > 0 ?
                    (
                        allData?.map((singleProduct) =>
                            <>
                                <div className=" group relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white border border-slate-400 text-gray-700 shadow-xl mx-auto">
                                    <div className="mx-4 mt-4 overflow-hidden rounded-xl  text-white shadow-lg ">

                                        <img src={singleProduct.ProductImage} alt={singleProduct.ProductName} className="h-72 mx-auto w-52 object-center transition duration-500 group-hover:scale-105" />

                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3 flex items-center justify-between">
                                            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                {singleProduct.ProductName}
                                            </h5>
                                            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                                {singleProduct.Ratings}
                                            </p>
                                        </div>
                                        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                                            {singleProduct.Description}
                                        </p>
                                        <div className=" mt-4 flex flex-wrap items-center justify-between gap-3">
                                            <h2 >
                                                $ {singleProduct.Price}
                                            </h2>
                                            <h2>
                                                {singleProduct.Category}
                                            </h2>
                                        </div>
                                        <div>
                                            <span>
                                                {new Date(singleProduct.creationDate).toLocaleString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit',
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-3">
                                        <button className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    )
                    : (
                        <p>No products found</p>
                    )
                }
            </div>

              {/* Pagination */}
            <div className="flex flex-col  md:flex-row justify-center items-center my-5 gap-3 mx-auto w-full">
                <div className='flex justify-center md:justify-center items-center w-full md:w-auto"'>
                    <select value={totalItems} onChange={handleItemPerPage} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                    </select>
                </div>
                <div className='w-full flex justify-center md:justify-between mt-4 bottom-4 right-4'>
                <Pagination
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem={totalItems} //40
                    parPage={parPage}//5
                    showItem={10}
                />
               </div>
            </div>
        </div>

    );
};

export default Product;