import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/axiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";

const Product = () => {
    const axiosPublic = useAxiosPublic();
    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState();
    const [category, setCategory] = useState('');
    const [brandName, setBrandName] = useState('');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    // Search Product Form
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setSearch(data.ProductName);
        setCurrentPage(1); // Reset to the first page on search
    };

    // Fetch all products
    useEffect(() => {
        axiosPublic.get(`/api/getAllData`)
            .then(res => {
                setAllData(res.data);
            });
    }, [axiosPublic]);

    // Search Product
    useEffect(() => {
        if (search) {
            axiosPublic.get(`/api/productSearching?ProductName=${search}`)
                .then(res => {
                    setAllData(res?.data);
                });
        } else {
            axiosPublic.get("/api/getAllData")
                .then(res => {
                    setAllData(res.data);
                });
        }
    }, [axiosPublic, search]);

    // Sorting Products
    useEffect(() => {
        axiosPublic.get(`/api/sortingProduct?sortOrder=${sort}`)
            .then(res => {
                setAllData(res.data);
            });
    }, [sort, axiosPublic]);

    useEffect(() => {
        axiosPublic.get(`/api/sortingProductDate?sortDate=${sort}`)
            .then(res => {
                setAllData(res.data);
            });
    }, [sort, axiosPublic]);

    // Filter Products
    useEffect(() => {
        axiosPublic.get(`/api/filterProducts?categoryName=${category}`)
            .then(res => {
                setAllData(res.data);
            });
    }, [category, axiosPublic]);

    useEffect(() => {
        axiosPublic.get(`/api/filterProducts?brandName=${brandName}`)
            .then(res => {
                setAllData(res.data);
            });
    }, [brandName, axiosPublic]);

    const handleSorting = (e) => {
        setSort(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
        setCurrentPage(1); // Reset to the first page on filter
    };

    const handleBrandName = (e) => {
        setBrandName(e.target.value);
        setCurrentPage(1); // Reset to the first page on filter
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-[6rem] mt-5 mb-5">
                    <input
                        type="text"
                        {...register("ProductName", { required: false })}
                        className="grow input input-bordered flex items-center gap-[6rem] mt-5 mb-5 w-1/2 mx-auto"
                        placeholder="Search Your Product Name"
                    />
                </form>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between gap-5 mx-10">
                {/* Sorting */}
                <div className="h-10 w-full">
                    <p className="w-52">Sorting</p>
                    <select defaultValue="" onChange={handleSorting} className="bg-[#0cc4b0] text-white">
                        <option value="">Sort by price</option>
                        <option value="1">Ascending sort by price</option>
                        <option value="-1">Descending sort by price</option>
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-start items-center mb-10 gap-5">
                    {/* Filtering */}
                    <div className="h-10 w-full">
                        <p className="w-fit">Category Name Filter</p>
                        <select value={category} onChange={handleCategory} className="bg-[#0cc4b0] text-white">
                            <option value="">Filtering</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Woman Dress">Woman Dress</option>
                            <option value="Man Dress">Man Dress</option>
                        </select>
                    </div>

                    <div className="h-10 w-full">
                        <p className="w-52">Product Name Filter</p>
                        <select value={brandName} onChange={handleBrandName} className="bg-[#0cc4b0] text-white">
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

                    <div className="h-10 w-full">
                        <p className="w-52">Price Filter</p>
                        <select value={category} onChange={handleCategory} className="bg-[#0cc4b0] text-white">
                            <option value="">Filtering</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-4">
                {currentItems.length > 0 ? (
                    currentItems.map((singleProduct) => (
                        <div key={singleProduct._id} className="group relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white border border-slate-400 text-gray-700 shadow-xl mx-auto">
                            <div className="mx-4 mt-4 overflow-hidden rounded-xl text-white shadow-lg">
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
                                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                    <h2>$ {singleProduct.Price}</h2>
                                    <h2>{singleProduct.Category}</h2>
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
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-1 bg-gray-300 text-black rounded-lg"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-1 bg-gray-300 text-black rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;