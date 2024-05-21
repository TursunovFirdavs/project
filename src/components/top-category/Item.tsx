'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Item: React.FC<any> = ({data}) => {
    const[hover, setHover] = useState(false)
    
    
  return (
    <div className='flex flex-wrap items-center justify-between md:h-[340px] h-[460px] overflow-auto sm:overflow-hidden gap-4'>
        {data?.slice(0,6)?.map((item:any) => (
            <div onMouseOver={() => setHover(true)} className='lg:max-w-[374px] md:max-w-[280px] max-w-full w-full bg-white rounded-sm flex gap-3 items-center py-3.5 px-2.5' key={item.id}>
                <img className='lg:w-[130px] lg:h-[130px] w-[110px] h-[110px]' src={item.images[0].image} alt="" />
                <div>
                    <p className='text-[12px] text-secondary-dark'>Digital, Game & Toys, Women</p>
                    <Link href={`/product/${item.id}`} className='text-[14px] text-secondary-blue pt-1 pb-2.5'>{item.title.slice(0, 32) + '...'}</Link>
                    <p className='text-[18px] font-medium'>{`$${item.price}`}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Item