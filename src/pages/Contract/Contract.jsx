import { useEffect, useState } from "react";
import UseAxiosSecure from "./UseAxiosScoure";


function Contract() {
  const axiosSecure = UseAxiosSecure();
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [short, setShort]=useState('');
  const [search, setSearch]=useState('');

  useEffect(() => {
    axiosSecure
      .get(`/allproduct?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&short=${short}&search=${search}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosSecure, currentPage, itemsPerPage, filter, search, short]);

  useEffect(() => {
    axiosSecure
      .get(`/product-count?filter=${filter}`)
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosSecure, filter]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationBtn = (value) => {
    setCurrentPage(value);
  };

  const handleSearch=e=>{
    e.preventDefault()
    const text =e.target.search.value
    setSearch(text);
  }

  const handleReset=()=>{
    setFilter('')
    setShort('')
    search('')
  }
  return (
    <>
      <section className="mb-10">
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
          <div>
            <select
              onChange={e => setFilter(e.target.value)}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Electronics'>Electronics</option>
              <option value='Woman Dress'>Woman Dress</option>
              <option value='Man Dress'>Man Dress</option>
            </select>
          </div>
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />
              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
            onChange={e=>{
              setShort(e.target.value)
              setCurrentPage(1)
            }}
            value={short}
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='btn'>
            Reset
          </button>
        </div>
      </section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-4">
                {data.length > 0 ?
                    (
                        data?.map((singleProduct) =>
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
                                                {singleProduct.date}
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
                        <p>Loading.....</p>
                    )
                }
            </div>

      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationBtn(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>
            <span className='mx-1'>previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map(btnNum => (
          <button
            key={btnNum}
            onClick={() => handlePaginationBtn(btnNum)}
            className={`hidden ${currentPage === btnNum ? "bg-blue-500 text-white" : ""} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationBtn(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}

export default Contract;