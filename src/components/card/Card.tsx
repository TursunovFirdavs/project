'use client'
import React, { useState } from 'react'
import { FiStar } from 'react-icons/fi';

const Card = (item: any) => {
    const [visible, setVisible] = useState(false)
    console.log(visible);

    return (
        <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className={`max-w-[255px] w-full ${visible ? 'shadow-md' : 'shadow-sm'} bg-white pb-3 rounded-md`}>
            <img className='w-[200px] py-6 h-[200px] object-contain m-auto' src={visible && item?.images[1] ? item?.images[1]?.image : item?.images[0]?.image} alt="" />
            <p className='text-center text-[18px] text-secondary-blue'>{`${item?.title?.length > 20 ? item?.title?.slice(0, 20) : item?.title + '...'}`}</p>
            <p className='text-center px-2.5 text-[14px] pt-1.5 pb-2.5 text-secondary-dark'>{item?.other_detail?.slice(3, 42)}</p>
            {visible ?
                <button className='block w-[230px] m-auto rounded-3xl text-[14px] font-medium mt-2 transition-all duration-[0.5s] py-2 text-center bg-secondary-yellow'>Add To Cart</button> :
                <div className='transition-all duration-1000'>
                    <div className='flex justify-center'>
                        <div className='flex text-secondary-yellow gap-[1px] text-[14px]'><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                    </div>
                    <p className='text-center mt-2.5 text-[18px] font-semibold'>{item?.price}</p>

                </div>
            }
        </div>
    )
}

export default Card