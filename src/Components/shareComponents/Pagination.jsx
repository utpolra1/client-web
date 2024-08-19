/* eslint-disable react/prop-types */

import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Pagination = ({ pageNumber, setPageNumber, totalItem, parPage,showItem}) => {

    
    let totalPage = Math.ceil(totalItem / parPage); // 50 / 5,20,25
    // console.log(totalPage); //10


     {/* step2 start  */}
    let startPage = pageNumber; //1
    // console.log(startPage);

    let dif = totalPage - pageNumber; //10 - 1.2.3
    // console.log(dif);


    if (dif <= showItem) {
        startPage = totalPage - showItem //10-4 =6
    }

    let endPage = startPage < 0 ? showItem : showItem + startPage

    if (startPage <= 0) {
        startPage = 1
    }

    const createBtn = () => {
        const btns = []

        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li onClick={() => setPageNumber(i)} className={`
                    ${pageNumber === i ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white' : 'bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`
                }>
                    {i}
                </li>
            )
        }
        return btns
    }
    {/* step2 end  */}


    //PaginationButton 
    const pageNumbers = [];
    
    for (let i = pageNumber; i <= totalPage; i++)
        pageNumbers.push(i);
    
    

    return (
        <>

            <ul className='flex gap-5'>
            {
                pageNumber > 1 && 
                <li onClick={() => setPageNumber(pageNumber - 1)} 
                  className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer'>
                  <BsChevronDoubleLeft />
                </li>
            }

                {
                     createBtn()
                }
            {
                pageNumber < totalPage && <li onClick={() => setPageNumber(pageNumber + 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer'>
                    <BsChevronDoubleRight />
                </li>
            }
            </ul>


        </>

    )
}


export default Pagination;