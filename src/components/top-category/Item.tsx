'use client'

import React, { useState } from 'react'

const Item: React.FC<any> = ({data}) => {
    const[hover, setHover] = useState(false)
    
    
  return (
    <div className='flex flex-wrap justify-between gap-4'>
        {data?.slice(0,6)?.map((item:any) => (
            <div onMouseOver={() => setHover(true)} className='w-[374px] bg-white rounded-sm flex gap-3 items-center py-3.5 px-2.5' key={item.id}>
                <img className='w-[130px]' src={item.images[0].image} alt="" />
                <div>
                    <p className='text-[12px] text-secondary-dark'>Digital, Game & Toys, Women</p>
                    <p className='text-[14px] text-secondary-blue pt-1 pb-2.5'>{item.title}</p>
                    <p className='text-[18px] font-medium'>{`$${item.price}`}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Item