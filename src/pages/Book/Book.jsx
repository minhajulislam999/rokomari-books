import React, { use } from 'react'
import { FaStar } from "react-icons/fa";

const Book = ({ b }) => {
    // const data = use(bookPromise)
    // console.log(data)
    console.log(b)
    return (
        <div className='w-[374px]  h-[482px] px-24 py-24'>
            <div className="card bg-base-100 w-96 shadow-sm ">
                <figure className='w-[326px] h-[230px] rounded-[16px] bg-[#F3F3F3]'>
                    <img className='w-[124.81px] h-[166px]'
                        src={b.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body w-[326px] h-[180px] gap-[20px]">
                    <div className='flex'>
                        <p className='text-[#23BE0A]'>Young Adult</p>
                        <p className='text-[#23BE0A]'>Identity</p>


                    </div>
                    <div>
                        <p className='text-[#131313] font-bold text-[24px]'>

                            {b.bookName}
                        </p>

                    </div>
                    <div><p className='font-medium text-[16px]'>By : {b.author}</p></div>

                    <div className='flex w-full  justify-between'>


                            <p className='w-[54px] h-[19px]'>Category : {b.category}</p>




                        <div className='flex gap-8'>
                            <p>{b.rating}
                        </p>
                                                    <FaStar className="text-yellow-400" />

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Book
